// app.js
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import todoRoutes from './routes/todoRoutes.js';
import cors from 'cors';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors({
  origin: '*'
}));

// Routes
app.use('/user', userRoutes);
app.use('/todo', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
