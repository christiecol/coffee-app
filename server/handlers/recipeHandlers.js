const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbName = "CoffeeApp";

const allRecipes = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db(dbName);
  const dbRecipes = db.collection("Recipes");

  try {
    const allRecipes = await dbRecipes.find().toArray();
    res.status(200).json({ status: 200, recipes: allRecipes });
  } catch (error) {
    res.status(404).json({ status: 404, message: error.message });
  }
  client.close();
};

const singleRecipe = async (req, res) => {
  const _id = req.params._id;

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db(dbName);
  const dbRecipes = db.collection("Recipes");

  try {
    const oneRecipe = await dbRecipes.findOne({ _id });
    res.status(200).json({ status: 200, recipe: oneRecipe });
  } catch (error) {
    res.status(404).json({ status: 404, message: error.message });
  }
  client.close();
};

const createOneRecipe = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  const {
    origin,
    roaster,
    name,
    brewMethod,
    grindSize,
    gramsOfWater,
    minutes,
    seconds,
    tastingNotes,
    comments,
  } = req.body;

  console.log(req.body);
  await client.connect();

  const db = client.db(dbName);
  const dbRecipes = db.collection("Recipes");

  try {
    await dbRecipes.insertOne(req.body);
    res.status(201).json({ status: 201, recipe: req.body });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
  client.close();
};

const updateRecipe = async (req, res) => {
  const { _id } = req.params;
  const {} = req.body;

  console.log(req.params);

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db(dbName);
  const dbRecipes = db.collection("Recipes");

  try {
    const query = { _id };
    let newValues = {};

    if (origin && img) {
      newValues = { $set: { origin, img } };
    } else if (img && !origin) {
      newValues = { $set: { img } };
    } else if (origin && !img) {
      newValues = { $set: { origin } };
    }

    const updatedData = await dbRecipes.updateOne(query, newValues);
    console.log(updatedData);

    res.status(201).json({ status: 201, data: updatedData });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
    console.log(error.message);
  }
  client.close();
};

module.exports = {
  allRecipes,
  singleRecipe,
  createOneRecipe,
  updateRecipe,
};
