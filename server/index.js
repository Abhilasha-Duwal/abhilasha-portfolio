import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import portfolioRouter from "./routes/portfolioRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to My MERN Portfolio API!");
});
app.use("/api/v1/portfolio", portfolioRouter);

const path = require("path");

// Serve static files from React build
app.use(express.static(path.join(__dirname, "client/build")));

// React routing — serve index.html for any unknown route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const PORT = process.env.PORT || 3200;
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
