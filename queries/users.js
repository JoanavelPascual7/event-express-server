const db = require("../db/dbConfig.js");

// GET all users
async function getAllUsers() {
  try {
    const users = await db.any("SELECT * FROM users");
    return users;
  } catch (error) {
    throw error;
  }
}

// GET a single user by ID
async function getUserById(userId) {
  try {
    const user = await db.one("SELECT * FROM users WHERE id = $1", userId);
    return user;
  } catch (error) {
    throw error;
  }
}

// POST a new user
async function createUser(userData) {
  const { username, verified, admin } = userData;
  try {
    const newUser = await db.one(
      "INSERT INTO users (username, verified, admin) VALUES ($1, $2, $3) RETURNING *",
      [username, verified, admin]
    );
    return newUser;
  } catch (error) {
    throw error;
  }
}

// PUT/update a user by ID
async function updateUser(userId, userData) {
  const { username, verified, admin } = userData;
  try {
    const updatedUser = await db.one(
      "UPDATE users SET username = $1, verified = $2, admin = $3 WHERE id = $4 RETURNING *",
      [username, verified, admin, userId]
    );
    return updatedUser;
  } catch (error) {
    throw error;
  }
}

// DELETE a user by ID
async function deleteUser(userId) {
  try {
    await db.none("DELETE FROM users WHERE id = $1", userId);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
