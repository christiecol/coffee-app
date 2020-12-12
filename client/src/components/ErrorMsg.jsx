import React from "react";
import styled from "styled-components";

const ErrorMsg = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  border: 1px solid red;
  height: 75px;
  width: 80%;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: 14px;
  z-index: 1000;
`;

export default ErrorMsg;
