const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");

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
} = require("./handlers/recipeHandlers");

const PORT = 8000;

const app = express();

app
  // .use(helmet())

  .use(morgan("tiny"))

  .use(express.static("assets"))

  .use(bodyParser.json())

  // RESTful endpoints
  //-----------------------
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

  //-----------------------

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(PORT, () => console.info(`App listening on port ${PORT}`));
