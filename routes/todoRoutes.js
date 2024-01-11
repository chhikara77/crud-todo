import express from 'express';
import { isAuthenticated } from '../middleware/authMiddleware.js';
import TodoController from '../controllers/todoController.js';

const todoRoutes = express.Router();

todoRoutes.post('/create',isAuthenticated, TodoController.createTodo);
todoRoutes.get('/get-all',isAuthenticated,  TodoController.getTodos);
todoRoutes.put('/update/:id',isAuthenticated, TodoController.updateTodo);
todoRoutes.delete('/delete/:id', isAuthenticated, TodoController.deleteTodo);

export default todoRoutes;
