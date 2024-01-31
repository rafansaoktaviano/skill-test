import express from "express";

const router = express.Router();

import countController from "../controllers/countController";

router.get("/", countController.totalCountOrder);

export default router;
