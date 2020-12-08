const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbName = "CoffeeApp";

const allOrigins = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db(dbName);
  const dbOrigins = db.collection("Origins");

  try {
    const allOrigins = await dbOrigins.find().toArray();
    res.status(200).json({ status: 200, origins: allOrigins });
  } catch (error) {
    res.status(404).json({ status: 404, message: error.message });
  }
  client.close();
};

const singleOrigin = async (req, res) => {
  const _id = req.params._id;

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db(dbName);
  const dbOrigins = db.collection("Origins");

  try {
    const oneOrigin = await dbOrigins.findOne({ _id });
    res.status(200).json({ status: 200, origin: oneOrigin });
  } catch (error) {
    res.status(404).json({ status: 404, message: error.message });
  }
  client.close();
};

const createOneOrigin = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db(dbName);
  const dbOrigins = db.collection("Origins");

  try {
    await dbOrigins.insertOne(req.body);
    res.status(201).json({ status: 201, origin: req.body });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
  client.close();
};

const updateOrigin = async (req, res) => {
  const { _id } = req.params;
  const { origin, img } = req.body;

  console.log(req.params);

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db(dbName);
  const dbOrigins = db.collection("Origins");

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

    const updatedData = await dbOrigins.updateOne(query, newValues);
    console.log(updatedData);

    res.status(201).json({ status: 201, data: updatedData });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
    console.log(error.message);
  }
  client.close();
};

module.exports = {
  allOrigins,
  singleOrigin,
  createOneOrigin,
  updateOrigin,
};
