import express from "express";
const router = express.Router();
import dbconnect from "../db.js";

router.post("/create", async (req, resp) => {
  const { name, description, price, stock, category, status } = req.body;
  if (!name || !description || !price || !stock | !category || !status) {
    resp.send({ message: "Operation failed ! plz fill all data" });
    return false;
  }
  if (Number(price) < 0) {
    resp.send({ message: "Operation failed ! plz Enter Valid Price" });

    return;
  }
  const collection = await dbconnect();
  const result = await collection.insertOne(req.body);
  console.log(result);
  resp.send({ message: result });
});

export default router;
