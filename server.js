import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Example API endpoint
app.post("/api/form", (req, res) => {
  const { name, email } = req.body;
  console.log("Form Data Received:", { name, email });
  res.json({ success: true, message: "Form submitted successfully!" });
});

// Get port from .env or default to 5000
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
