const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bio: { type: String, maxlength: 500 },
  profilePicture: { url: String, filename: String },
  socialLinks: {
    linkedin: String,
    github: String,
    twitter: String,
    website: String,
  },
  location: { city: String, state: String, country: String },
  dateOfBirth: { type: Date },
  phoneNumber: { type: String },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], default: 'Other' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Profile', profileSchema);
