import React, { useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { getRecipe } from "../../redux/reducers/RecipesReducer";

import { FetchRecipes } from "../../components/recipes/FetchRecipes";
import { NewRecipeForm } from "../../components/recipes/form/NewRecipeForm";
import { SearchBar } from "../../components/recipes/search-bar/SearchBar";
import { RecipeButtons } from "../../components/recipes/single-recipe/RecipeButtons";
import Beans from "../../images/nordwood-themes-ivP3TYdLvw0-unsplash.jpg";

export const MyRecipesPage = () => {
  let recipes = useSelector(getRecipe);

  const [input, setInput] = useState("");
  const [favourites, setFavourites] = useState([]);

  const addFavouriteRecipe = (recipe) => {
    const newFavouriteRecipes = [...favourites, recipe];
    setFavourites(newFavouriteRecipes);
  };

  recipes = recipes.recipe.filter((recipe) => {
    const name = recipe.name;
    const origin = recipe.origin;
    const roaster = recipe.roaster;
    const brewMethod = recipe.brewMethod;
    const notes = recipe.notes;

    if (
      name.toLowerCase().includes(input.toLowerCase()) ||
      origin.toLowerCase().includes(input.toLowerCase()) ||
      roaster.toLowerCase().includes(input.toLowerCase()) ||
      brewMethod.toLowerCase().includes(input.toLowerCase()) ||
      notes.toLowerCase().includes(input.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  return (
    <Wrapper>
      <FetchRecipes />
      <SearchBar input={input} setInput={setInput} />
      <NewRecipeForm />
      <SingleRecipeDiv>
        <RecipeButtons
          recipes={recipes}
          handleFavouritesClick={addFavouriteRecipe}
        />
      </SingleRecipeDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${Beans});
  background-size: contain;
  overflow: hidden;
  z-index: -1000;
`;

const SingleRecipeDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
