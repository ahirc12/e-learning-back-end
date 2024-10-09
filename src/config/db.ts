import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connectionString = process.env.MONGO_URI || 'mongodb://localhost:27017/'
    await mongoose.connect(connectionString);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
