import React, { Component } from "react"
import { Link } from "react-router-dom"
import { FormControl } from 'react-bootstrap'


// import "bootstrap/dist/css/bootstrap.min.css"
// import { isAuthenticated, logout } from "../helpers/simpleAuth"

class NavBar extends Component {

  render() {
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
            <FormControl type="text" placeholder="Search Products" className="nav-item" to="/"/>
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
