import React from "react";

export default function Card({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
  openSpots
}) {

  let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}      
      <img src={`/images/${img}`} className="card--image" alt={title} />
      <div className="card--stats">
        <img src="/images/star.png" className="card--star" alt="Star Icon" />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
      {/* Additional data specific to your card */}
      <p>Open Spots: {openSpots}</p>
    </div>
  );
}
