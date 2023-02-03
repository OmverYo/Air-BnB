import React from "react"
import Star from "./../images/red-star.png"

export default function Card(props) {
    let badgeText = null
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText != null && <div className="card--badge">{badgeText}</div>}
            <img src={`${process.env.PUBLIC_URL}/images/${props.item.coverImg}`}
                className="card--instance" alt="instance"></img>
            <div className="card--status">
                <img src={Star} className="card--star" alt="star"></img>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • {props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}