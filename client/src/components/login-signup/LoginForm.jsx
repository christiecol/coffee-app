import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { IconContext } from "react-icons";
import { FiKey } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";

import { requirePropFactory } from "@material-ui/core";

import { COLORS } from "../../constants";
import { SignUpForm } from "./SignUpForm";
import { responseUser } from "../../redux/actions/actions";

import Logo from "../../images/logoFull.png";
import Coffee from "../../images/nathan-dumlao-zUNs99PGDg0-unsplash.jpg";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState();

  const history = useHistory();
  const dispatch = useDispatch();

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleLogin = (ev) => {
    ev.preventDefault();
    validateEmail(email);

    fetch("/login", {
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

        return { email: email, status: res.status, ...res.json() };
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(responseUser(email));
          history.push("/home");
        }
      })
      .catch((err) => err.message);
  };

  const goToHome = () => {
    history.push("/home");
  };

  return (
    <Wrapper>
      <WrapperOverlay>
        <ImgDiv>
          <img src={Logo} />
        </ImgDiv>

        <IconContext.Provider value={{ size: "1.5rem" }}>
          <form onSubmit={handleLogin}>
            <EmailPassword>
              <H2>Already a member?</H2>
              <InputDivEmail>
                <Icon>
                  <AiOutlineMail />
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
                  <FiKey />
                </Icon>
                <Input
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  type="password"
                  placeholder="Password"
                  required="required"
                  aria-required="true"
                />
              </InputDivPass>
              <Button type="submit">Sign In</Button>
            </EmailPassword>

            <SignIn>
              <H2>Don't have an account?</H2>
              <SignUpForm />
              <H1>Or</H1>
              <A href="/home">
                Continue as a guest
                <BsBoxArrowInRight style={{ marginLeft: 7 }} />
              </A>
            </SignIn>
          </form>
        </IconContext.Provider>
      </WrapperOverlay>
    </Wrapper>
  );
};

const ImgDiv = styled.div`
  margin-top: 2rem;
`;

const Wrapper = styled.div`
  background-image: url(${Coffee});
  background-size: cover;
  overflow: hidden;
`;

const WrapperOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
  background-color: rgba(0, 0, 0, 0.36);
`;

const EmailPassword = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  padding: 1rem 0 2rem 0;

  width: 70vw;

  background-color: rgba(0, 0, 0, 0.2);
`;

const SignIn = styled(EmailPassword)`
  margin-top: 1rem;
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

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const H2 = styled.h3`
  font-size: 1.3rem;

  margin: 1rem 0;
`;

const H1 = styled.h1`
  font-size: 1.5rem;

  margin-bottom: 1rem;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;

  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;

  padding: 10px 0;
  width: 50vw;
  /* margin-bottom: 1.5rem; */
  border-radius: 20px;

  border: 2px solid white;
  color: white;
  background: none;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${COLORS.desertSand};
    border: 2px solid ${COLORS.desertSand};
  }
`;

const A = styled.a`
  all: unset;
  cursor: pointer;

  display: flex;
  align-items: center;

  font-size: 1.4rem;
  color: ${COLORS.desertSand};

  &:hover {
    color: white;
  }
`;
