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
  const { origin } = req.body;

  console.log(req.params);
  // console.log(origin);

  if (!origin) {
    res.status(400).json({
      status: 400,
      data: req.body,
      message: "Only update id and origin",
    });
    return;
  }

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db(dbName);
  const dbOrigins = db.collection("Origins");

  try {
    const query = { _id };
    const newValues = { $set: { origin } };

    const updatedOrigin = await dbOrigins.updateOne(query, newValues);

    res.status(201).json({ status: 201, origin: updatedOrigin });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
  client.close();
};

module.exports = {
  allOrigins,
  singleOrigin,
  createOneOrigin,
  updateOrigin,
};
