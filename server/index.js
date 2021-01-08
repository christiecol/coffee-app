const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// import { userRoutes, sessionRoutes } from "./routes/index";

const { signUp, logIn } = require("./handlers/signUpLoginHandlers");

const {
  allOrigins,
  singleOrigin,
  createOneOrigin,
  updateOrigin,
} = require("./handlers/originHandlers");

const {
  allRecipes,
  singleRecipe,
  createOneRecipe,
  updateRecipe,
  deleteRecipe,
} = require("./handlers/recipeHandlers");
const {
  removeFavourite,
  addFavourite,
} = require("./handlers/favouritesHandlers");

const PORT = process.env.PORT;

const app = express();

// make it harder to see that express is running the app
app.disable("x-powered-by");

app

  .use(morgan("tiny"))

  .use(express.static("assets"))

  .use(bodyParser.json())

  // endpoints
  //-----------------------
  // user (userRoutes)
  // .post("", userRoutes)
  // signup
  .post("/signup", signUp)

  //login
  .post("/login", logIn)

  //origins
  // get all
  .get("/api/origins", allOrigins)

  //get one
  .get("/api/origins/:_id", singleOrigin)

  //post one
  .post("/api/origins", createOneOrigin)

  //update data
  .put("/api/origins/:_id", updateOrigin)

  //recipe
  // get all
  .get("/api/recipes", allRecipes)

  //get one
  .get("/api/recipes/:_id", singleRecipe)

  //post one
  .post("/api/recipes", createOneRecipe)

  //update data
  .put("/api/recipes/:_id", updateRecipe)

  //delete data
  .delete("/api/recipes/:_id", deleteRecipe)

  // favourites
  //add a favourite
  .post("/addfavourite", addFavourite)
  .post("/removefavourite", removeFavourite)
  //-----------------------

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(PORT, () => console.info(`App listening on port ${PORT}`));
