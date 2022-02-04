import React from "react"
import MaterialData from "./MaterialData"
import MaterialItem from "./MaterialItem"
function MyApp() {
const materialComponents = MaterialData.map(item => <MaterialItem  key={item.id} material={item}/>)

    return(
    <div className="material-list">
    {materialComponents}
    </div>
    )
    
}

export default MyApp