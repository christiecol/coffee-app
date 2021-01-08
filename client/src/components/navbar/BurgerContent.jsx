import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";

import IconButton from "@material-ui/core/IconButton";

import { COLORS } from "../../constants";
import Logo from "../../images/logo.png";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    margin: 0,
    width: "98vw",
    textAlign: "center",
    fontSize: "1.5rem",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: `${COLORS.feldgrauDark}`,
    border: `1px solid ${COLORS.gainsboro}`,
    color: "white",
    zIndex: "2000",

    "&:active": {
      backgroundColor: `${COLORS.desertSand}`,
    },

    "&:focus": {
      boxShadow: "0 0 0 2px #ffffff, 0 0 3px 5px #3a97f9",
      outline: "2px dotted transparent",
      outlineOffset: "2px",
    },
  },
}));

export const BurgerContent = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  //toggle burger
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  //close menu
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  // close with tab
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Toolbar>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Popper
          style={{ marginTop: 5 }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper
                style={{
                  zIndex: 100,
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    role="navigation"
                    tabIndex="-1"
                    style={{ zIndex: 1000, padding: 0 }}
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <Nav to="/home">
                      <MenuItem
                        style={{ zIndex: 100 }}
                        className={classes.menuItem}
                        onClick={handleClose}
                      >
                        Home
                      </MenuItem>
                    </Nav>

                    <Nav to="/origins">
                      <MenuItem
                        className={classes.menuItem}
                        onClick={handleClose}
                      >
                        Origins
                      </MenuItem>
                    </Nav>

                    <Nav to="/brewmethods">
                      <MenuItem
                        style={{ zIndex: 100 }}
                        className={classes.menuItem}
                        onClick={handleClose}
                      >
                        Brew Methods
                      </MenuItem>
                    </Nav>

                    <Nav to="/myrecipes">
                      <MenuItem
                        className={classes.menuItem}
                        onClick={handleClose}
                      >
                        My Recipes
                      </MenuItem>
                    </Nav>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        <NavLinkHome to="/home" aria-label="jump to homepage">
          <Img src={Logo} alt="Catimor Logo" />
        </NavLinkHome>
      </Toolbar>
    </>
  );
};

const Nav = styled(NavLink)`
  all: unset;

  z-index: 1000;
`;

const NavLinkHome = styled(NavLink)`
  margin-left: 1rem;

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #3a97f9;
    outline: 2px dotted transparent;
    outline-offset: 2px;
  }
`;

const Img = styled.img`
  max-height: 3.5rem;
  max-width: 3.5rem;
`;
