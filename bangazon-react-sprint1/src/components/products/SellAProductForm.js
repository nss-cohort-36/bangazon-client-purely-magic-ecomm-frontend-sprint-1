// author: Caroline Brownlee
import React, { Component } from "react"
import APIManager from '../../modules/APIManager'
import { Form, Button, Container } from 'react-bootstrap';


class SellAProductForm extends Component {

    state = {
        name: "",
        price: null,
        description: "",
        quantity: null,
        location: "",
        productType: "",
        imagePath: "",
        producttypes: []
    }

    componentDidMount() {
        // Gets all product types, then sets them in state to load the dropdown later
        APIManager.getAll("producttypes")
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

    // _handleSubmit(e) {
    //     e.preventDefault();
    //     // TODO: do something with -> this.state.file
    //     console.log('handle uploading-', this.state.file);
    // }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
                imagePath: reader.result
            });
        }

        reader.readAsDataURL(file)
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
                imagePath: this.state.imagePath,
                productType_id: this.state.productType
            }
            // Create the user profile and redirect user to their profile
            APIManager.post("products", newProduct)
                .then(() => this.props.history.push("/products"));
            console.log(newProduct)
        }
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} style={{"max-width": "100%"}}/>);
        } else {
            $imagePreview = (<div className="previewText">Please upload a photo of your item.</div>);
        }
        return (

            <>
                <Container style={{ "margin-top": "100px" }}>
                    <h1 style={{ "textAlign": "center" }}>Enter a Product to Sell:</h1>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Product Name" id="name" name="name" onChange={this.handleInputChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Price" id="price" name="price" onChange={this.handleInputChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Description" id="description" name="description" onChange={this.handleInputChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Quantity" id="quantity" name="quantity" onChange={this.handleInputChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Location" id="location" name="location" onChange={this.handleInputChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select a Product Type: </Form.Label>
                            <Form.Control as="select" id="productType" name="productType" onChange={this.handleInputChange}>
                                <option value=''>Select...</option>
                                {this.state.producttypes.map(producttype => (
                                    <option key={producttype.id} value={producttype.id}>
                                        {producttype.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="previewComponent">
                                <Form.Control 
                                    className="fileInput"
                                    id="imagePath"
                                    name="imagePath"
                                    type="file"
                                    onChange={(e) => this._handleImageChange(e)} 
                                    required/>
                                <div className="imgPreview">
                                    {$imagePreview}
                                </div>
                        </Form.Group>

                        <Button onClick={this.addAProductToSell} onSubmit={(e) => this._handleSubmit(e)}>Submit</Button>
                    </Form>
                </Container>
            </>
        )
    }
}


export default SellAProductForm
