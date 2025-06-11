import User from '../../models/user';
import { connectToDatabase } from './mongodb';

// This function will create or update a user in our database
export async function createOrUpdateUser(userData: {
  name: string;
  email: string;
  image?: string;
  githubUsername?: string;
}) {
  try {
    await connectToDatabase();

    // Find user by email or create new one
    const user = await User.findOneAndUpdate(
      { email: userData.email },
      {
        $set: {
          name: userData.name,
          image: userData.image,
          githubUsername: userData.githubUsername,
          updatedAt: new Date(),
        },
      },
      { upsert: true, new: true }
    );

    return user;
  } catch (error) {
    console.error('Error creating/updating user:', error);
    throw error;
  }
}
