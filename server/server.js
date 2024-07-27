const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors()); // Enable CORS

// Define Routes
app.use("/api/register", require("./routes/api/register")); // Registration route
app.use("/api/login", require("./routes/api/login")); // Login route
app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
