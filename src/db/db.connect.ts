import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
    try {
        const mongoURI = process.env.DATABASE_URL;
        if (!mongoURI) {
            throw new Error('DATABASE_URL environment variable not set');
        }

        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        throw error;
    }
};

export default connectDB;
