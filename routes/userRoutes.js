// routes/userRoutes.js
import express from 'express';
import UserController from '../controllers/userController.js';


const userRoutes = express.Router();

userRoutes.post('/login', UserController.sendLoginLink);
userRoutes.post('/verify', UserController.verifyLoginLink);

export default userRoutes;
