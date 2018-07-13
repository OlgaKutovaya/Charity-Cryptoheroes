import { h, Component } from "preact";

export default class RecentContributions extends Component {
  state = {
    transactions: [],
  };

  componentDidMount() {
    fetch("/getAll", { method: "GET" })
      .then(res => this.setState({ transactions: res.json() }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1 className="text-center text-green text-uppercase mb-5 main-header">
          последние взносы
        </h1>
        <div className="table-wrapper d-flex">
          <div className="cell bg-d-blue" />
          <div className="cell bg-d-blue">
            <h5 className="text-center text-white">Hash</h5>
          </div>
          <div className="cell bg-d-blue">
            <h5 className="text-center text-white">QR</h5>
          </div>
          <div className="cell bg-d-blue">
            <h5 className="text-center text-white">Сумма</h5>
          </div>
          <div className="cell bg-d-blue">
            <h5 className="text-center text-white">Дата</h5>
          </div>
        </div>
        <div className="table-wrapper d-flex">
          {this.state.transactions.map((tx, i) => (
            <div>
              <div className="cell bg-blue">
                <h3 className="text-white text-center">{i}</h3>
              </div>
              <div className="cell">
                <p>{tx.tx_code}</p>
              </div>
              <div className="cell">
                <p>{tx.qr_code}</p>
              </div>
              <div className="cell">
                <p>{tx.amount}</p>
              </div>
              <div className="cell">
                <p>{tx.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
