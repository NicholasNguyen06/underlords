import React from "react";
import Grid from "@material-ui/core/Grid";
import AllianceButtons from "../alliancebuttons";
import data from "../../static/data/heroes.json";
import HeroList from "../herolist";
import TextField from '@material-ui/core/TextField';

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroCount: 0,
      selectedHeroes: []
    };
  }

  handleSubmit = () => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data.get("number"));
  };

  render() {
    let heroRows = [];
    for (var i in this.state) {
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <TextField
            id="address2"
            name="address2"
            label="Hero 1"
            fullWidth
            autoComplete="billing address-line2"
          />
                    <label>Hero 1</label>
          <input type="text" name="hero1" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddUser;
