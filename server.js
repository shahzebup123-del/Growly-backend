// backend/server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

let leads = [];

app.post("/api/leads", (req, res) => {
  console.log("📩 Incoming request body:", req.body);
  const { name, email, phone, businessType, message } = req.body;

  if (!name || !email || !phone || !businessType) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  const newLead = {
    id: leads.length + 1,
    name,
    email,
    phone,
    businessType,
    message: message || "",
    createdAt: new Date().toISOString(),
  };

  leads.push(newLead);
  console.log("✅ New lead saved:", newLead);

  res.json({ success: true, message: "Lead captured successfully", lead: newLead });
});

app.get("/api/leads", (req, res) => {
  res.json(leads);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
