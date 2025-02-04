import express from "express";

const router = express.Router();

router.post("/", createProduct)
router.delete("/:id", deleteProduct)
router.put("/:id", updateProduct)
router.get("/", getProducts)

export default router;
