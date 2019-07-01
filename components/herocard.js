import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class HeroCard extends React.Component {

  render() {
    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Puck
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <img src={this.props.imgsrc} />
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
            <Grid items xs={12}>
              <Typography variant="body2" color="textSecondary" component="p">
                <Grid container>
                  <Grid items xs={6}>
                    <img src="/static/dragon.jpg" />
                  </Grid>
                  <Grid items xs={6}>
                    <img src="/static/mage.jpg" />
                  </Grid>
                </Grid>
              </Typography>
            </Grid>
            <Grid items xs={12}>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </Grid>
          </Grid>
          <style jsx>{`
            img {
              height: 50px;
              width: 50px;
            }
          `}</style>
        </CardActions>
      </Card>
    );
  }
}

export default HeroCard;
