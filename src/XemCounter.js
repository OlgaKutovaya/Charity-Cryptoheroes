import { h, Component } from "preact";
import Portal from "preact-portal";
import Iframe from "react-iframe";
import RecentContributions from "./RecentContributions";

const Donate = () => (
  <Iframe
    url="https://app.paytomat.com/pay_product/sdpMoGpn2jP"
    width="680"
    height="600"
  />
);

const formatBalance = balance => {
  const balArr = String(balance / 1000000).split("");
  while (balArr.length < 6) {
    balArr.unshift("0");
  }
  return balArr;
};

export default class XemCounter extends Component {
  state = {
    balance: 0,
    modalOpen: false,
    ModalComponent: null,
    modalName: "",
  };

  componentDidMount() {
    fetch("/api/v1/walletBalance", { method: "GET" })
      .then(res => res.json())
      .then(res => this.setState({ balance: res.account.balance }))
      .catch(err => console.log(err));
  }

  render() {
    const { ModalComponent, modalOpen, balance } = this.state;
    return (
      <div>
        <div className="d-flex justify-content-between align-content-center">
          <p className="mt-3">
            <b>Уже собрано</b>
          </p>
          <p className="text-xem">
            <b>XEM</b>
          </p>
        </div>
        <div className="counter d-flex justify-content-around">
          {formatBalance(balance).map((int, i) => (
            <div>
              {i === 6 ? <div className="counter-point" /> : null}
              <div className="counter-content">
                <p className="text-counter">{int}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="btn btn-lg btn-charity d-block bg-green"
          id="btnPay"
          onClick={() => {
            this.setState({
              modalOpen: true,
              ModalComponent: Donate,
              modalName: "Пожертвовать",
            });
          }}
        >
          ПОЖЕРТВОВАТЬ
        </button>
        <button
          className="d-block m-auto text-center link-last-charity"
          onClick={() => {
            this.setState({
              modalOpen: true,
              ModalComponent: RecentContributions,
              modalName: "Последние взносы",
            });
          }}
        >
          Последние взносы
        </button>
        {modalOpen ? (
          <Portal into="body">
            <div id="modalLastCharity" tabIndex="-1" role="dialog">
              <main className="container-fluid main-wrapper">
                <h3 className="text-blue text-uppercase">
                  Cryptoheroes
                  <div
                    tabIndex="0"
                    id="btnCloseContributions"
                    role="button"
                    onClick={() => {
                      this.setState({
                        modalOpen: false,
                        ModalComponent: null,
                        modalName: "",
                      });
                    }}
                  >
                    <i className="fa fa-fw fa-times" />
                  </div>
                </h3>
                <h4 className="text-left text-blue main-header">
                  {this.state.modalName}
                </h4>
                <span className="underline d-block" />
                <ModalComponent />
              </main>
            </div>
          </Portal>
        ) : null}
      </div>
    );
  }
}
