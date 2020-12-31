import React from "react";
import styled from "styled-components";

import { IconContext } from "react-icons";
import { GiMokaPot, GiCoffeeBeans } from "react-icons/gi";
import { IoWaterOutline, IoTimerOutline } from "react-icons/io5";
import { VscNote } from "react-icons/vsc";
import { MdComment } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";

import { COLORS } from "../../../constants";
import { DeleteActionButton } from "./DeleteActionButton";

export const AllRecipes = ({ recipe }) => {
  console.log(recipe);
  return (
    <>
      <IconContext.Provider value={{ size: "1.3rem", zIndex: "100" }}>
        <Wrapper>
          <LeftDiv>
            {recipe.brewMethod && (
              <>
                <p>Brew Method</p>
                <ItemDiv>
                  <GiMokaPot />
                  <P>{recipe.brewMethod}</P>
                </ItemDiv>
              </>
            )}

            {recipe.grams && (
              <>
                <p>Grams</p>
                <ItemDiv>
                  <GiCoffeeBeans />
                  <P>{recipe.grams}g</P>
                </ItemDiv>
              </>
            )}

            {recipe.grindSize && (
              <>
                <p>Grind size</p>

                <ItemDiv>
                  <GoPrimitiveDot />
                  <P>{recipe.grindSize}</P>
                </ItemDiv>
              </>
            )}

            {recipe.water && (
              <>
                <p>Grams of water</p>

                <ItemDiv>
                  <IoWaterOutline />
                  <P>{recipe.water}</P>
                </ItemDiv>
              </>
            )}

            {!recipe.minutes && !recipe.seconds ? null : (
              <>
                <p>Time</p>
                <ItemDiv>
                  <IoTimerOutline />
                  <P>{recipe.minutes}m </P>
                  <P>{recipe.seconds}s</P>
                </ItemDiv>
              </>
            )}
            {recipe.minutes && !recipe.seconds ? (
              <>
                <p>Time</p>
                <ItemDiv>
                  <IoTimerOutline />
                  <P>{recipe.minutes}m</P>
                </ItemDiv>
              </>
            ) : null}
            {!recipe.minutes && recipe.seconds ? (
              <>
                <p>Time</p>
                <ItemDiv>
                  <IoTimerOutline />
                  <P>0m</P>
                  <P>{recipe.seconds}s</P>
                </ItemDiv>
              </>
            ) : null}
          </LeftDiv>
          <RightDiv>
            {recipe.notes && (
              <>
                <p>Notes</p>
                <ItemDiv>
                  <span>
                    <VscNote />
                  </span>
                  <P>{recipe.notes}</P>
                </ItemDiv>
              </>
            )}

            {recipe.comments && (
              <>
                <p>Comments</p>
                <ItemDiv>
                  <span>
                    <MdComment />
                  </span>
                  <P>{recipe.comments}</P>
                </ItemDiv>
              </>
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
  background-color: ${COLORS.darkTransparentTwo};
  padding: 0 20px 10px;

  border-radius: 0 0 15px 15px;

  color: white;
`;

const LeftDiv = styled.div`
  width: 50%;
  margin: 1rem;
`;

const ItemDiv = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;

  margin-bottom: 1rem;
  margin-top: 0.2rem;
  border-radius: 5px;
  padding: 5px;
  font-size: 1.3rem;

  color: white;
  background-color: ${COLORS.feldgrauDark};
`;

const RightDiv = styled(LeftDiv)`
  border: none;
  padding-right: 0;
`;
