import React, { Component } from 'react' // imports the React library


class PaymentTypesCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Number: {this.props.payment.number}</h3>
          <p>Expires on: {this.props.payment.expiry}</p>
          <button type="button" onClick={() => this.props.deletePaymentType(this.payment.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default PaymentTypesCard;