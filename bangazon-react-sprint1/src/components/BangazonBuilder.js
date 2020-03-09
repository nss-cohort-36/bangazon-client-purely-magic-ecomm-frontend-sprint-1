import React, { Component } from "react"
import { Route } from "react-router-dom"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
// import "./BangazonBuilder.css"

class BangazonBuilder extends Component {
    // const BangazonBuilder = () => {

    state = {
        products: [],
        completedSearch: false
    }

    //created passing through searchInput and also as the end point of the fetch.
    searchResults = (searchInput) => {
        fetch(`http://localhost:8000/products?name=${searchInput}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${sessionStorage.getItem("bangazon_token")}`
            }
        })
            .then(response => response.json())
            .then(response => {
                // console.log("prop", this.props.products)
                console.log("res", response)
                //setting state with the products from the fetch
                this.setState({
                    products: response,
                    completedSearch: true
                })
            })
    }

    // passing the function to the nav component
    render() {
        // console.log(this.state, "Ap")
        return (
            <React.Fragment>
                <Route render={props => (
                    <NavBar {...props} searchResults={this.searchResults} />
                )} />

                <ApplicationViews completedSearch={this.state.completedSearch} filteredProducts={this.state.products} />
            </React.Fragment>
        )
    }
}

export default BangazonBuilder