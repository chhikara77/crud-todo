// controllers/todoController.js
import TodoModel from "../models/todoModel.js"

class TodoController {
  static async createTodo(req, res) {
    const { toDo } = req.body;

    try {
      const todo = await TodoModel.createTodo(toDo,"none");
      res.status(201).json(todo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async getTodos(req, res) {
    try {
      const todos = await TodoModel.getTodos();
      res.status(200).json(todos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async updateTodo(req, res) {
    const { toDo} = req.body;
    const { id } = req.params;
    console.log(toDo,id)
    try {
      const updatedTodo = await TodoModel.updateTodo(id, toDo);
      res.status(200).json(updatedTodo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async deleteTodo(req, res) {
    const { id } = req.params;
     console.log("id",req.params)
    try {
      const deletedTodo = await TodoModel.deleteTodo(id);
      res.status(200).json(deletedTodo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default TodoController;
