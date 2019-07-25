import React from "react";
import TeamSynergy from "./teamsynergy";
import TeamDescription from "./teamdescription";
import Grid from "@material-ui/core/Grid";
class TeamCompositions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const display = [];
    if (this.props.currentComposition == null) {
      return (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TeamSynergy
              synergies={this.props.synergies}
              onClick={this.props.onClick}
              />
          </Grid>
        </Grid>
      );
    }
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TeamSynergy
            synergies={this.props.synergies}
            onClick={this.props.onClick}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TeamDescription composition={this.props.currentComposition} />
        </Grid>
      </Grid>
    );
  }
}

export default TeamCompositions;
