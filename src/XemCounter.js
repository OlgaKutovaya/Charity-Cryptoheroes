import { h, Component } from "preact";
import Portal from "preact-portal";
import RecentContributions from "./RecentContributions";
import Donate from "./Donate";

const ADDRESS = "";
const ACCOUNT_INFO_URL = `http://110.44.135.87/account/get?address=${ADDRESS}`;

export default class XemCounter extends Component {
  state = {
    balance: 0,
    modalOpen: false,
    ModalComponent: null,
  };

  componentDidMount() {
    fetch(ACCOUNT_INFO_URL, { method: "GET" })
      .then(res => this.setState({ balance: res.json().account.balance }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    const { ModalComponent, modalOpen, balance } = this.state;
    return (
      <div>
        <div className="counter">
          <p className="text-counter text-center">{balance} XEM</p>
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
            <div className="modal" tabIndex="-1" role="dialog">
              <div className="pay-wrapper">
                <legend className="border-r-26">
                  <h2 className="d-inline-block modal-heading">
                    <span className="text-orange">CRYPTO</span>
                    <span className="text-blue">HEROES</span>
                  </h2>
                  <button
                    className="pull-right"
                    onClick={() => {
                      this.setState({
                        modalOpen: false,
                        ModalComponent: null,
                      });
                    }}
                  >
                    <i className="fa fa-fw fa-times" />
                  </button>
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
