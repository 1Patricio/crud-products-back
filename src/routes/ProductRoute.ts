import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

const router = Router();

router.get("/", ProductController.get);
router.get("/:id", ProductController.getById);
router.post("/", ProductController.create);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);

export default router;