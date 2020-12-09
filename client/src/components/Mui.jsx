import React from "react";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/button";
import IconButton from "@material-ui/core/IconButton";

import Tooltip from "@material-ui/core/Tooltip";
import CameraIcon from "@material-ui/icons/Camera";

import { COLORS } from "../constants";

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
    marginBottom: 30,
    backgroundColor: `${COLORS.feldgrauLight}`,
  },
}));

export const Mui = () => {
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
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
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
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
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
      </AppBar>
      <Tooltip title="Meow">
        <IconButton>
          <CameraIcon />
        </IconButton>
      </Tooltip>
      <MyButton>Styled Components</MyButton>
    </div>
  );
};

const MyButton = styled(Button)({
  background: `${COLORS.gainsboro}`,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  height: 48,
  padding: "0 30px",
  "&:hover": { background: "red" },
});
