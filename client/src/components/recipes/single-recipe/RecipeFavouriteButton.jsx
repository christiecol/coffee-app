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
  const currentUserEmail = useSelector(getUser);
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  const favourites = useSelector((state) => {
    return state?.users?.user?.favourites;
  });

  const handleFavouriteRecipe = () => {
    if (!toggle) {
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
          dispatch(addToFavourites(recipe._id));
        });
    } else {
      fetch("/removefavourite", {
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

          dispatch(removeFromFavourites(recipe._id));
        });
    }
  };

  return (
    <>
      <IconContext.Provider value={{ size: "1.7rem" }}>
        <HeaderDiv>
          <div>
            <DropdownSelector>
              <IconButton
                aria-label="favourite recipe"
                value={(currentUserEmail, recipe._id)}
                onClick={() => {
                  setToggle(!toggle);
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
  padding: 3px 0;

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

  color: white;
  /* background-color: ${COLORS.darkTransparentTwo}; */

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #3a97f9;
    outline: 2px dotted transparent;
    outline-offset: 2px;
  }
`;
