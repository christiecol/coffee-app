import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";

import IconButton from "@material-ui/core/IconButton";

import { COLORS } from "../../constants";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  menuItem: {
    width: "97vw",
    textAlign: "center",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: `${COLORS.feldgrauLight}`,
    border: `1px solid ${COLORS.gainsboro}`,
    color: "white",
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
                    style={{ zIndex: 100 }}
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      Home
                    </MenuItem>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      Origins
                    </MenuItem>
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      My Recipes
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
      </Toolbar>
    </>
  );
};

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   z-index: 1000;
//   position: fixed;
//   width: 100%;
//   text-align: center;
// `;

// const Item = styled(NavLink)`
//   color: white;
//   text-decoration: none;
//   padding: 2rem 0;
//   background-color: ${COLORS.feldgrauLight};
//   border: 1px solid ${COLORS.gainsboro};

//   font-style: bold;
//   font-size: 1.3rem;

//   &:hover {
//     background-color: ${COLORS.feldgrauDark};
//   }
// `;
