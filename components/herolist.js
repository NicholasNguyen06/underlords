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

  // TODO: Possibly just rebuild entire currentClasses instead of removing. Remove duplicates,etc.
  removeFromTeam = index => {
    let currentClasses = this.state.currentClasses;
    let id = index == 1 ? index - 1 : index;
    currentClasses.splice(id, 2);
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
        <Grid key={index} item xs sm={2} lg={1}>
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
      <Container maxWidth={"xl"}>
        <Grid item xs>
          <h2>Team</h2>
          <TeamBuilder team={this.state.team} onClick={this.removeFromTeam} />
        </Grid>
        <Grid item xs>
          <h2>Strategy</h2>
          <TeamCompositions currentClasses={this.state.currentClasses} />
        </Grid>

        <Grid item xs={12}>
          <h2>
            Alliances
            <Button size="small" onClick={() => this.sortByClass("undo")}>
              <Undo />
            </Button>
          </h2>
        </Grid>
        <Grid item xs>
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
