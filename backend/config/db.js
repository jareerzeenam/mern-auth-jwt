import mongoose from 'mongoose';

let isConnected = null;

const connectDB = async () => {
  if (isConnected) {
    console.log('MongoDB:: Using existing connected database!');
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(mongoose.connection.readyState);

    //Assign isConnected if connected to DB
    isConnected = mongoose.connection.readyState;

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
