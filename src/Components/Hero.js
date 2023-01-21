import React from "react"
import AirbnbPictures from "./../Images/airbnb-pictures.jpeg"

export default function Hero() {
    return (
        <main>
            <img src={AirbnbPictures} className="hero--background" alt="AirbnbPictures"></img>
            <h1 className="hero--title">Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind
                hosts-all without leaving home.
            </p>
        </main>
    )
}