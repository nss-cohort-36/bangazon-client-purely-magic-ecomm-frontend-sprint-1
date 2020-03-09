import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import Button from 'react-bootstrap/Button'
import APIManager from '../../modules/APIManager'
 
class AddPaymentTypesForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  };

  /*  Local method for validation, set loadingStatus, create payment object, invoke the APIManager post method, and redirect to the full payment type list
  */
 handleSubmitButton = evt => {
    evt.preventDefault();
    if (this.state.name === "" || this.state.number === "" || this.state.expiry === "" || this.state.cvc === "") {
      window.alert("Please fill out all fields");
    } else {
      this.setState({ loadingStatus: true });
      const payment = {
        name: this.state.name,
        number: this.state.number,
        expiry: this.state.expiry,
        cvc: this.state.cvc
      };

      // Create the payment type and redirect user to payment type list
      APIManager.post(payment)
        .then(() => this.props.history.push("/payments"));
    }
  };
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focus={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />  <br></br><br></br>
            <input
                type="text"
                name="name"
                placeholder="Name on card"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
            /> <br></br><br></br>
            <input
                type="text"
                name="expiry"
                placeholder="Card expiry date"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
            /> <br></br><br></br>
            <input
                type="text"
                name="cvc"
                placeholder="CVC"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
            /> <br></br><br></br>
        </form>
        <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.handleSubmitButton}
              >Submit</button>
      </div>
    );
  }
}

export default AddPaymentTypesForm