import React, { Component } from 'react'
//import the components we will need
import PaymentTypesCard from './PaymentTypesCard'
import APIManager from '../../modules/APIManager'

class PaymentTypesList extends Component {
  //define what this component needs to render
  state = {
    paymenttypes: [],
  }

  componentDidMount() {
    //getAll from APIManager and hang on to that data; put it in state
    APIManager.getAll("paymenttypes")
      .then((paymentsArray) => {
        this.setState({
          paymenttypes: paymentsArray
        },() =>console.log(this.state.paymenttypes, "payment types"))
      })
      
  }

  deletePayment = id => {
    APIManager.delete(id)
      .then(() => {
        APIManager.getAll("paymenttypes")
          .then((newPayments) => {
            this.setState({
              paymenttypes: newPayments
            })
          })
      })
  }

  render() {
    console.log("PaymentTypesList: Render");
    

    return (
      <React.Fragment>
        {/* //add this button above your display of animal cards */}
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/payments/new") }}>
           Payment Type
          </button>
        </section>
        <div className="container-cards">
          {this.state.paymenttypes.map(paymenttype =>
            <PaymentTypesCard
              key={paymenttype.id}
              payment={paymenttype}
              deletePayment={this.deletePayment}
              {...this.props}
            />
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default PaymentTypesList