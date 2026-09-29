import express from "express";
import { ObjectId } from "mongodb";
const router = express.Router();
import dbconnect from "../db.js";

router.get("/productsDelete/:id", async (req, resp) => {
  const collection = await dbconnect();
  const result = await collection.deleteOne({
    _id: new ObjectId(req.params.id),
  });
  if (result.deletedCount > 0) {
    resp.send({
      message: "Record Delete",
      success: true,
    });
  } else {
    resp.send({
      message: "Record Not Delete",
      success: false,
    });
  }
});

export default router;
