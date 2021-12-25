import React from "react";
import "../App.css";

// import "./VideoItem.css";

const UserItem = ({ id, name, image }) => {
  return (
    <div>
      {/* <div>{id}</div> */}
      <div>Name: {name}</div>
      <img src={`${image}`}></img>
    </div>
  );
};

export default UserItem;
