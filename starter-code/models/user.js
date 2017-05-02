/*jshint esversion: 6*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  username: String,
 password: String,
  role: {
    type: String,
    enum : ['TA', 'DEVELOPER', 'BOSS', 'STUDENT'],
  },
  facebookId: Number,
  name: String
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
