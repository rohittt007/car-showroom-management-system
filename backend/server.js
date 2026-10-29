const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import database
const pool = require("./db");

// Import routes
const carRoutes = require("./routes/carRoutes");
const userRoutes = require("./routes/userRoutes");
const loginRoutes = require("./routes/loginRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API Working Fine 🚀" });
});

// API Routes
app.use("/api", carRoutes);
app.use("/api", userRoutes);
app.use("/api", loginRoutes);

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running", timestamp: new Date() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Database: ${process.env.DB_NAME || 'csms_db'}`);
});