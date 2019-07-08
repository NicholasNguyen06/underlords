import React from 'react';
import data from '../static/data/synergy';

class TeamCompositions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getSynergy = () => {
        var comp = Object.values(data.synergies).Map((synergy, index) => {
            return (
                ""
            )
        })  
        return comp;
    };

    render () {
        var synergies = () => getSynergy();
        return (
            ""
        )
    }
}

export default TeamCompositions