import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants";

export const BurgerContent = () => {
  return (
    <>
      <Wrapper>
        <Item to="/" aria-label="Origins">
          Origins
        </Item>
        <Item to="/" aria-label="Brew Methods">
          Brew Methods
        </Item>
        <Item to="/myrecipes" aria-label="My recipes">
          My recipes
        </Item>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1000;
  position: fixed;
  width: 100%;
  text-align: center;
`;

const Item = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 2rem 0;
  background-color: ${COLORS.feldgrauLight};
  border: 1px solid ${COLORS.gainsboro};

  font-style: bold;
  font-size: 1.3rem;

  &:hover {
    background-color: ${COLORS.feldgrauDark};
  }
`;
