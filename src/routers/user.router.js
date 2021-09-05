import { Router } from "express";
import userControllers from "../controllers/user.controller";
import { verifyToken, IsAdmin } from "../middlewares/authorization";
import { checkRoles, checkUser } from "../middlewares/validation";

const router = Router();

router.get("/all", [verifyToken, IsAdmin], userControllers.all);
router.post("/create", [checkRoles, checkUser], userControllers.create);

export default router;
