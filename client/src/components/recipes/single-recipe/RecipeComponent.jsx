import React, { useState } from "react";
import styled from "styled-components";

import { IconContext } from "react-icons";
import { FiGlobe, FiCoffee, FiTag } from "react-icons/fi";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

import { AllRecipes } from "./AllRecipes";
import { RecipeFavouriteButton } from "./RecipeFavouriteButton";
import { COLORS } from "../../../constants";

export const RecipeComponent = ({ recipe }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    return toggle;
  };

  return (
    <>
      <IconContext.Provider value={{ size: "1.2rem" }}>
        <HeaderDiv>
          <div>
            <RecipeInfo>
              {recipe.roaster && (
                <ItemDiv>
                  <FiCoffee />
                  <P>{recipe.roaster}</P>
                </ItemDiv>
              )}

              {recipe.origin && (
                <ItemDiv>
                  <FiGlobe />
                  <P>{recipe.origin}</P>
                </ItemDiv>
              )}

              {recipe.name && (
                <ItemDiv>
                  <FiTag />
                  <P>{recipe.name}</P>
                </ItemDiv>
              )}
            </RecipeInfo>

            <RecipeFavouriteButton recipe={recipe} />
            <DropdownButton onClick={() => handleToggle()}>
              <DropdownSelector>
                {!toggle ? (
                  <>
                    <FullReciP>
                      View full recipe
                      <IoIosArrowDropdown />
                    </FullReciP>
                  </>
                ) : (
                  <>
                    <FullReciP>
                      See Less
                      <IoIosArrowDropup />
                    </FullReciP>
                  </>
                )}
              </DropdownSelector>
            </DropdownButton>
          </div>
        </HeaderDiv>
      </IconContext.Provider>
      {toggle ? <AllRecipes recipe={recipe} /> : null}
    </>
  );
};
const HeaderDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const RecipeInfo = styled.div`
  all: unset;

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  margin: 2rem 1rem 0;
  width: 80vw;
  z-index: 10;

  background-color: ${COLORS.cultured};

  border-radius: 15px 15px 0 0;
  padding-top: 0.5rem;

  /* box-shadow: 0px 5px 9px 0.5px #252525; */
`;

const DropdownButton = styled(RecipeInfo)`
  margin-top: 0;
  border-radius: 0;
  box-shadow: 0;
  padding-bottom: 0.5rem;
`;

const DropdownSelector = styled.div`
  display: flex;
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const P = styled.p`
  font-size: 1.2rem;

  margin-left: 5px;
`;

const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.3rem 0;

  /* background-color: ${COLORS.cultured}; */
`;

const FullReciP = styled.p`
  display: flex;
  align-items: center;
`;

const OptionsDiv = styled(ItemDiv)`
  justify-content: space-around;
`;
