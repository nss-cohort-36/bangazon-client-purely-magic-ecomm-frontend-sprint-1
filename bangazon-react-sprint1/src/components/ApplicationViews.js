import { Route } from "react-router-dom"
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import BangazonHomepage from "./home/BangazonHome"
// import ProductList from "./products/ProductList"
import ProductManager from "./products/ProductManager"
import Register from "./auth/Register"
import Login from "./auth/Login"

class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/" render={props => {
            console.log("props", props)
            return <BangazonHomepage {...props} />
          }}
        />
        <Route exact path="/products" render={props => {
          return <ProductManager {...props} />
        }}
        />
        <Route
          path="/register" render={props => {
            return <Register {...props} />
          }}
        />
        <Route
          path="/login" render={props => {
            return <Login {...props} />
          }}
        />
        {/* <Route
          path="/register" render={props => {
            return <Register {...props} />
          }}
        />
        <Route
          path="/login" render={props => {
            return <Login {...props} />
          }}
        />
        <Route exact path="/myitinerary" render={props => {
          return <ItineraryItemList {...props} />
        }}
        />
        <Route exact path="/myitinerary/new" render={props => {
          // console.log(props)
          return <ItineraryItemForm {...props} />
        }}
        />
        <Route path="/myitinerary/:itemId(\d+)/edit" render={props => {
          // console.log(props)
          return <ItineraryItemEditForm {...props} />
        }}
        /> */}
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationViews)