const express = require("express");
const { getProfile, upsertProfile } = require("../controllers/profileController");
const authenticate = require("../middlewares/authMiddleware");

const router = express.Router();

// Get profile
router.get("/", authenticate, getProfile);

// Create or update profile
router.post("/", authenticate, upsertProfile);

module.exports = router;
