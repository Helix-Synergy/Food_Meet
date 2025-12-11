import React from "react";

const SinglePanelMember = ({ name, image, from, about, bio }) => {
  return (
    <div className="flex flex-col">
      <img src={image} alt="" />
      <div>
        <h1>{name}</h1>
        <p>{about}</p>
        <p>{from}</p>
      </div>
      <div>{bio}</div>
    </div>
  );
};

export default SinglePanelMember;
