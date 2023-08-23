const express = require("express");
const router = express.Router();
const userQueries = require("../queries/users");

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await userQueries.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET a single user by ID
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userQueries.getUserById(userId);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST a new user
router.post("/", async (req, res) => {
  const userData = req.body;
  try {
    const newUser = await userQueries.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// PUT/update a user by ID
router.put("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const userData = req.body;
  try {
    const updatedUser = await userQueries.updateUser(userId, userData);
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE a user by ID
router.delete("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    await userQueries.deleteUser(userId);
    res.status(204).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
