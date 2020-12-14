import React, { useState } from "react";

import { useSelector } from "react-redux";
import { getRecipe } from "../../../redux/reducers/RecipesReducer";

import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../../constants";

const useStyles = makeStyles(() => ({
  searchContainer: {
    display: "flex",
    backgroundColor: fade(`${COLORS.cultured}`, 0.3),
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: 10,
    marginTop: "1rem",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: 5,
  },
  searchInput: {
    width: 200,
    margin: 5,
  },
}));

export const SearchBar = ({ input, setInput }) => {
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <div className={classes.searchContainer}>
          <SearchIcon className={classes.searchIcon} />
          <TextField
            value={input}
            onChange={(ev) => {
              setInput(ev.target.value);
            }}
            label="Recipes"
            variant="standard"
            className={classes.searchInput}
          />
        </div>
      </Toolbar>
    </>
  );
};
