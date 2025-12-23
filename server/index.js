import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import portfolioRouter from "./routes/portfolioRouter.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.get("/api/v1", (req, res) => {
  res.send("Welcome to My MERN Portfolio API!");
});
app.use("/api/v1/portfolio", portfolioRouter);

// Serve React build
app.use(express.static(path.join(__dirname, "build")));

// Catch-all for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

// Use EB port
const PORT = process.env.PORT || 3200;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
