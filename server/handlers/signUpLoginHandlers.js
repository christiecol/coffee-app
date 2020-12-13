const { MongoClient, ObjectId } = require("mongodb");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbName = "CoffeeApp";

const signUp = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  const { email, firstPassword, password } = req.body;

  await client.connect();

  if (!!!email || !!!password) {
    res.status(400).json({ message: "Missing required fields" });
  }

  if (password != firstPassword) {
    res.status(400).json({ message: "passwords do not match" });
  }

  if (!email.toLowerCase().includes("@")) {
    res.status(400).json({ message: "invalied email" });
  }

  const db = client.db(dbName);
  const dbUsers = db.collection("Users");

  try {
    const userFromDb = await dbUsers.findOne({ email });

    if (userFromDb) {
      res.status(400).json({ err: "user already exists" });
    }

    const hash = await bcrypt.hash(password, 8);

    const savedDoc = await dbUsers.insertOne({ email, password: hash });

    console.log(savedDoc);

    const [user] = savedDoc.ops;

    jwt.sign(
      { _id: user._id, email: user.email },
      secret,
      function (err, token) {
        if (err) {
          res.status(500).send({ error: err.message });
        }
        res
          .status(201)
          .json({ email, _id: user._id, token, status: "success" });
      }
    );
  } catch (err) {
    res.status(500).json({ err });
  }
  client.close();
};

const logIn = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  const { email, password } = req.body;
  console.log(email, password);
  await client.connect();

  if (!!!email || !!!password) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  const db = client.db(dbName);
  const dbUsers = db.collection("Users");

  try {
    const userFromDb = await dbUsers.findOne({ email });

    const passwordCheck = await bcrypt.compare(password, userFromDb.password);

    if (!passwordCheck) {
      res.status(400).json({ message: "invalid credentials" });
      return;
    }
    jwt.sign({ _id: userFromDb._id }, secret, function (err, token) {
      if (err) {
        res.status(500).send({ error: err.message });
      }
      res
        .status(200)
        .json({ email: userFromDb.email, _id: userFromDb._id, token });
    });

    console.log(passwordCheck);
  } catch (error) {
    res.status(500).json({ error });
  }
  client.close();
};

const addFavourite = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  const { email, recipeId } = req.body;

  await client.connect();

  const db = client.db(dbName);
  const dbUsers = db.collection("Users");

  try {
    const query = { id: email };
    const newValue = { $push: { favourite: recipeId } };

    await dbUsers.updateOne(query, newValue);

    res.status(200).json({ status: 200 });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  signUp,
  logIn,
  addFavourite,
};
