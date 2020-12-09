import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getRecipe } from "../../../redux/reducers/RecipesReducer";

import { IconContext } from "react-icons";
import { GiMokaPot, GiCoffeeBeans } from "react-icons/gi";
import { IoWaterOutline, IoTimerOutline } from "react-icons/io5";
import { VscNote } from "react-icons/vsc";
import { MdComment } from "react-icons/md";
import { COLORS } from "../../../constants";

export const SingleRecipe = ({ recipe }) => {
  return (
    <>
      <IconContext.Provider value={{ size: "1rem" }}>
        <Wrapper>
          <LeftDiv>
            <ItemDiv>
              <GiMokaPot />
              <P>{recipe.brewMethod}</P>
            </ItemDiv>

            <ItemDiv>
              <GiCoffeeBeans />
              <P>{recipe.grindSize}</P>
            </ItemDiv>

            <ItemDiv>
              <IoWaterOutline />
              <P>200</P>
            </ItemDiv>

            <ItemDiv>
              <IoTimerOutline />
              <P>
                {recipe.minutes}m {recipe.seconds}s
              </P>
            </ItemDiv>
          </LeftDiv>

          <RightDiv>
            <ItemDiv>
              <span>
                <VscNote />
              </span>
              <P>{recipe.notes}</P>
            </ItemDiv>

            <ItemDiv>
              <span>
                <MdComment />
              </span>

              <P>{recipe.comments}</P>
            </ItemDiv>
          </RightDiv>
        </Wrapper>
      </IconContext.Provider>
    </>
  );
};

const P = styled.p`
  margin-left: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;

  width: 80vw;
  background-color: ${COLORS.gainsboro};
  padding: 0 20px 10px;

  border-radius: 0 0 15px 15px;
  /* box-shadow: 0px 5px 9px 0.5px #252525; */
`;

const LeftDiv = styled.div`
  width: 50%;
  margin: 1rem;
`;

const ItemDiv = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;

  margin-top: 1rem;
  border-radius: 5px;
  padding: 5px;

  background-color: ${COLORS.cultured};
`;

const RightDiv = styled(LeftDiv)`
  border: none;
  padding-right: 0;
`;
