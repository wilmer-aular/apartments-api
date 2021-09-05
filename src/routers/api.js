import { Router } from "express";
import apartmentsRouter from "./apartmentsrouter";
import userRouter from "./user.router";
import authRouter from "./auth.router";

const router = Router();

router.use("/apartments", apartmentsRouter);
router.use("/auth", authRouter);
router.use("/user", userRouter);

export default router;
