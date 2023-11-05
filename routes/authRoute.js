const express = require("express");
const { createUser, loginUserController, getaUser, getallUser, deleteaUser, updateaUser, blockUser, unblockUser, handleRefreshToken, logout, updatePassword, forgotPasswordToken, resetPassword } = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();
<<<<<<< HEAD

=======
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management APIs
 */

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with the provided information.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: Bad request or user already exists.
 */

/**
 * @swagger
 * /api/user/forgot-password-token:
 *   post:
 *     summary: Request a password reset token
 *     description: Request a password reset token for the user.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password reset token sent successfully.
 *       400:
 *         description: Bad request or user not found.
 */

/**
 * @swagger
 * /api/user/password:
 *   put:
 *     summary: Update user password
 *     description: Update the password for the authenticated user.
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password updated successfully.
 *       401:
 *         description: Unauthorized or password change failed.
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Login a user
 *     description: Authenticate a user and generate a token.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User authenticated successfully.
 *       401:
 *         description: Authentication failed.
 */

/**
 * @swagger
 * /api/user/all-users:
 *   get:
 *     summary: Get all users
 *     description: Get a list of all users.
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of users retrieved successfully.
 *       401:
 *         description: Unauthorized or user retrieval failed.
 */

/**
 * @swagger
 * /api/user/refresh:
 *   get:
 *     summary: Refresh user token
 *     description: Refresh the user token.
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Token refreshed successfully.
 *       401:
 *         description: Unauthorized or token refresh failed.
 */

/**
 * @swagger
 * /api/user/logout:
 *   get:
 *     summary: Logout user
 *     description: Logout the user and invalidate the token.
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User logged out successfully.
 *       401:
 *         description: Unauthorized or logout failed.
 */

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Get a user by their unique identifier.
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User retrieved successfully.
 *       401:
 *         description: Unauthorized or user not found.
 */

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     description: Delete a user by their unique identifier.
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: User deleted successfully.
 *       401:
 *         description: Unauthorized or user not found.
 */

/**
 * @swagger
 * /api/user/edit-user:
 *   put:
 *     summary: Edit user details
 *     description: Edit user details with the provided information.
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User details updated successfully.
 *       401:
 *         description: Unauthorized or user update failed.
 */

/**
 * @swagger
 * /api/user/block-user/{id}:
 *   put:
 *     summary: Block a user by ID
 *     description: Block a user by their unique identifier.
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User blocked successfully.
 *       401:
 *         description: Unauthorized or user block failed.
 */

/**
 * @swagger
 * /api/user/unblock-user/{id}:
 *   put:
 *     summary: Unblock a user by ID
 *     description: Unblock a user by their unique identifier.
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 */
>>>>>>> 9b9e94a67d6430c2c6c5f9c327b40d915ed4dc52
router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put('/password', authMiddleware, updatePassword);
router.post("/login", loginUserController);
router.get("/all-users", getallUser);
router.get("/refresh", handleRefreshToken);
router.get('/logout', logout);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteaUser);
router.put("/edit-user", authMiddleware, updateaUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
