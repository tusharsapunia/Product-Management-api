import express from "express";
const router = express.Router();
import getAll from "./GetALlApi.js";
import createNew from "./PostApi.js";
import findOne from "./getById.js";
import Delete from "./deleteapi.js";
import put from "./putApi.js";
import patch from "./patchApi.js";

router.use("/", getAll);
router.use("/", createNew);
router.use("/", findOne);
router.use("/", Delete);
router.use("/", put);
router.use("/", patch);

export default router;


