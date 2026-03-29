import express from 'express';
import multer from 'multer';
import jwt from 'jsonwebtoken';
import path from 'path';
import fs from 'fs';
import Blog from '../models/Blog.js';
import Career from '../models/Career.js';

const router = express.Router();

// Middleware to protect routes
const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) throw new Error();
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
  }
};

// Setup Multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// ---------------- BLOGS ---------------- 

router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/blogs', auth, upload.single('image'), async (req, res) => {
  try {
    const { title, description, date, comments } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
    
    const blog = new Blog({ title, description, date, comments, imageUrl });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/blogs/:id', auth, upload.single('image'), async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.imageUrl = `/uploads/${req.file.filename}`;
    }
    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/blogs/:id', auth, async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ---------------- CAREERS ---------------- 

router.get('/careers', async (req, res) => {
  try {
    const careers = await Career.find().sort({ date: -1 });
    res.json(careers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/careers', auth, upload.single('image'), async (req, res) => {
  try {
    const { title, description, date, location, requirements } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
    
    const career = new Career({ title, description, date, location, requirements, imageUrl });
    await career.save();
    res.status(201).json(career);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/careers/:id', auth, upload.single('image'), async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.imageUrl = `/uploads/${req.file.filename}`;
    }
    const career = await Career.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(career);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/careers/:id', auth, async (req, res) => {
  try {
    await Career.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
