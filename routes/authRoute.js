const express = require("express");
const { createUser, loginUserController, getaUser, getallUser, deleteaUser } = require("../controller/userController");
const router = express.Router();
router.post("/register", createUser);
router.post("/login", loginUserController);
router.get("/all-users", getallUser);
router.get("/:id", getaUser);
router.delete("/:id", deleteaUser);
module.exports = router;