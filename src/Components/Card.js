import React from "react"
import GraduationPicture from "./../Images/graduation-picture.jpg"

export default function Card() {
    return (
        <div className="card">
            <div className="card--image">
                <img src={GraduationPicture}
                    className="card--instance" alt="instance"></img>
                    <p className="card--status">Sold</p>
            </div>
            <p className="card--text">
                5.0 (6) NZ
                <br></br>
                Graduation with Justin Lee
                <br></br>
                <b>From $50 </b>/ person
            </p>
        </div>
    )
}