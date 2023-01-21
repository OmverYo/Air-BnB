import React from "react"
import "./../style.css"
import AirbnbLogo from "./../Images/airbnb.png"

export default function Navbar() {
    return (
        <nav>
            <img src={AirbnbLogo} className="navbar--logo" alt="AirbnbLogo"></img>
        </nav>
    )
}