import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { IconContext } from "react-icons";
import { FiKey } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import DialogContent from "@material-ui/core/DialogContent";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { COLORS } from "../../constants";
import { responseUser } from "../../redux/actions/actions";
import { Paper } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "column",

    padding: "1.5rem",

    boxShadow: "0px 0px 9px 5px #000000",
    background: `${COLORS.feldgrauDark}`,
    border: `2px solid ${COLORS.feldgrauLight}`,
    padding: theme.spacing(2, 4, 3),
    outline: 0,
  },
}));

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [password, setPassword] = useState("");
  //form validation
  const [subStatus, setSubStatus] = useState("idle");

  //modal state
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleSignUp = (ev) => {
    ev.preventDefault();
    validateEmail(email);

    setSubStatus("pending");

    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, firstPassword, password }),
    })
      .then((res) => {
        console.log(res);
        return { email: email, status: res.status, ...res.json() };
      })
      .then((res) => {
        if (res.status === 201) {
          dispatch(responseUser(email));
          setSubStatus("success");
          history.push("/home");
        }
      })
      .catch((err) => {
        setSubStatus("error");
        return err.message;
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Paper style={modalStyle} className={classes.paper}>
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <form onSubmit={handleSignUp} autoComplete="off">
          <EmailPassword role="form">
            <H2>Please enter your email and a secure password</H2>
            <InputDivEmail>
              <Icon>
                <AiOutlineMail alt="email" />
              </Icon>
              <Input
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                type="email"
                placeholder="Email"
                required="required"
                pattern=".+@.+.."
                aria-required="true"
              />
            </InputDivEmail>
            <InputDivPass>
              <Icon>
                <FiKey alt="password" />
              </Icon>
              <Input
                value={firstPassword}
                onChange={(ev) => setFirstPassword(ev.target.value)}
                type="password"
                placeholder="Password"
                required="required"
                aria-required="true"
              />
            </InputDivPass>
            <InputDivPass>
              <Icon>
                <FiKey alt="password" />
              </Icon>
              <Input
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                type="password"
                placeholder="password"
                required="required"
                aria-required="true"
              />
            </InputDivPass>
            <div>
              {firstPassword !== password ? (
                <PassError>Passwords do not match</PassError>
              ) : null}
            </div>
            <Button type="submit">Sign up</Button>
            <p>
              <em>We won't share your personal information with anyone</em>
            </p>
          </EmailPassword>
        </form>
      </IconContext.Provider>
    </Paper>
  );

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        Sign Up
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 600,
        }}
      >
        <DialogContent>
          {/* <Fade in={open}> */}
          {subStatus !== "success" && body}
          {/* </Fade> */}
        </DialogContent>
      </Modal>
    </div>
  );
};
const EmailPassword = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  padding: 2rem 0;
  text-align: center;

  width: 70vw;
  color: white;
`;

const H2 = styled.h2`
  font-size: 1.2rem;

  margin: 1rem 0;
`;

const InputDivEmail = styled.div`
  display: flex;

  margin-bottom: 2rem;
  padding: 2px 10px 2px 0;

  width: 50vw;

  border-radius: 35px;
  background: rgba(255, 255, 255, 0.2);

  transition: 0.3s ease-in-out;
`;

const InputDivPass = styled(InputDivEmail)``;

const Icon = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5px 5px 5px 20px;
  position: relative;
`;

const Input = styled.input`
  outline: none;
  border: none;

  letter-spacing: 1px;
  font-size: 1.2rem;
  font-weight: 300;

  height: 3rem;
  width: 100%;
  padding: 10px 0 10px 15px;

  color: white;
  background: transparent;
  transition: 0.3s ease-in-out;

  &:active {
    background: transparent;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #3a97f9;
    outline: 2px dotted transparent;
    outline-offset: 2px;
  }
`;

const PassError = styled.p`
  color: white;
  background-color: #610000;
  padding: 3px;
  margin-bottom: 10px;

  font-size: 1.2rem;
  font-weight: bold;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;

  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;

  padding: 10px 0;
  width: 50vw;
  margin-bottom: 1.5rem;
  border-radius: 20px;

  border: 2px solid white;
  color: white;
  background: none;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${COLORS.desertSand};
    border: 2px solid ${COLORS.desertSand};
  }

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #3a97f9;
    outline: 2px dotted transparent;
    outline-offset: 2px;
  }
`;
