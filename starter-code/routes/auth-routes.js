/*jshint esversion: 6*/
const express     = require("express");
const authRoutes  = express.Router();
const passport    = require("passport");
const ensureLogin = require("connect-ensure-login");
const auth        = require("../helpers/auth");
// User model
const User        = require("../models/user");
const addUser     = require("../helpers/adduser");

// Bcrypt to encrypt passwords
const bcrypt     = require("bcrypt");
const bcryptSalt = 10;
