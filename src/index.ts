import express from 'express';
import v1Router from './routes/v1/v1.router';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/db.connect';
dotenv.config();
// =====================================================

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

// =====================================================
const app = express();
app.use(express.json());
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'] // Allow necessary methods
}));
app.use('/api/v1', v1Router);
// =====================================================

// ==================================================
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running in ${NODE_ENV} mode on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
// ==================================================