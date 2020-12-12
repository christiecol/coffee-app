import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { IconContext } from "react-icons";
import { FiKey } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import { COLORS } from "../../constants";
import { responseUser } from "../../redux/actions/actions";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    // width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "column",

    padding: "1.5rem",

    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignUp = (ev) => {
    ev.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.error) {
          throw res.error;
        }
        return { status: res.status, ...res.json() };
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          dispatch(responseUser(res));
          history.push("/home");
        }
      })
      .catch((err) => err.message);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Wrapper style={modalStyle} className={classes.paper}>
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <form onSubmit={handleSignUp}>
          <EmailPassword>
            <InputDivEmail>
              <Icon>
                <AiOutlineMail />
              </Icon>
              <Input
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                type="text"
                placeholder="email"
              />
            </InputDivEmail>
            <InputDivPass>
              <Icon>
                <FiKey />
              </Icon>
              <Input
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                type="password"
                placeholder="password"
              />
            </InputDivPass>
            <Button type="submit">Sign up</Button>
          </EmailPassword>
        </form>
      </IconContext.Provider>
    </Wrapper>
  );

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        Sign up
      </Button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 100vw;
`;

const EmailPassword = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  padding: 1.5rem;
`;

const InputDivEmail = styled.div`
  display: flex;

  margin: 0.5rem 2.2rem 1.7rem;
  border-radius: 7px;

  background-color: ${COLORS.cultured};
`;

const InputDivPass = styled(InputDivEmail)``;

const Icon = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5px;
  position: relative;
`;

const Input = styled.input`
  all: unset;
  outline: none;
  height: 3rem;
  width: 10rem;

  /* border-radius: 5px;
  border: none; */

  &:focus {
    outline: ${COLORS.desertSand};
  }
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;

  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;

  margin-top: 0.5rem;
  padding: 10px;
  width: 10rem;
  border-radius: 20px;

  color: ${COLORS.blackCoffee};
  background-color: ${COLORS.cultured};
`;
