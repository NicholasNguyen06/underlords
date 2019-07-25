import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import alliances from "../static/data/alliances";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";
import AllianceDescriptions from "./alliancedescriptions";
const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

function AllianceButtons(props) {
  const classes = useStyles();

  var allianceButtons = Object.values(alliances.alliances).map(
    (alliance, index) => {
      return (
        <Grid key={index} item xs={3} sm={2} lg={1}>
        <Button
            onClick={() => props.onClick(alliance.type)}
          >
            <img
              src={
                "/static/alliance-icons/" +
                alliance.type
                  .toString()
                  .replace(/\W/g, "")
                  .toLowerCase() +
                ".jpg"
              }
            />
          </Button>
          <style jsx>{`
            img {
              height: 40px;
              width: 40px;
            }
          `}</style>
        </Grid>
      );
    }
  );

  return (
      <Grid container item xs={12} sm={6} spacing={0}>
        {allianceButtons}
      </Grid>
  );
}

export default AllianceButtons;
