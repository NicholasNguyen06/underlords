import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import alliances from "../static/alliances";
import Undo from "@material-ui/icons/Undo";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popoverId, setPopoverId] = React.useState(null);
  const open = Boolean(anchorEl);

  function handlePopoverOpen(event, popoverId) {
    console.log("open", {anchorEl});
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
        <Grid key={index} item xs={1}>
          <Button
            onClick={() => props.onClick(alliance.type)}
            onMouseEnter={(e) => handlePopoverOpen(e, index)}
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
                    <Typography>I use Popover.</Typography>
          </Popover>
          <style jsx>{`
            img {
              height: 45px;
              width: 45px;
            }
          `}</style>
        </Grid>
      );
    }
  );

  return (
    <Grid container spacing={0}>
      <Grid item xs={1}>
        <Button onClick={() => props.onClick("undo")}>
          <Undo style={{ fontSize: 50 }} />
        </Button>
      </Grid>
      {allianceButtons}
    </Grid>
  );
}

export default AllianceButtons;
