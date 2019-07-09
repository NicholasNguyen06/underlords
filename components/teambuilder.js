import React from "react";
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
        <TeamCard
          key={hero.id}
          name={hero.name}
          index={index + 1}
          onClick={this.props.onClick}
        />
      );
    });
    return <Grid container>{team}</Grid>;
  }
}

export default TeamBuilder;
