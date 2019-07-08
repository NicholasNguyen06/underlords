import React from "react";

export default function TeamCard(props) {
    console.log(props.name);
  return (
    <div onClick={() => props.onClick(props.index)}>
      <img
        src={
          "/static/mini-icons/" +
          props.name.replace(/\W/g, "").toLowerCase() +
          "-icon.png"
        }
      />
      <style jsx>{`
        img {
          height: 40px;
          width: 40px;
        }
      `}</style>
    </div>
  );
}
