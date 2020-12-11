import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { IconContext } from "react-icons";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { COLORS } from "../../../constants";

import {
  addToFavourites,
  removeFromFavourites,
} from "../../../redux/actions/actions";

export const RecipeFavouriteButton = ({ recipe }) => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const handleToggleFavourite = () => {
    setToggle(!toggle);
    dispatch(addToFavourites(recipe));
  };

  const handleToggleUnfavourite = () => {
    dispatch(removeFromFavourites(recipe));
  };

  return (
    <>
      <IconContext.Provider value={{ size: "1.7rem" }}>
        <HeaderDiv>
          <div>
            <DropdownSelector>
              <IconButton
                onClick={() => {
                  handleToggleFavourite();
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
