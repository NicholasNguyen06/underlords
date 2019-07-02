import React from "react";
import HeroCard from "./herocard";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import data from "../static/heroes.json";
import AllianceButtons from "./alliancebuttons";
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

class HeroList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: this.props.heroes.Heroes
    };
  }

  sortClick() {
    this.setState({
      heroes: this.state.heroes.length == 0 ? data.Heroes : []
    });
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

  render() {
    var heroesList = Object.values(this.state.heroes).map((type, index) => {
      return (
        <Grid key={index} item xs={2}>
          <HeroCard
            key={index}
            name={type.name}
            classes={type.classes}
            onClick={this.sortByClass}
          />
        </Grid>
      );
    });
    return (
      <Container maxWidth={"xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h2>Alliances</h2>
            <style jsx>{`
              h2 {
                padding-left: 15px;
              }
            `}</style>
          </Grid>
          <Grid item xs={6}>
            <AllianceButtons onClick={this.sortByClass} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="input-with-icon-textfield"
              label="TextField"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </Grid>
        <Grid>
          <GridList cols={12} cellHeight={280}>
            {heroesList}
          </GridList>
        </Grid>
      </Container>
    );
  }
}

export default HeroList;
