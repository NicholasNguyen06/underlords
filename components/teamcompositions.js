import React from "react";
import data from "../static/data/synergy";
import TeamSynergy from "./teamsynergy";
import TeamDescription from "./teamdescription";
import Grid from "@material-ui/core/Grid";
class TeamCompositions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClasses: props.currentClasses,
      currentComposition: null
    };
  }

  getSynergy = () => {
    let currentClasses = Array.from(new Set(this.state.currentClasses));
    let synergies = [];
    for (let i in data.synergies) {
      var synergy = data.synergies[i];
      var synergyClasses = data.synergies[i].classes;
      if (synergyClasses.some(v => currentClasses.indexOf(v) !== -1)) {
        synergies.push(synergy);
      }
    }
    return synergies;
  };

  loadComposition = id => {
    let composition = data.synergies.find(synergy => {
        return synergy.id === id;
    })
    this.setState({
      currentComposition: composition
    });
  };

  render() {
    var synergies = this.getSynergy();
    const display = [];
    if (this.state.currentComposition == null) {
      return (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TeamSynergy synergies={synergies} onClick={this.loadComposition} />
          </Grid>
        </Grid>
      );
    }
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TeamSynergy synergies={synergies} onClick={this.loadComposition} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TeamDescription composition={this.state.currentComposition} />
        </Grid>
      </Grid>
    );
  }
}

export default TeamCompositions;
