import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { IconContext } from "react-icons";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { COLORS } from "../../../constants";

import {
  addToFavourites,
  removeFromFavourites,
} from "../../../redux/actions/actions";

import { getUser } from "../../../redux/reducers/UsersReducer";

export const RecipeFavouriteButton = ({ recipe }) => {
  const [toggle, setToggle] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [recipeId, setRecipeId] = useState("");

  const state = useSelector(getUser);

  console.log(state);
  const dispatch = useDispatch();

  // const handleToggleFavourite = () => {
  //   dispatch(addToFavourites(recipe));
  // };

  // const handleToggleUnfavourite = () => {
  //   dispatch(removeFromFavourites(recipe));
  // };

  const handleFavouriteRecipe = () => {
    setToggle(!toggle);

    fetch("/addfavourite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currentUserEmail,
        recipeId,
      }),
    })
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        setRecipeId(recipe._id);
        // setCurrentUserEmail(getUser);
        return {
          recipeId,
          email: currentUserEmail,
          status: res.status,
          ...res.json(),
        };
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <IconContext.Provider value={{ size: "1.7rem" }}>
        <HeaderDiv>
          <div>
            <DropdownSelector>
              <IconButton
                value={(currentUserEmail, recipeId)}
                onClick={() => {
                  handleFavouriteRecipe();
                }}
              >
                {!toggle ? <MdFavoriteBorder /> : <MdFavorite />}
              </IconButton>
            </DropdownSelector>
          </div>
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
const IconButton = styled.button`
  all: unset;
`;

const DropdownSelector = styled.div`
  display: flex;
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 80vw;
  padding-top: 0.5rem;

  background-color: ${COLORS.cultured};
`;
