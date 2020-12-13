import React from "react";
import styled from "styled-components";
import { LoginForm } from "../../components/login-signup/LoginForm";

export const LogInPage = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
