import { Router } from "express";
import apartmentsCtrl from "../controllers/apartments.controller";
import { verifyToken, IsAdmin } from "../middlewares/authorization";

const router = Router();

router.get("/all", verifyToken, apartmentsCtrl.all);
router.get("/:id", verifyToken, apartmentsCtrl.byId);
router.post("/create", verifyToken, apartmentsCtrl.create);
router.delete("/:id", [verifyToken, IsAdmin], apartmentsCtrl.delete);
router.put("/:id", [verifyToken], apartmentsCtrl.update);

export default router;
