import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router , Switch, Route} from "react-router-dom"
import "./App.css"

function MyApp() {
    return(
        <>
        <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact />
        </Switch>
        </Router>
        </>
 
    )
}

export default MyApp
