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
      <IconContext.Provider value={{ size: "1.4rem" }}>
        <M>
          <div>
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
          </div>

          <RecipeFavouriteButton recipe={recipe} key={recipe._id} />
          <DropdownButton onClick={() => handleToggle()}>
            <div>
              {!toggle ? (
                <>
                  <FullRecipe>
                    <p style={{ marginRight: "5px" }}>View full recipe</p>
                    <IoIosArrowDropdown />
                  </FullRecipe>
                </>
              ) : (
                <>
                  <FullRecipe>
                    <p style={{ marginRight: "5px" }}>See Less</p>
                    <IoIosArrowDropup />
                  </FullRecipe>
                </>
              )}
            </div>
          </DropdownButton>
        </M>
      </IconContext.Provider>
      {toggle ? <AllRecipes recipe={recipe} /> : null}
    </>
  );
};

const M = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 80vw;
  margin-top: 2rem;
  padding-top: 10px;

  border-radius: 15px 15px 0 0;
  font-size: 20px;

  color: white;
  background-color: ${COLORS.darkTransparentTwo};
`;

const DropdownButton = styled.button`
  all: unset;

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  z-index: 100;

  margin-top: 0;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #3a97f9;
    outline: 2px dotted transparent;
    outline-offset: 2px;
  }
`;

const P = styled.p`
  font-size: 1.4rem;

  margin-left: 5px;
`;

const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 0;
`;

const FullRecipe = styled.div`
  display: flex;
  align-items: center;

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #3a97f9;
    outline: 2px dotted transparent;
    outline-offset: 2px;
  }
`;

const OptionsDiv = styled(ItemDiv)`
  justify-content: space-around;
`;
