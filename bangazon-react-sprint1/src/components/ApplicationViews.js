import { Route } from "react-router-dom"
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import BangazonHomepage from "./home/BangazonHome"
// import ProductList from "./products/ProductList"
import ProductManager from "./products/ProductManager"
import ProductDetail from "./products/ProductDetail"
import Register from "./auth/Register"
import Login from "./auth/Login"
import ProductDetailView from "./products/ProductDetailView"
import SellAProductForm from "./products/SellAProductForm"

class ApplicationViews extends Component {
  


  
  //passing props from BB to productManager
  render() {
    console.log(this.state, "AppView")
    return (
      <React.Fragment>
        <Route
          exact path="/" render={props => {
            console.log("props", props)
            return <BangazonHomepage {...props} />
          }}
        />
        <Route exact path="/products" render={props => {
          return <ProductManager {...props} completedSearch={this.props.completedSearch} filteredProducts={this.props.filteredProducts}/>
        }}
        />
        <Route exact path="/products/:productId(\d+)" render={props => {
          return <ProductDetailView {...props} />
        }}
        />
        <Route path="/products/new" render={(props) => {
          return <SellAProductForm {...props} />
        }} />
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