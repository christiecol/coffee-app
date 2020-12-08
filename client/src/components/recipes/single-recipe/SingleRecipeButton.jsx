import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiGlobe, FiCoffee } from "react-icons/fi";

import { COLORS } from "../../../constants";

export const SingleRecipeButton = () => {
  return (
    <>
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <HeaderDiv>
          <Header>
            <Button>
              <ItemDiv>
                <FiCoffee />
                <P>Kujira</P>
              </ItemDiv>

              <ItemDiv>
                <FiGlobe />
                <P>Costa Rica</P>
              </ItemDiv>
            </Button>
          </Header>
        </HeaderDiv>
      </IconContext.Provider>
    </>
  );
};

const HeaderDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.button`
  all: unset;

  display: flex;
  justify-content: space-evenly;

  margin: 2rem 1rem 0;
  font-size: 1.3rem;
  width: 80vw;
  z-index: 10;

  background-color: ${COLORS.cultured};

  border-radius: 15px 15px 0 0;

  box-shadow: 0px 5px 9px 0.5px #252525;
`;

const Header = styled.div``;

const P = styled.p`
  margin-left: 5px;
`;

const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  padding: 1rem 0;

  /* background-color: ${COLORS.cultured}; */
`;
