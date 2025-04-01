import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import {
  notFound,
  errorHandler,
} from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// custom error handler middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
