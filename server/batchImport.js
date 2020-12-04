const { MongoClient } = require("mongodb");
const assert = require("assert");
const fs = require("file-system");

const origins = require("./data/origins.json");
// const origins = JSON.parse(fs.readFileSync("data/origins.json"));

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  const client = await MongoClient(MONGO_URI, options);
  console.log(MONGO_URI);
  const dbName = "CoffeeApp";
  try {
    await client.connect();

    const db = client.db(dbName);

    const result = await db.collection("Origins").insertMany(origins);
    console.log({ status: 201, data: result });
  } catch (error) {
    console.log({ status: 500, message: error.message });
  }
  client.close();
};

batchImport();
