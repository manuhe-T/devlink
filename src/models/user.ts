import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email',
    ],
  },
  image: {
    type: String,
  },
  bio: {
    type: String,
    required: true,
    default: '',
  },
  githubUsername: {
    type: String,
  },
  skills: {
    type: [String],
    required: true,
    default: [],
  },
  socialLinks: {
    type: {
      linkedin: { type: String, default: '' },
      twitter: { type: String, default: '' },
      github: { type: String, default: '' },
      website: { type: String, default: '' },
    },
    default: {},
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

userSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const User = mongoose.model('User', userSchema);

export default User;
