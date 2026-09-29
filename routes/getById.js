import express from "express";
import { ObjectId } from "mongodb";
const router = express.Router();
import dbconnect from "../db.js";

router.get("/get/:id", async (req, resp) => {
  const collection = await dbconnect();
  const result = await collection.findOne({ _id: new ObjectId(req.params.id) });
  console.log(result);
  resp.send({ message: "Record Found", result: result });
});

export default router;
