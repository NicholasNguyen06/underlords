import React from "react";
import data from "../static/data/synergy";
import TeamSynergy from "./teamsynergy";
import Grid from "@material-ui/core/Grid";
class TeamCompositions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClasses: props.currentClasses
    };
  }

  getSynergy = () => {
    let currentClasses = Array.from(new Set(this.state.currentClasses));
    console.log(currentClasses, data.synergies);
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

  render() {
    var synergies = this.getSynergy();
    const display = [];
    return <TeamSynergy synergies={synergies} />;
  }
}

export default TeamCompositions;
