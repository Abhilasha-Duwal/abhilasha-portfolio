import express from "express";
import { sendEmailController } from "../controllers/portfolioController.js";

// Create router object
const router = express.Router();

// Define routes
router.post("/sendEmail", sendEmailController);

// Export router
export default router;
