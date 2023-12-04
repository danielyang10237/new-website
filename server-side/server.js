const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 8000;
const uri =
  "mongodb+srv://dy92634:vAwmin-weqrov-pidsa2@websitecomments.kmsvtiw.mongodb.net/?retryWrites=true&w=majority";
const database_name = "personal_website";

let commentList;

async function connectToDatabase() {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db(database_name);

    let collectionNames = await database.listCollections().toArray();

    // console.log("collection names", collectionNames);

    if (!collectionNames.some((coll) => coll.name === "comments")) {
      console.log("Creating collection");
      await database.createCollection("comments");
    }

    commentList = database.collection("comments");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.get("/api/comments", async (req, res) => {
  console.log("get comments");
  try {
    const comments = await commentList.find().toArray();
    // console.log(comments);
    res.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Error fetching comments" });
  }
});

app.post("/api/comments", async (req, res) => {
  try {
    const { name, text } = req.body;

    const timePosted = new Date();
    const newComment = {
      username: name,
      text: text,
      time: timePosted,
    };

    await commentList.insertOne(newComment);
    res.json({ success: true });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Error adding comment" });
  }
});

app.all("/api/*", (req, res) => {
  res
    .status(404)
    .json({ error: `Endpoint not found: ${req.method} ${req.url}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToDatabase();
});
