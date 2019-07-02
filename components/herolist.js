import React from "react";
import HeroCard from "./herocard";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import data from "../static/heroes.json";
import AllianceButtons from "./alliancebuttons";

class HeroList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: this.props.heroes.Heroes
    };
    this.onClick = this.sortByClass.bind(this);
  }

  sortClick() {
    this.setState({
      heroes: this.state.heroes.length == 0 ? data.Heroes : []
    });
  }

  sortByClass(type) {
    console.log("click:" , type);
    const heroesList = data.Heroes.filter(hero => {
      return hero.classes.includes(type);
    });
    this.setState({
      heroes: heroesList
    });
  }

  render() {
    var heroesList = Object.values(this.state.heroes).map((type, index) => {
      return (
        <Grid key={index} item xs>
          <HeroCard
            key={index}
            name={type.name}
            classes={type.classes}
            onClick = {(e) => this.sortByClass(e)}
          />
        </Grid>
      );
    });
    return (
      <Box>
      <Grid container>
            <AllianceButtons onClick= {(e) => this.sortByClass(e)} />
      </Grid>
      <Grid>
        <GridList cols={12} cellHeight={280}>
          {heroesList}
        </GridList>
      </Grid>
      </Box>
    );
  }
}

export default HeroList;
