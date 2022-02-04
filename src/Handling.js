import React from "react"

function handleClick() {
    console.log("i was clicked")
    
}

function Handling() {
    return(
        <div>
        <img onMouseOver={() => console.log("madhur!") }
        src="https:/www.fillmurray.com/200/100"/>
        <br />
        <br />
        <button onClick={handleClick}>Click me</button>
        </div>
    )

}

export default Handling