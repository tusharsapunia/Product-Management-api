import express from "express";
import { ObjectId } from "mongodb";
const router = express.Router();
import dbconnect from "../db.js";

router.put("/products/:id", async (req, resp) => {
  const collection = await dbconnect();
  const id = req.params.id;
  const newData = req.body;

  if (!ObjectId.isValid(id)) {
    return resp.status(400).json({ error: "Invalid Product id!" });
  }
  if (!Object.keys(newData).length === 0) {
    return resp.status(400).json({ error: "Request Body Cannot be Empty!" });
  }
  const { name, description, price, stock, category, status } = req.body;
  if (!name || !description || !price || !stock | !category || !status) {
    resp.send({ message: "Operation failed ! plz fill all data" });
    return false;
  }
  const result = await collection.replaceOne(
    { _id: new ObjectId(id) },
    newData,
  );

  if (result.matchedCount === 1) {
    resp.json({ message: "Record Update" });
  } else {
    resp.status(400).json({ error: "Record Not Found" });
  }
});

export default router;
