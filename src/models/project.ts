import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  repoLink: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
  },
  language: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

projectSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const Project = mongoose.model('project', projectSchema);

export default Project;
