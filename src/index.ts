import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import courseRoutes from './routes/courseRoutes';
import videoRoutes from './routes/videoRoutes';
import connectDB from './config/db';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', userRoutes);
app.use('/api', courseRoutes);
app.use('/api', videoRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
