import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import alliances from "../static/alliances";

function AllianceButtons(props) {
  var allianceButtons = Object.values(alliances.alliances).map(
    (type, index) => {
      return (
        <div key={index}>
          <Button onClick={(e) => props.onClick(type)}>
            <img
              src={
                "/static/" +
                type
                  .toString()
                  .replace(/\W/g, "")
                  .toLowerCase() +
                ".jpg"
              }
            />
          </Button>
          <style jsx>{`
            img {
              height: 50px;
              width: 50px;
            }
          `}</style>
        </div>
      );
    }
  );
  return <Grid item>{allianceButtons}</Grid>;
}

export default AllianceButtons;
