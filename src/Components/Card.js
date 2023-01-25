import React from "react"
import GraduationPicture from "./../Images/graduation-picture.jpg"
import Star from "./../Images/red-star.png"

export default function Card() {
    return (
        <div className="card">
            <img src={GraduationPicture}
                className="card--instance" alt="instance"></img>
            <div className="card--status">
                <img src={Star} className="card--star" alt="star"></img>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">NZ</span>
            </div>
            <p>Graduation with Justin Lee</p>
            <p><span className="bold">From $50</span> / person</p>
        </div>
    )
}