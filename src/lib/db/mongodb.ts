import mongoose from 'mongoose';

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI as string);
    isConnected = db.connections[0].readyState === 1;
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}
