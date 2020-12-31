import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../../constants";
import { NewRecipeFormContent } from "./NewRecipeFormContent";

export const NewRecipeForm = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    return toggle;
  };

  return (
    <>
      <FormDiv>
        {!toggle ? (
          <Button onClick={() => handleToggle()}>+ Create A New Recipe</Button>
        ) : (
          <Button onClick={() => handleToggle()}>- Create A New Recipe</Button>
        )}

        {toggle ? <NewRecipeFormContent /> : null}
      </FormDiv>
    </>
  );
};

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  all: unset;
  font-weight: bold;
  font-size: 1.3rem;
  color: ${COLORS.blackCoffee};
  padding: 10px 20px;
  margin: 2rem 0 0;
  border-radius: 20px;
  cursor: pointer;

  background-color: ${COLORS.cultured};

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #3a97f9;
    outline: 2px dotted transparent;
    outline-offset: 2px;
  }
`;
