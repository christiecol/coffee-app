const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbName = "CoffeeApp";

const addFavourite = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  const { email, recipeId } = req.body;
  console.log("email recipe addFavourite", email, recipeId);
  await client.connect();

  const db = client.db(dbName);
  const dbUsers = db.collection("Users");

  try {
    const query = { email: email };
    const addValue = { $push: { favourite: recipeId } };

    await dbUsers
      .find({ email: email, favourite: { $in: [recipeId] } })
      .count();

    let actionType = null;

    await dbUsers.updateOne(query, addValue);
    // actionType = "ADD_TO_FAVOURITES";

    res.status(200).json({
      status: 200,
      //   , actionType
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const removeFavourite = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  const { email, recipeId } = req.body;
  console.log("email recipe removefavourite", email, recipeId);
  await client.connect();

  const db = client.db(dbName);
  const dbUsers = db.collection("Users");

  try {
    const query = { email: email };
    const removeValue = { $pull: { favourite: recipeId } };

    await dbUsers
      .find({ email: email, favourite: { $in: [recipeId] } })
      .count();

    // let actionType = null;

    await dbUsers.updateOne(query, removeValue);
    // actionType = "REMOVE_FROM_FAVOURITES";
    // console.log(actionType);

    res.status(200).json({
      status: 200,
      //   , actionType
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  addFavourite,
  removeFavourite,
};
