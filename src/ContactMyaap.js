import React from "react"

import ContactCard from "./ContactCard"

function MyApp() {
  return (
    <div className="contacts">

      <ContactCard
      contact={{name:"Mr.madhur",imgUrl:"http://placekitten/300/200",Phone:"8307499890",Email:"madhurkaushik1912@gmail.com" }}
      
      />

      <ContactCard
      contact={{name:"Mr.kaushik",imgUrl:"http://placekitten/400/300",Phone:"8307499890",Email:"madhurkaushik1912@gmail.com"}}
    
       />

   
    </div>
  )
}

export default MyApp
