import { Router } from "express";
import { marco, ping, root } from "../controllers/index.controllers.js";

const router = Router();

router.get("/", root);
router.get("/marco", marco);
router.get("/ping", ping);

export default router;