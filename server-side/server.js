import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

export const mongo_uri = process.env.MONGO_URI;
const database_name = "personal_website";

let commentList;
let client;

async function connectToDatabase() {
  try {
    if (!mongo_uri) {
      console.error("MONGO_URI environment variable is not set");
      return false;
    }

    client = new MongoClient(mongo_uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    await client.connect();
    console.log("Connected to MongoDB successfully");

    const database = client.db(database_name);
    const collectionNames = await database.listCollections().toArray();

    if (!collectionNames.some((coll) => coll.name === "comments")) {
      await database.createCollection("comments");
    }

    commentList = database.collection("comments");
    return true;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    return false;
  }
}

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.get("/api/comments", async (req, res) => {
  console.log("➡️ GET /api/comments");
  try {
    const comments = await commentList.find().toArray();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Error fetching comments" });
  }
});

app.post("/api/comments", async (req, res) => {
  try {
    const { name, text } = req.body;
    const newComment = {
      username: name,
      text,
      time: new Date(),
    };

    await commentList.insertOne(newComment);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Error adding comment" });
  }
});

app.all("/api/*", (req, res) => {
  res.status(404).json({
    error: `Endpoint not found: ${req.method} ${req.url}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectToDatabase();
});