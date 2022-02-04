import react from "react"

class MyApp extends react.Component {
  constructor() {
    super()
    this.state = {
      name: "madhurkaushik",
      age: 22
    }
  }

  render() {
    return(
      <div>
      <h1>{this.state.name}</h1>
      <h3>{this.state.age}</h3>  
      </div>
    )
  }
}



export default MyApp
