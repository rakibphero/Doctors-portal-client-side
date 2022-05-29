import React from "react";

const InfoCard = ({img, cardTitle, bgClass, cardText}) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
      <figure className="pl-6 sm:py-2">
        <img src={ img } alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{ cardTitle }</h2>
        <p>{cardText}</p>
      </div>
    </div>
  );
};

export default InfoCard;
