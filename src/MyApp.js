import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router , Switch, Route} from "react-router-dom"
import "./App.css"
import Home from "./components/pages/Home"

function MyApp() {
    return(
        <>
        <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component=
        {Home} />
        </Switch>
        </Router>
        </>
 
    )
}

export default MyApp
