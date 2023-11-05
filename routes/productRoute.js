
const express = require("express");
const router = express.Router();

// Import the createProduct function if it's defined in a separate module.
const { createProduct, getaProduct, getAllProduct, updateProduct, deleteProduct } = require("../controller/productConstroller");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management APIs
 */

/**
 * @swagger
 * /api/productauth:
 *   post:
 *     summary: Create a new product
 *     description: Create a new product with the provided information.
 *     tags: [Products]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Product created successfully.
 *       401:
 *         description: Unauthorized or product creation failed.
 */

/**
 * @swagger
 * /api/productauth/{id}:
 *   get:
 *     summary: Get a product by ID
 *     description: Get a product by its unique identifier.
 *     tags: [Products]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product retrieved successfully.
 *       401:
 *         description: Unauthorized or product not found.
 */

/**
 * @swagger
 * /api/productauth/{id}:
 *   put:
 *     summary: Update a product by ID
 *     description: Update a product with the provided information.
 *     tags: [Products]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *       401:
 *         description: Unauthorized or product update failed.
 */

/**
 * @swagger
 * /api/productauth/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     description: Delete a product by its unique identifier.
 *     tags: [Products]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Product deleted successfully.
 *       401:
 *         description: Unauthorized or product delete failed.
 */

/**
 * @swagger
 * /api/productauth:
 *   get:
 *     summary: Get all products
 *     description: Get a list of all products.
 *     tags: [Products]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of products retrieved successfully.
 *       401:
 *         description: Unauthorized or product retrieval failed.
 */
router.post("/", authMiddleware, isAdmin, createProduct);
router.get("/:id", getaProduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.get("/", getAllProduct);

module.exports = router;
