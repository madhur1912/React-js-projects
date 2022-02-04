import React from "react"

function MaterialItem(props) {
    return(
        <div className="material-item">
        <h3>{props.material.text}</h3>
        </div>
    )
}
export default MaterialItem