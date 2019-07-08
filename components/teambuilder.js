import React from "react";
import HeroCard from "./herocard";
import TeamCard from "./teamcard";
import Grid from "@material-ui/core/Grid";

class TeamBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: []
    };
  }

  render() {
    var team = Object.values(this.props.team).map((hero, index) => {
      return (
        <Grid key={index} item xs={1}>
          <TeamCard
            name={hero.name}
            index={index + 1}
            onClick={this.props.onClick}
          />
        </Grid>
      );
    });
    return (
      <Grid container spacing={3}>
        {team}
      </Grid>
    );
  }
}

export default TeamBuilder;
