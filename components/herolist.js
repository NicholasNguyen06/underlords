import React from "react";
import HeroCard from "./herocard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import AllianceButtons from "./alliancebuttons";
import SearchHero from "./searchhero";
import TeamBuilder from "./teambuilder";
import Undo from "@material-ui/icons/Undo";
import Button from "@material-ui/core/Button";
import data from "../static/data/heroes";
import TeamCompositions from "./teamcompositions";

class HeroList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: this.props.heroes.Heroes,
      team: [],
      currentClasses: []
    };
  }

  sortByClass = type => {
    if (type === "undo") {
      this.setState({
        heroes: data.Heroes
      });
    } else {
      const heroesList = data.Heroes.filter(hero => {
        return hero.classes.includes(type);
      });
      this.setState({
        heroes: heroesList
      });
    }
  };

  addToTeam = index => {
    let team = this.state.team;
    let currentClasses = this.state.currentClasses;
    let hero = data.Heroes[index - 1];
    for (var i in hero.classes) {
      currentClasses.push(hero.classes[i]);
    }
    team.push(data.Heroes[index - 1]);
    this.setState({
      team: team,
      currentClasses: currentClasses
    });
  };

  removeFromTeam = index => {
    let currentClasses = this.state.currentClasses;
    let hero = this.state.team[index - 1];
    let newClasses = [];
    for (var i in hero.classes) {
      currentClasses.reduce((unique, o) => {
        if (uni)
        console.log("Unique: " + unique);
      });
    }
    /*
    for (var i in hero.classes) {
      currentClasses = currentClasses.filter(v => v !== hero.classes[i]);
    }
    */
    let team = this.state.team;
    team.splice(index - 1, 1);
    this.setState({
      team: team,
      currentClasses: currentClasses
    });
  };

  handleSearch = value => {
    if (value.length > 0) {
      const heroesList = data.Heroes.filter(hero => {
        return hero.name.toUpperCase().includes(value.toUpperCase());
      });
      this.setState({
        heroes: heroesList
      });
    } else {
      this.setState({
        heroes: data.Heroes
      });
    }
  };

  render() {
    var heroesList = Object.values(this.state.heroes).map((hero, index) => {
      return (
        <Grid key={index} item xs>
          <HeroCard
            key={hero.id}
            name={hero.name}
            classes={hero.classes}
            onClick={this.addToTeam}
            id={hero.id}
          />
        </Grid>
      );
    });
    return (
      <Container maxWidth={"lg"}>
        <Grid item xs={12}>
          <h2>Team</h2>
        </Grid>
        <Grid item xs={7}>
          <TeamBuilder team={this.state.team} onClick={this.removeFromTeam} />
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <h2>Possible Strategy</h2>
          </Grid>
          <Grid item xs={12}>
            <TeamCompositions team={this.state.team} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <h2>
            Alliances
            <Button size="small" onClick={() => this.sortByClass("undo")}>
              <Undo />
            </Button>
          </h2>
        </Grid>
        <Grid item xs={12}>
          <AllianceButtons onClick={this.sortByClass} />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SearchHero onInput={this.handleSearch} />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          {heroesList}
        </Grid>
      </Container>
    );
  }
}

export default HeroList;
