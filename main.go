package main

import (
	"log"
	"os"
	"time"

	"./dist"
	"github.com/globalsign/mgo"
	"github.com/kataras/iris"
	"github.com/parnurzeal/gorequest"
	"gopkg.in/mgo.v2/bson"
)

const nodeURL = "62.75.171.41:7890"
const accountAddress = "NB7N2TY5DYV3LOVCK5I3LN5U6C2JTMXTKHP6U3HE"

const serverAddr = "159.89.106.229:443"
const devServerAddr = ":8080"
const serverMail = "cryptoheroesteam@gmail.com"

type Transaction struct {
	TxID      string    `json:"tx_id"`
	TxCode    string    `json:"tx_code"`
	Amount    string    `json:"amount"`
	QR        string    `json:"qr_code"`
	Status    string    `json:"tx_status"`
	Timestamp time.Time `json:"timestamp"`
	Details   struct {
		Name    string `json:"name"`
		Phone   string `json:"phone"`
		Message string `json:"message"`
		Email   string `json:"email"`
	} `json:"details"`
}

type Wallet struct {
	Account struct {
		Balance int `json:"balance"`
	} `json:"account"`
}

func main() {
	app := iris.New()
	session, err := mgo.Dial("localhost")
	if err != nil {
		panic(err)
	}
	defer session.Close()
	session.SetMode(mgo.Monotonic, true)

	c := session.DB("charity").C("transactions")
	index := mgo.Index{
		Key:        []string{"tx_id"},
		Unique:     true,
		DropDups:   true,
		Background: true,
		Sparse:     true,
	}

	err = c.EnsureIndex(index)
	if err != nil {
		panic(err)
	}

	app.RegisterView(iris.HTML("./build", ".html"))
	app.Get("/", func(ctx iris.Context) {
		ctx.View("index.html")
	})
	app.StaticServe("./paytomat.css", "/paytomat")
	assetHandler := iris.StaticEmbeddedHandler("./build", dist.GzipAsset, dist.GzipAssetNames, true)
	app.SPA(assetHandler).AddIndexName("index.html")

	api := app.Party("/api/v1")
	t := api.Party("/transactions")
	t.Post("/add", transactionAddingHandler(session))
	t.Get("/all", getAllTransactionsHandler(session))
	api.Get("/walletBalance", getWalletBalance)

	if os.Getenv("MODE") == "production" {
		app.Run(iris.AutoTLS(serverAddr, "", serverMail))
	} else {
		app.Run(iris.Addr(devServerAddr))
	}
}

func transactionAddingHandler(s *mgo.Session) func(ctx iris.Context) {
	return func(ctx iris.Context) {
		session := s.Copy()
		defer session.Close()

		c := session.DB("charity").C("transactions")

		trans := Transaction{}
		ctx.ReadJSON(&trans)
		trans.Timestamp = time.Now()
		err := c.Insert(trans)
		if err != nil {
			log.Println(err)
		}

		ctx.StatusCode(200)
	}
}

func getAllTransactionsHandler(s *mgo.Session) func(ctx iris.Context) {
	return func(ctx iris.Context) {
		session := s.Copy()
		defer session.Close()

		c := session.DB("charity").C("transactions")

		var trans []Transaction
		err := c.Find(bson.M{}).All(&trans)
		if err != nil {
			log.Println(err)
		}

		ctx.JSON(trans)
	}
}

func getWalletBalance(ctx iris.Context) {
	var w Wallet
	gorequest.New().Get("http://" + nodeURL + "/account/get?address=" + accountAddress).EndStruct(&w)
	ctx.JSON(w)
}
