import React from "react";
import HeroCard from "./herocard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import AllianceButtons from "./alliancebuttons";
import SearchHero from "./searchhero";
import TeamBuilder from "./teambuilder";
import Undo from "@material-ui/icons/Undo";
import Button from "@material-ui/core/Button";
import data from "../static/data/heroes";
import TeamCompositions from "./teamcompositions";
import AddUser from "./adduser/adduser";

function HeroList(props) {
  var heroesList = Object.values(props.heroes).map((hero, index) => {
    return (
      <Grid key={index} item xs sm={3} lg={2} xl={1}>
        <HeroCard
          key={hero.id}
          name={hero.name}
          classes={hero.classes}
          onClick={props.onClick}
          id={hero.id}
        />
      </Grid>
    );
  });

  return (
    <Grid container spacing={1}>
      {heroesList}
    </Grid>
  )
}

export default HeroList;
