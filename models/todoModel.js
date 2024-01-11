// models/todoModel.js
import db from '../utils/database.js';


class TodoModel {
  static async createTodo(title, description) {
    try {
      return db.one('INSERT INTO todos(title, description) VALUES($1, $2) RETURNING *', [title, description]);
    } catch (error) {
      console.error('Error creating todo:', error.message);
      throw new Error('Failed to create todo');
    }
  }

  static async getTodos() {
    try {
      return db.any('SELECT * FROM todos');
    } catch (error) {
      console.error('Error getting todos:', error.message);
      throw new Error('Failed to get todos');
    }
  }

  static async updateTodo(id, title) {
    try {
      return db.one('UPDATE todos SET title = $1 WHERE id = $2 RETURNING *', [
        title,
        id,
      ]);
    } catch (error) {
      console.error('Error updating todo:', error.message);
      throw new Error('Failed to update todo');
    }
  }

  static async deleteTodo(id) {
    try {
      console.log(id)
      return db.oneOrNone('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
    } catch (error) {
      console.error('Error deleting todo:', error.message);
      throw new Error('Failed to delete todo');
    }
  }
}
export default  TodoModel;
