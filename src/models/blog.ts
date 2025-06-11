import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: '',
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    default: '',
  },
  content: {
    type: String,
    required: true,
    default: '',
  },
  publishedAt: {
    type: Date,
    default: Date.now,
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

blogSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const Blog = mongoose.model('blog', blogSchema);

export default Blog;
