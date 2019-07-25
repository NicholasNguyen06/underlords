import React from "react";
import HeroCard from "./herocard";
import HeroList from "./herolist";
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
import AddUser from "./adduser/adduser";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: this.props.heroes.Heroes,
      team: [],
      currentClasses: [],
      currentComposition: null,
      synergies: []
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
    this.getSynergy();
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
    this.getSynergy();
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

  getSynergy = () => {
    let currentClasses = Array.from(new Set(this.state.currentClasses));
    let composition = [];
    fetch(`http://127.0.0.1:3001/synergies`)
      .then(res => res.json())
      .then(
        results => {
          for (let i in results) {
            var synergyClasses = results[0].data.classes;
            if (synergyClasses.some(v => currentClasses.indexOf(v) !== -1)) {
              composition.push(results[0].data);
            }
          }
          this.setState({
            synergies: composition
          });
        },
        error => {
          console.log("Error: ", error);
        }
      );
  };

  loadComposition = id => {
    let composition = this.state.synergies.find(synergy => {
      return synergy.id === id;
    });
    this.setState({
      currentComposition: composition
    });
  };

  render() {
    var heroesList = Object.values(this.state.heroes).map((hero, index) => {
      return (
        <Grid key={index} item xs sm={3} lg={2} xl={1}>
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
          <TeamCompositions
            currentClasses={this.state.currentClasses}
            currentComposition={this.state.currentComposition}
            synergies={this.state.synergies}
            onClick={this.loadComposition}
          />
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
            <HeroList heroes={data.Heroes} onClick={this.addToTeam} />
        </Grid>
      </Container>
    );
  }
}

export default Dashboard;
