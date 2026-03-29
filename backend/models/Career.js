import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  location: { type: String, required: true },
  requirements: { type: String },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Career', careerSchema);
