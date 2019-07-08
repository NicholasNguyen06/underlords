import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
function HeroTypes(props) {
  const heroTypes = Object.values(props.classes).map((type, index) => {
    return (
      <Grid key={index} item xs={4}>
        <Button>
          <img
            src={"/static/alliance-icons/" + type.replace(/\W/g, "").toLowerCase() + ".jpg"}
          />
          <style jsx>{`
            img {
              height: 40px;
              width: 40px;
            }
          `}</style>
        </Button>
      </Grid>
    );
  });

  return (
    <Grid container spacing={0}>
      {heroTypes}
    </Grid>
  )
}

export default HeroTypes;
