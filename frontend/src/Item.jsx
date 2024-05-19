import React from "react";
import "./Item.css";

function Item(props) {
  return (
    <div className="item">
      <div className="item-image-container">
        <img src={props.imageURL} alt={props.name} className="item-image" />
      </div>
      <div className="item-details">
        <h3 className="item-name">{props.name}</h3>
        <p className="item-price">${props.price}</p>
      </div>
    </div>
  );
}

export default Item;
