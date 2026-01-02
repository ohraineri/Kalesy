import Router from "express";
import cartRouter from "./cart.router.ts";

const router = Router();

router.use("/cart", cartRouter);

export default router;

