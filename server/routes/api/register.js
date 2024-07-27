const express = require("express");
const router = express.Router();
const User = require("../../models/User"); // Adjust path as needed

router.post("/", async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    // Create a new user
    const newUser = new User({ name, email, password, phone });

    // Save user to database
    await newUser.save();

    res
      .status(200)
      .json({
        msg: "User registered successfully",
        user: { name, email, phone },
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
