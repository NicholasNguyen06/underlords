import React from 'react';
import data from '../static/data/synergy';

class TeamCompositions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getSynergy = () => {
        let synergies = [];
        let currentClasses = [];
        for (let i in data.synergies) {
            var synergy = data.synergies[i];
            var synergyClass = data.synergies[i].classes;
        }
        var comp = Object.values(data.synergies).map((synergy, index) => {
            return (
                ""
            )
        })
        return comp;
    };

    render() {
        var synergies = this.getSynergy();
        return (
            ""
        )
    }
}

export default TeamCompositions