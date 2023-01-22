import React from "react"
import GraduationPicture from "./../Images/graduation-picture.jpg"

export default function Card() {
    return (
        <div className="card">
            <img src={GraduationPicture}
                className="card--instance" alt="instance"></img>
            <h6>5.0 (6) NZ
                <br></br>
                Graduation with Justin Lee
                <br></br>
                From $50 / person
            </h6>
        </div>
    )
}