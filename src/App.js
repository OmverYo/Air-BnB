import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card
                image="graduation-picture.jpg"
                rating="5.0"
                reviews={6}
                country="NZ"
                title="Graduation with Justin Lee"
                price={50}
            />
        </div>
    )
}

