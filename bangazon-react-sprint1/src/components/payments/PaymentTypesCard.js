import React, { Component } from 'react' // imports the React library


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
{/* <>
  <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>Payment Method</Card.Header>
    <Card.Body>
      <Card.Title>{this.props.paymenttype.merchantName}</Card.Title>
      <Card.Text>
        Expires on: {this.props.paymenttype.expirationDate}
      </Card.Text>
    </Card.Body>
  </Card>
  <br /> */}
export default PaymentTypesCard;