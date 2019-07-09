import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function TeamDescription(props) {
  let subHeroes = [];
  for (var i in props.composition.subheroes) {
    var listOfSubs = props.composition.subheroes[i];
    for (var j in listOfSubs) {
      subHeroes.push(<li>{listOfSubs[j]}</li>);
    }
  }

  let heroes = Object.values(props.composition.heroes).map((hero, index) => {
    return <li key={index}> {hero} </li>;
  });
  let items = Object.values(props.composition.items).map((item, index) => {
    return <li key={index}> {item} </li>;
  });

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <h5>Heroes:</h5>
          <ul>{heroes}</ul>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h5>Sub-Heroes:</h5>
          <ul>{subHeroes}</ul>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <h5>Items:</h5>
          <ul>{items}</ul>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h5>Notes:</h5>
          <p>{props.composition.notes}</p>
        </Grid>
      </Grid>
    </div>
  );
}
