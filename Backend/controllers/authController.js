const User = require('../models/User');
const { v4: uuidv4 } = require('uuid')
const { generateToken } = require('../utils/jwtUtils');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const newUser = new User({ name, email, password ,uuid: uuidv4() }); 
await newUser.save();
    const token = generateToken(newUser.uuid);

    res.status(201).json({ message: "User registered successfully.", token });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = generateToken(user.uuid);
    res.status(200).json({ message: "Login successful.", token });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};
