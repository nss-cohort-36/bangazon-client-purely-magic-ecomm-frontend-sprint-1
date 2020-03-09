import React, { Component } from "react"
import { Link } from "react-router-dom"
// import { Input } from 'react-bootstrap'




// import "bootstrap/dist/css/bootstrap.min.css"
// import { isAuthenticated, logout } from "../helpers/simpleAuth"

class NavBar extends Component {

  state = {
      products : "",
      search : ""
  }

  // const { search } = this.state;


  componentDidMount() {
    this.getProducts()
  }

  getProducts = () => {
    // query parameter that fetches all products with filter for name
    // if (isAuthenticated()) {
      fetch(`http://localhost:8000/products?name=${this.state.search}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${sessionStorage.getItem("bangazon_token")}`
        }
      })
      .then(response => response.json())
      .then(response => {
        // console.log("prop", this.props.products)
        // console.log("res",response)
        //setting state with the products from the fetch
        this.setState({ products: response })
      })
    // }
  }

  onChange = e =>{
    this.setState({search : e.target.value});
  }


  render() {
      console.log(this.state, "Name")
    return (
      <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link className="nav-link" to="/">Bangazon</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Orders</Link>
          </li>
          <li className="nav-item">
            <button type="button"
              className="nav-item"
              onClick={() => { this.props.history.push("/products/new") }}>
              Sell A Product
                        </button>
          </li>
          <li className="nav-item">
            {/* onclick is to calling the getProducts function to match the search */}
            {/* {grabbing props that from the parent component BB.  passing to bb through function} */}
            <input placeholder="Search Products" icon="search" onChange={this.onChange} />
            <button onClick={() => this.props.searchResults(this.state.search)}>Search</button>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Profile</Link>
          </li>
          {/* {
            isAuthenticated() ?
              <li className="nav-item">
                <button className="nav-link fakeLink"
                  onClick={() => {
                      logout()
                      this.props.history.push({
                          pathname: "/"
                      })
                    }
                  }
                >Logout</button>
              </li> :
              <>
              <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
              </li>
              </>
          } */}
        </ul>
      </nav>
    )

  }
}

export default NavBar
