import React from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useState } from "react";
class SearchHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  handleChange = () => {

  }
  
  render() {
    return (
      <TextField
        id="search-heroes"
        name="search-heroes"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        value={input}
        onKeyUp={e => props.onKeyUp(e, e.target.value)}
      />
    );
  }
}
