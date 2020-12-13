import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

import { BurgerContent } from "./BurgerContent";
import { useViewport } from "../../util";
import { COLORS } from "../../constants";
import { NavbarContent } from "./NavbarContent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: `${COLORS.blackCoffee}`,
    zIndex: 1000,
  },
}));

export const Navbar = () => {
  const size = useViewport();
  const classes = useStyles();

  const currentWidth = size.width;
  const mobileBreakpoint = 600;

  return (
    <>
      {currentWidth > mobileBreakpoint ? (
        <NavbarContent />
      ) : (
        <div className={classes.root}>
          <AppBar
            style={{ zIndex: 1000 }}
            position="static"
            className={classes.appBar}
          >
            <BurgerContent />
          </AppBar>
        </div>
      )}
    </>
  );
};
