import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes
import authRoutes from "./routes/authRoutes.js";
import cmsRoutes from "./routes/cmsRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

// Connect to Database
connectDB();

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ================= TEST ROUTE =================
app.get("/", (req, res) => {
  res.send("API is running... 🚀");
});

// ================= ROUTES =================
app.use("/api/contact", contactRoutes);
app.use("/api/admin", authRoutes);
app.use("/api", cmsRoutes);

// ================= ERROR HANDLING =================
app.use(notFound);  // Catch 404
app.use(errorHandler); // Global Error Handler

// ================= PORT CONFIG =================
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

// ================= EXPORT =================
export default app;