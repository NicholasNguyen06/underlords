import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HeroTypes from "./herotypes";



class HeroCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id
    };
  }

  render() {

    return (
      <Card>
        <div onClick={() => this.props.onClick(this.state.id)}>
          <CardActionArea>
            <CardContent>
              <Typography variant="body1" gutterBottom>
                {this.props.name}
              </Typography>
              <Typography>
                <img
                  src={
                    "/static/hero-icons/" +
                    this.props.name.replace(/\W/g, "").toLowerCase() +
                    ".jpg"
                  }
                />
              </Typography>
            </CardContent>
            <style jsx>{`
              img {
                height: 55px;
                width: 105px;
              }
            `}</style>
          </CardActionArea>
        </div>
        <CardActions>
          <Grid container>
            <Typography variant="body2" color="textSecondary" component="span">
              <Grid container>
                <HeroTypes classes={this.props.classes} />
              </Grid>
            </Typography>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}

export default HeroCard;
