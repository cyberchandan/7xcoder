// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // Route imports
// import authRoutes from './routes/authRoutes.js';
// import cmsRoutes from './routes/cmsRoutes.js';
// import contactRoutes from './routes/contactRoutes.js';

// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Export app for Vercel
// export default app;

// // Middleware
// app.use(cors({
//   origin: [
//     "https://7xcoder.com",
//     "https://www.7xcoder.com"
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true
// }));

// // IMPORTANT: handle preflight
// app.options('*', cors());
// app.use(express.json());

// // Ensure uploads directory exists
// const uploadsDir = path.join(__dirname, 'uploads');
// import { existsSync, mkdirSync } from 'fs';
// if (!existsSync(uploadsDir)) {
//   mkdirSync(uploadsDir, { recursive: true });
// }

// // Serve uploaded files statically
// app.use('/uploads', express.static(uploadsDir));

// // Routes
// app.use('/api/admin', authRoutes);
// app.use('/api', cmsRoutes);
// app.use('/api/contact', contactRoutes);

// // Database Connection
// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/7xcoder', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('✅ MongoDB connected'))
// .catch(err => console.error('❌ MongoDB connection error:', err));

// // Start server only if not running on Vercel
// if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
//   });
// }


//...................new code .............
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import serverless from 'serverless-http';
import { existsSync, mkdirSync } from 'fs';

// Routes
import authRoutes from './routes/authRoutes.js';
import cmsRoutes from './routes/cmsRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ================= CORS FIX =================
app.use(cors({
  origin: [
    "https://7xcoder.com",
    "https://www.7xcoder.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// Preflight request fix
app.options('*', cors());

// Extra headers (important for Vercel)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://7xcoder.com");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// ================= MIDDLEWARE =================
app.use(express.json());

// ================= STATIC FILES =================
const uploadsDir = path.join(__dirname, 'uploads');

if (!existsSync(uploadsDir)) {
  mkdirSync(uploadsDir, { recursive: true });
}

app.use('/uploads', express.static(uploadsDir));

// ================= ROUTES (IMPORTANT ORDER) =================
app.use('/api/contact', contactRoutes);   // FIRST
app.use('/api/admin', authRoutes);
app.use('/api', cmsRoutes);

// ================= DATABASE =================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// ================= VERCEL EXPORT =================
export default serverless(app);