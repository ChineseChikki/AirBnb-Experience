import React from "react";
import { IStar } from "../utils/icons";
import "./Card.css";

const Card = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.item.coverImg} className="card-photo" />
      <div className="location">
        <div className="card-stats">
          <img src={IStar} className="card-star" />
          <span className="card-rating">{props.item.stats.rating}</span>
          <span className="gray">({props.item.stats.reviewCount}) . </span>
          <span className="gray">{props.item.location}</span>
        </div>
        <p className="card-title">{props.item.title}</p>
        <p>
          <span className="bold">From ${props.item.price}</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;

/*Line 6:{props.openSpots === 0 && <div className="status">SOLD OUT</div>}
If openSpots=0 display SOLD OUT*/
