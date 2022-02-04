import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"




function MyApp() {
const jokeComponents = jokesData.map(joke => <joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

    return(
      <div>  
      
     {jokeComponents}

      </div>
    )
}

export default MyApp