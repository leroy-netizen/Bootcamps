import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import connectDB from './config/db.js';
// import logger from './middleware/logger-middleware.js';  // custom logger
// load env vars
dotenv.config({ path: './config/config.env' });

//route files
import bootcampRoutes from './routes/bootcamp-routes.js';

//connect to db
connectDB();

const app = express();

// app.use(logger);

//dev logging middleware
if ((process.env.NODE_ENV = 'development')) {
  app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps', bootcampRoutes);

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.bold
  )
);

//global handler for unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  //close the server & exit the process
  ServiceWorkerRegistration.close(() => process.exit(1));
});
