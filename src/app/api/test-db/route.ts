import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db/mongodb';

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json(
      {
        status: 'success',
        message: 'Database connected successfully',
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Database connection test failed:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to connect to database',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
