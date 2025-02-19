// server/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = require("../models/User");
const authMiddleware = require("../middlewares/authMiddleware");

// Set up the email transporter (using Gmail here)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// 1. POST /api/auth/request-access
// User requests access (if not yet registered)
router.post("/request-access", async (req, res) => {
  const { name, email } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Send email to admin with approval link
    const approvalLink = `${process.env.BACKEND_URL}/api/auth/approve-user?email=${encodeURIComponent(email)}`;
    await transporter.sendMail({
      from: `"Admin" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Signup Request",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Click <a href="${approvalLink}">here</a> to approve this user.</p>`,
    });

    res.status(200).json({ message: "Request sent to admin" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending request" });
  }
});

// 2. GET /api/auth/approve-user
// Admin approves the user (from email link)
router.get("/approve-user", async (req, res) => {
  const { email } = req.query;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      // If user doesn't exist, create a record with isApproved true.
      user = new User({ email, isApproved: true, name: "User" });
      await user.save();
    } else {
      user.isApproved = true;
      await user.save();
    }

    // Email the user to sign up
    const signupLink = `${process.env.FRONTEND_URL}/signup?email=${encodeURIComponent(email)}`; 
    await transporter.sendMail({
      from: `"Admin" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Approval Granted",
      html: `<p>Your signup is approved!</p>
             <p>Click <a href="${signupLink}">here</a> to sign up.</p>`,
    });

    res.send("User approved and email sent.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error approving user");
  }
});

// 3. POST /api/auth/signup
// Approved user signs up by setting a password
router.post("/signup", async (req, res) => {
  // Added "image" to the destructuring
  const { name, email, password, image } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user || !user.isApproved)
      return res.status(403).json({ message: "User not approved by admin" });

    const hashed = await bcrypt.hash(password, 10);
    user.name = name;
    user.password = hashed;
    if (image) {
      user.image = image;
    }
    await user.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Signup failed" });
  }
});

// 4. POST /api/auth/login
// User logs in to get a JWT token
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !user.password)
      return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Create JWT token (expires in 1 day)
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed" });
  }
});

// 5. GET /api/auth/me
// Protected route to get current user info
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user data" });
  }
});

module.exports = router;
