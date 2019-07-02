import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import alliances from "../static/alliances";
import Undo from '@material-ui/icons/Undo';
function AllianceButtons(props) {
  var allianceButtons = Object.values(alliances.alliances).map(
    (type, index) => {
      return (
        <Grid key={index} item xs={1}>
          <Button onClick={() => props.onClick(type)}>
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
        </Grid>
      );
    }
  );
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h2>Alliances</h2>
        <style jsx>{`
          h2 {
            padding-left: 15px;
          }
        `}</style>
      </Grid>
      <Grid item xs={1}>
        <Button onClick={() => props.onClick("undo")}>
            <Undo style={{ fontSize: 50 }}/>
        </Button>
      </Grid>
      {allianceButtons}
    </Grid>
  );
}

export default AllianceButtons;
