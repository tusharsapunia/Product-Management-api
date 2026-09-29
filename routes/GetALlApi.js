import express from "express";
const router = express.Router();
import dbconnect from "../db.js";

router.get("/get/All", async (req, resp) => {
  const collection = await dbconnect();
  const result = await collection.find().toArray();
  console.log(result);
  resp.send(result);
});

export default router;
