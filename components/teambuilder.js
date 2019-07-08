import React from 'react'
import HeroCard from "./herocard";
import TeamCard from "./teamcard";
import Grid from "@material-ui/core/Grid";


class TeamBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        var team = Object.values(this.props.team).map((type,index) => {
            return (
                <Grid key={index} item xs={1}>

                <TeamCard name={type.name} />
                </Grid>
            )
        })
        return (
            <Grid container spacing={3}>
                {team}
            </Grid>
        )
    }
}

export default TeamBuilder;