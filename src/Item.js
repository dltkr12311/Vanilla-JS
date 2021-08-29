import React from "react";

const Item = ({ name, trips }) => {
  return (
    <div className="item">
      <p>{name}</p>
      <p>{trips}</p>
    </div>
  );
};

export default Item;
