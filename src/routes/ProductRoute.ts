import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import authenticate from "../middleware/Auth";

const router = Router();

router.get("/", authenticate, ProductController.get);
router.get("/:id", authenticate, ProductController.getById);
router.post("/", authenticate, ProductController.create);
router.put("/:id", authenticate, ProductController.update);
router.delete("/:id", authenticate, ProductController.delete);

export default router;