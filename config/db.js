import mongoose from 'mongoose';

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(
    `Database connected: ${conn.connection.host}`.yellow.underline.bold
  );
};

export default connectDB;
