import React from "react";
import Button from "@material-ui/core/Button";
export default function TeamCard(props) {
  return (
    <div>
      <Button onClick={() => props.onClick(props.index)}>
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
      </Button>
    </div>
  );
}
