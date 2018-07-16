package main

import (
	"log"
	"time"

	"github.com/globalsign/mgo"
	"github.com/kataras/iris"
	"gopkg.in/mgo.v2/bson"
)

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
	app.StaticWeb("/", "./build")
	api := app.Party("/api/v1")
	t := api.Party("/transactions")
	t.Post("/add", transactionAddingHandler(session))
	t.Get("/all", getAllTransactionsHandler(session))

	app.Run(iris.Addr(":8080"))
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
