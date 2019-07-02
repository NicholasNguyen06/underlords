import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HeroTypes from "./herotypes";

class HeroCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      classes: props.classes,
      imgsrc: props.imgsrc
    };
  }

  render() { 
    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              <img
                src={
                  "/static/" +
                  this.state.name.replace(/\W/g, "").toLowerCase() +
                  ".jpg"
                }
              />
            </Typography>
          </CardContent>
          <style jsx>{`
            img {
              height: 100px;
              width: 175px;
            }
          `}</style>
        </CardActionArea>
        <CardActions>
          <Grid container>
            <Typography variant="body2" color="textSecondary" component="span">
              <Grid container>
                  <HeroTypes classes={this.state.classes} />
              </Grid>
            </Typography>
          </Grid>
        </CardActions>
      </Card>
    );
    }
}

export default HeroCard;
