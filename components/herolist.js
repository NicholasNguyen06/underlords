import React from "react";
import HeroCard from "./herocard";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import data from "../static/heroes.json";

class HeroList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: this.props.heroes.Heroes
    };
  }

  sortClick() {
    this.setState({
      heroes: this.state.heroes.length == 0 ? data.Heroes : []
    });
  };

  sortByClass(classType) {
    var heroesList = this.state.heroes.filter((el) => {
      return el.classes.includes(classType);
    })
  }

  render() {
    const heroesList = Object.values(this.state.heroes).map((type, index) => {
      return (
        <Grid key={index} item xs>
          <HeroCard
            key={index}
            name={type.name}
            classes={type.classes}
            imgsrc={type.imgsrc}
          />
        </Grid>
      );
    });
    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid item xs>
          <Button onClick={(e) => this.sortClick(e)}>Sort</Button>
          </Grid>
          <Grid item xs>
          <Button onClick={(e) => this.sortByClass("Brawny")}>Sort Brawny</Button>
          </Grid>
        </Grid>
        {heroesList}
      </Grid>
    );
  }
}

export default HeroList;
