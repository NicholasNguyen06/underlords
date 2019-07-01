import React from "react";
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
function HeroTypes(props) {
  return (Object.values(props.classes).map((type, index) => {
    return <Grid item xs={4}><Button>
      <img src={"/static/" + type.replace(/\W/g, "").toLowerCase() + ".jpg"} />
      <style jsx>{`
            img {
              height: 50px;
              width: 50px;
            }
          `}</style>
          </Button>
          </Grid>;
  }));
}

export default HeroTypes;
