import React from "react";
import styled from "styled-components";

import { FetchRecipes } from "../../components/recipes/FetchRecipes";
import { NewRecipeForm } from "../../components/recipes/form/NewRecipeForm";
import { SingleRecipeButton } from "../../components/recipes/single-recipe/SingleRecipeButton";

export const MyRecipesPage = () => {
  return (
    <>
      <FetchRecipes />
      <NewRecipeForm />
      <SingleRecipeDiv>
        <SingleRecipeButton />
      </SingleRecipeDiv>
    </>
  );
};

const SingleRecipeDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
