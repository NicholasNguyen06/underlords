import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 400,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function AllianceDescriptions(props) {
  const { style } = props;
  const description = Object.values(props.tiers).map((tier, index) => {
    return (
      <ListItem button style={style} key={index}>
        <ListItemText primary={tier} />
      </ListItem>
    );
  });
  return (
    <Grid container>
      <Grid item xs={12}>
        {description}
      </Grid>
    </Grid>
  );
}
