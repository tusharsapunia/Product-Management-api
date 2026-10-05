import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://tusharsapunia:Password@cluster0.w8os3fl.mongodb.net/?appName=Cluster0",
);

async function dbconnect() {
  await client.connect();
  // const db = client.db("Product-Management");
  const db = client.db("product-management");
  return db.collection("products");
}

export default dbconnect;
