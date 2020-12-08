import React from "react";
import styled from "styled-components";
import { NewRecipeForm } from "../../components/recipes/form/NewRecipeForm";
import { SingleRecipe } from "../../components/recipes/single-recipe/SingleRecipe";
import { COLORS } from "../../constants";

export const MyRecipesPage = () => {
  return (
    <>
      <NewRecipeForm />
      <SingleRecipeDiv>
        <SingleRecipe />
      </SingleRecipeDiv>
    </>
  );
};

const SingleRecipeDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
