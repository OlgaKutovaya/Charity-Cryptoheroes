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
      <div>
        <div className="table-wrapper d-flex mt-3">
          <div className="cell">
            <h5>ID</h5>
          </div>
          <div className="cell">
            <h5>Hash</h5>
          </div>
          <div className="cell">
            <h5>QR</h5>
          </div>
          <div className="cell">
            <h5>Сумма</h5>
          </div>
          <div className="cell">
            <h5>Дата</h5>
          </div>
        </div>
        {this.state.transactions.map((tx, i) => (
          <div className="table-wrapper d-flex">
            <div className="cell">
              <p>{i}</p>
            </div>
            <div className="cell">
              <p>{tx.code}</p>
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
    );
  }
}
