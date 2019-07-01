import React from "react";
import HeroCard from "./herocard"
import Grid from '@material-ui/core/Grid'
import { json } from "../static/heroes.json";

class HeroList extends React.Component {
  render() {
    return (Object.values(this.props.data.Heroes).map((type,index )=> {
      return <Grid item xs={3} lg={2}><HeroCard name={type.name} classes={type.classes} imgsrc={type.imgsrc}/></Grid>;
    })
    )
  }
}

export default HeroList;
