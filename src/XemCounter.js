import { h, Component } from "preact";
import Portal from "preact-portal";
import Iframe from "react-iframe";
import RecentContributions from "./RecentContributions";

const ADDRESS = "NB7N2TY5DYV3LOVCK5I3LN5U6C2JTMXTKHP6U3HE";
const ACCOUNT_INFO_URL = `http://62.75.171.41:7890/account/get?address=${ADDRESS}`;

const Donate = () => (
  <Iframe
    url="https://app.paytomat.com/pay_product/sdpMoGpn2jP"
    width="680"
    height="600"
  />
);

export default class XemCounter extends Component {
  state = {
    balance: 0,
    modalOpen: false,
    ModalComponent: null,
  };

  componentDidMount() {
    fetch(ACCOUNT_INFO_URL, { method: "GET" })
      .then(res => res.json())
      .then(res => this.setState({ balance: res.account.balance }))
      .catch(err => console.log(err));
  }

  render() {
    const { ModalComponent, modalOpen, balance } = this.state;
    return (
      <div>
        <div className="counter">
          <p className="text-counter text-center">{balance / 1000000} XEM</p>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-charity d-block"
          id="btnPay"
          onClick={() => {
            this.setState({
              modalOpen: true,
              ModalComponent: Donate,
            });
          }}
        >
          ПОЖЕРТВОВАТЬ
        </button>
        <button
          className="text-uppercase d-block m-auto text-center link-last-charity"
          onClick={() => {
            this.setState({
              modalOpen: true,
              ModalComponent: RecentContributions,
            });
          }}
        >
          <b>последние взносы</b>
        </button>
        {modalOpen ? (
          <Portal into="body">
            <div className="modal modalPay" tabIndex="-1" role="dialog">
              <div className="pay-wrapper">
                <legend className="border-r-26">
                  <h2 className="d-inline-block modal-heading">
                    <span className="text-orange">CRYPTO</span>
                    <span className="text-blue">HEROES</span>
                  </h2>
                  <div
                    tabIndex="0"
                    className="pull-right"
                    role="button"
                    onClick={() => {
                      this.setState({
                        modalOpen: false,
                        ModalComponent: null,
                      });
                    }}
                  >
                    <i className="fa fa-fw fa-times" />
                  </div>
                </legend>
                <ModalComponent />
              </div>
            </div>
          </Portal>
        ) : null}
      </div>
    );
  }
}
