import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import alliances from "../static/alliances";
import Undo from "@material-ui/icons/Undo";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";
import AllianceDescriptions from "./alliancedescriptions";
const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1)
  },
  root: {
    
  }
}));

function AllianceButtons(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popoverId, setPopoverId] = React.useState(null);
  const open = Boolean(anchorEl);

  function handlePopoverOpen(event, popoverId) {
    setPopoverId(popoverId);
    setAnchorEl(event.currentTarget);
  }

  function handlePopoverClose() {
    setPopoverId(null);
    setAnchorEl(null);
  }

  var allianceButtons = Object.values(alliances.alliances).map(
    (alliance, index) => {
      return (
        <Grid key={index} item xs={2}>
          <Button
            onClick={() => props.onClick(alliance.type)}
            onMouseEnter={e => handlePopoverOpen(e, index)}
            onMouseLeave={handlePopoverClose}
            aria-owns={open ? "mouse-over-popover" + index : undefined}
            aria-haspopup="true"
          >
            <img
              src={
                "/static/" +
                alliance.type
                  .toString()
                  .replace(/\W/g, "")
                  .toLowerCase() +
                ".jpg"
              }
            />
          </Button>
          <Popover
            id={"mouse-over-popover" + index}
            className={classes.popover}
            classes={{
              paper: classes.paper
            }}
            open={popoverId === index}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <AllianceDescriptions tiers={alliance.tiers} />
          </Popover>
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
      <Grid container item xs={12} spacing={0}>
        {allianceButtons}
      </Grid>
  );
}

export default AllianceButtons;
