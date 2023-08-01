import { MongoClient } from "mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
     
      client = await MongoClient.connect(
        // "mongodb+srv://ParsaChavoshi:490118241@cluster0.w7q66oa.mongodb.net/?retryWrites=true&w=majority"
        "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.2"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db("blog-parsa");

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message!", body: newMessage });
  }
};
