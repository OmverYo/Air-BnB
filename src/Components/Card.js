import React from "react"
import Star from "./../images/red-star.png"

export default function Card(props) {
    return (
        <div className="card">
            {/* <img src={`./../images/${props.img}`}
                className="card--instance" alt="instance"></img> */}
            <div className="card--status">
                <img src={Star} className="card--star" alt="star"></img>
                <span>{props.rating}</span>
                <span className="gray">({props.reviews}) • {props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}