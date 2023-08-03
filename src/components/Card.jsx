import React from "react"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.experience.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.experience.stats.rating}</span>
                <span className="gray">({props.experience.stats.reviewCount}) • </span>
                <span className="gray">{props.experience.location}</span>
            </div>
            <p className="card--title">{props.experience.title}</p>
            <p className="card--price"><span className="bold">From ${props.experience.price}</span> / person</p>
        </div>
    )
}