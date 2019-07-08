import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
function HeroTypes(props) {
  return Object.values(props.classes).map((type, index) => {
    return (
      <Grid key={index} item xs>
        <Button>
          <img
            src={"/static/" + type.replace(/\W/g, "").toLowerCase() + ".jpg"}
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
}

export default HeroTypes;
