const express = require("express");
const session = require("express-session");
const passport = require("passport");

const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// import { userRoutes, sessionRoutes } from "./routes/index";

const { signUp, logIn, logOut } = require("./handlers/signUpLoginHandlers");

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

// const PORT = process.env.PORT;
// const SESS_LIFETIME = process.env.SESS_LIFETIME

const { PORT, SESS_LIFETIME, SESS_NAME, SESS_SECRET } = process.env;

const sessionAuth = {
  name: SESS_NAME,
  resave: false,
  saveUninitialized: false,
  secret: SESS_SECRET,
  cookie: {
    // maxAge: SESS_LIFETIME,
    sameSite: true,
  },
};

const app = express();

// make it harder to see that express is running the app
app.disable("x-powered-by");

app

  .use(morgan("tiny"))

  .use(express.static("assets"))

  .use(bodyParser.json())

  .use(bodyParser.urlencoded({ extended: true }))

  .use(session(sessionAuth))

  .use(cookieParser(SESS_SECRET))

  .use(passport.initialize())

  .use(passport.session())

  // endpoints
  //-----------------------
  // user (userRoutes)
  // .post("", userRoutes)
  // signup
  .post("/signup", signUp)

  //login
  .post("/login", logIn)

  //logout
  .get("/logout", logOut)

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
