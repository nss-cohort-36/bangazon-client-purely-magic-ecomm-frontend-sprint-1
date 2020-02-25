import React, { Component } from "react"

class BangazonHomepage extends Component {

  state = {
    location: null
  }
  
  handleInputChange = (evt) => {
    let stateToChange = {}
    stateToChange[evt.target.name] = evt.target.value
    this.setState(stateToChange)
  }

//   REFACTOR THIS FUNTION TO RETRIEVE PRODUCT LOCATION

//   addToItinerary = () => {
//     fetch('http://localhost:8000/itineraryitems', {
//       "method": "POST",
//       "headers": {
//           "Accept": "application/json",
//           "Content-Type": "application/json",
//           "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
//       },
//       "body": JSON.stringify({
//         "ride_id": this.props.location.state.attraction.id,
//         "starttime": Number(this.state.starttime)
//       })
//     })
//     .then(response => response.json())
//     .then(() => {
//         this.props.history.push("/itineraryitems")
//     })
//   }

  render() {
    // console.log(this.props.location.state.attraction)
    return (
      <>
        <h1>Welcome to Fangazon</h1>
        <label htmlFor="location">Select your clan location:</label>
        <input
          onChange={this.handleInputChange}
          type="text" name="location" autoFocus required />
        {/* refactor to accept function above onclick */}
        <button onClick={this.addToItinerary}>Search</button>
      </>
    )
  }
}

export default BangazonHomepage