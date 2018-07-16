import { h, Component } from "preact";

export default class RecentContributions extends Component {
  state = {
    transactions: [],
  };

  componentDidMount() {
    fetch("/api/v1/transactions/all", { method: "GET" })
      .then(res => res.json())
      .then(res => this.setState({ transactions: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <main className="container-fluid main-wrapper">
        <h1 className="text-center text-green text-uppercase mb-5 main-header">
          последние взносы
        </h1>
        <div className="table-wrapper d-flex">
          <div className="cell bg-d-blue">
            <h5 className="text-center text-white">ID </h5>
          </div>
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
        {this.state.transactions.map((tx, i) => (
          <div className="table-wrapper d-flex">
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
      </main>
    );
  }
}
