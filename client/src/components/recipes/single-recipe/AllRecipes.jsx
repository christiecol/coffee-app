import React from "react";
import styled from "styled-components";

import { IconContext } from "react-icons";
import { GiMokaPot, GiCoffeeBeans } from "react-icons/gi";
import { IoWaterOutline, IoTimerOutline } from "react-icons/io5";
import { VscNote } from "react-icons/vsc";
import { MdComment } from "react-icons/md";
import { COLORS } from "../../../constants";
import { DeleteActionButton } from "./DeleteActionButton";

export const AllRecipes = ({ recipe }) => {
  console.log(recipe);
  return (
    <>
      <IconContext.Provider value={{ size: "1rem", zIndex: "100" }}>
        <Wrapper>
          {/* date here */}
          <LeftDiv>
            {recipe.brewMethod && (
              <ItemDiv>
                <GiMokaPot />
                <P>{recipe.brewMethod}</P>
              </ItemDiv>
            )}

            {recipe.grindSize && (
              <ItemDiv>
                <GiCoffeeBeans />
                <P>{recipe.grindSize}</P>
              </ItemDiv>
            )}

            {recipe.water && (
              <ItemDiv>
                <IoWaterOutline />
                <P>200</P>
              </ItemDiv>
            )}

            {!recipe.minutes && !recipe.seconds ? null : (
              <ItemDiv>
                <IoTimerOutline />
                <P>{recipe.minutes}m </P>
                <P>{recipe.seconds}s</P>
              </ItemDiv>
            )}
            {recipe.minutes && !recipe.seconds ? (
              <ItemDiv>
                <IoTimerOutline />
                <P>{recipe.minutes}m</P>
              </ItemDiv>
            ) : null}
            {!recipe.minutes && recipe.seconds ? (
              <ItemDiv>
                <IoTimerOutline />
                <P>0m</P>
                <P>{recipe.seconds}s</P>
              </ItemDiv>
            ) : null}
          </LeftDiv>
          <RightDiv>
            {recipe.notes && (
              <ItemDiv>
                <span>
                  <VscNote />
                </span>
                <P>{recipe.notes}</P>
              </ItemDiv>
            )}

            {recipe.comments && (
              <ItemDiv>
                <span>
                  <MdComment />
                </span>
                <P>{recipe.comments}</P>
              </ItemDiv>
            )}
            <DeleteActionButton id={recipe._id} />
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
