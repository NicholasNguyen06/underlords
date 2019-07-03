import React from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useState } from "react";
class SearchHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  handleChange = event => {
    var value = event.target.value;
    this.setState({searchValue: value});
    this.props.onInput(value);

  };

  render() {
    return (
      <TextField
        id="standard-search"
        name="standard-search"
        label="Search field"
        type="search"
        margin="normal"
        onChange={this.handleChange}
        value={this.state.searchValue}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
      
    );
  }
}

export default SearchHero;
