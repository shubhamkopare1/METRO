const Profile = require("../models/Profile");
const User = require("../models/User");

// Get Profile by User ID
exports.getProfile = async (req, res) => {
  try {
    const profile = await User.findOne({ _id: req.user.id }); // Find profile by user ID
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Create or Update Profile
exports.upsertProfile = async (req, res) => {
  try {
    const { bio } = req.body;

    // Find profile by user ID and update it, or create a new one if not found
    const profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { bio, user: req.user.id },
      { new: true, upsert: true }
    );

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
