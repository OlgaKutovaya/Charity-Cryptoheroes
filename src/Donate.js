import { h, Component } from "preact";
import Iframe from "react-iframe";

export default class Donate extends Component {
  render() {
    return (
      <Iframe
        url="https://app.paytomat.com/pay_product/sdpMoGpn2jP"
        width="450"
        height="600"
        display="initial"
      />
    );
  }
}
