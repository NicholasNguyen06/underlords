import React from "react";

export default function TeamCard(props) {
  return (
    <div>
      <img src={"/static/mini-icons/" + props.name.replace(/\W/g, "").toLowerCase() + "-icon.png"} />
      <style jsx>{`
        img {
          height: 40px;
          width: 40px;
        }
      `}</style>
    </div>
  );
}
