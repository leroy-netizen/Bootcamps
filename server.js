import express from 'express';
import dotenv from 'dotenv';

//route files
import bootcampRoutes from './routes/bootcampRoutes.js';

// load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

//Mount routers
app.use('/api/v1/bootcamps', bootcampRoutes);

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
