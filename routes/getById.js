import express from "express";
import { ObjectId } from "mongodb";
const router = express.Router();
import dbconnect from "../db.js";

router.get("/products/:id", async (req, resp) => {
  const collection = await dbconnect();
  if (!(Object.id === req.params.id)) {
    resp.send({ message: "Record Not Found", result: null });
  }

  const result = await collection.findOne({ _id: new ObjectId(req.params.id) });
  console.log(result);
  resp.send({ message: "Record Found", result: result });
});

export default router;
