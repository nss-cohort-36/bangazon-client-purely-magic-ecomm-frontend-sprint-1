import React, { Component } from "react"
import ApiManager from '../../modules/ApiManager'

class SellAProductForm extends Component {

    state = {
        name: "",
        price: null,
        description: "",
        quantity: null,
        location: "",
        // imagePath: "",
        // createdAt: "",
        productType: null,
        producttypes: []
    }

    componentDidMount() {
        // Gets all product types, then sets them in state to load the dropdown later
        ApiManager.getAll("producttypes")
            .then((response) => {
                this.setState({
                    producttypes: response
                })
            })
    }

    handleInputChange = (evt) => {
        let stateToChange = {}
        stateToChange[evt.target.name] = evt.target.value
        this.setState(stateToChange)
    }

    addAProductToSell = evt => {
        evt.preventDefault();
        if (this.state.productType === "") {
            window.alert("Please include a product type.");
        } else {
            const newProduct = {
                name: this.state.name,
                price: this.state.price,
                description: this.state.description,
                quantity: Number(this.state.quantity),
                location: this.state.location,
                // createdAt: this.state.createdAt, 
                productType_id: this.state.productType
            }
            // Create the user profile and redirect user to their profile
            ApiManager.post("products", newProduct)
                .then(() => this.props.history.push("/products"));
                console.log(newProduct)
        }
    }

    render() {
        return (
            <>
                {/* <label htmlFor="starttime">When do you want to ride {this.props.location.state.attraction.name}?</label> */}
                <label htmlFor="name">Name of Product</label>
                <input
                    onChange={this.handleInputChange}
                    type="text" name="name" id="name" autoFocus required
                />
                <label htmlFor="price">Price</label>
                <input
                    onChange={this.handleInputChange}
                    type="text" name="price" id="price"
                />
                <label htmlFor="description">Description</label>
                <input
                    onChange={this.handleInputChange}
                    type="text" name="description" id="description"
                />
                <label htmlFor="quantity">Quantity</label>
                <input
                    onChange={this.handleInputChange}
                    type="text" name="quantity" id="quantity"
                />
                <label htmlFor="location">Location</label>
                <input
                    onChange={this.handleInputChange}
                    type="text" name="location" id="location"
                />
                <select
                    className="form-control"
                    id="productType"
                    // value={animal.employeeId}
                    onChange={this.handleInputChange}
                >
                    {this.state.producttypes.map(producttype => (
                        <option key={producttype.id} value={producttype.id}>
                            {producttype.name}
                        </option>
                    ))}
                </select>
                <label htmlFor="productType">Product Type</label>
                <button onClick={this.addAProductToSell}>Submit</button>
            </>
        )
    }
}

export default SellAProductForm 