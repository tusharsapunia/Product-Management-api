import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

async function dbconnect() {
  await client.connect();
  const db = client.db("Product-Management");
  return db.collection("Products");
}

export default dbconnect;
