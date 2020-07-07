import React from "react";
import "./employeesStyles.css";

function Card(props) {
  return (
    <div className="cardemployee">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.status}</p>
      </div>
    </div>
  );
}

export default Card;
