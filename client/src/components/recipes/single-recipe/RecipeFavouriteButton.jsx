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

//user selector
import { getUser } from "../../../redux/reducers/UsersReducer";

export const RecipeFavouriteButton = ({ recipe }) => {
  const [toggle, setToggle] = useState(false);

  const currentUserEmail = useSelector(getUser);
  const favourites = useSelector((state) => {
    return state?.users?.favourites;
  });
  console.log(favourites);
  console.log("currentemail", currentUserEmail);
  const dispatch = useDispatch();
  const colored = favourites?.includes(recipe._id);

  const handleFavouriteRecipe = () => {
    setToggle(!toggle);

    fetch("/addfavourite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: currentUserEmail,
        recipeId: recipe._id,
      }),
    })
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.actionType === "ADD_TO_FAVOURITES") {
          console.log("hello");
          dispatch(addToFavourites(recipe._id));
        }
        if (res.actionType === "REMOVE_FROM_FAVOURITES") {
          dispatch(removeFromFavourites(recipe._id));
        }
      });
  };
  // console.log(recipeId);
  return (
    <>
      <IconContext.Provider value={{ size: "1.7rem" }}>
        <HeaderDiv>
          <div>
            <DropdownSelector>
              <IconButton
                value={(currentUserEmail, recipe._id)}
                onClick={() => {
                  handleFavouriteRecipe();
                }}
              >
                {!colored ? <MdFavoriteBorder /> : <MdFavorite />}
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

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #3a97f9;
    outline: 2px dotted transparent;
    outline-offset: 2px;
  }
`;

const DropdownSelector = styled.div`
  display: flex;
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 80vw;
  padding-top: 0.5rem;

  color: white;
  background-color: ${COLORS.darkTransparentTwo};

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #3a97f9;
    outline: 2px dotted transparent;
    outline-offset: 2px;
  }
`;
