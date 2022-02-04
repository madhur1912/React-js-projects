import React from "react"

class MyApp extends React.Component {
    constructor() {
        super()
        this.state =  {
            firstName: "",
            lastName: "",
            isfriendly: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name,value,type,checked} =event.target
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value})
    }

    render() {
        return(
            <form>
            <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
            />
            <br />

            <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
            />
            
            <textarea value={"hellllo...."}/>
            <br />

            <label>
            <input
            type="checkbox"
            name="isfriendly"
            checked={this.state.isfriendly}
            onChange={this.handleChange}
            /> Is Friendly?
            </label>

            <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }

}
export default MyApp