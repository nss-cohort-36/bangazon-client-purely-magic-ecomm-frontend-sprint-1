import React, { Component } from 'react' // imports the React library
import { Link } from "react-router-dom"; // allows React and any links in the code to communicate with the DOM

class PaymentTypesCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Payment Method: {this.props.paymenttype.merchantName}</h3>
          <p>Expires on: {this.props.paymenttype.expirationDate}</p>
          <button type="button" onClick={() => this.props.deletePaymentType(this.paymenttype.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default PaymentTypesCard;