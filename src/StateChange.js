import React from "react"

class MyApp extends React.Component {
    constructor() {
        super()
        this.state = {
            count:0
        }
    }

    handleClick() {
        console.log("im working") 
    }

    render() {
        return(
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }

}
export default MyApp
