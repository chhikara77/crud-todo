// userModel.js - User model with Magic Link authentication

const db = require('../utils/database');
const jwt = require('jsonwebtoken');
const magicLink = require('../config/magicLinkConfig');

class UserModel {
  static async createUser(email) {
    try {
      return db.one('INSERT INTO users(email) VALUES($1) RETURNING id', [email]);
    } catch (error) {
      console.error('Error creating user:', error.message);
      throw new Error('Failed to create user');
    }
  }

  static async getUserByEmail(email) {
    try {
      return db.oneOrNone('SELECT * FROM users WHERE email = $1', [email]);
    } catch (error) {
      console.error('Error getting user by email:', error.message);
      throw new Error('Failed to get user by email');
    }
  }

  static generateAuthToken(userId) {
    try {
      const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return token;
    } catch (error) {
      console.error('Error generating auth token:', error.message);
      throw new Error('Failed to generate auth token');
    }
  }

  static async createMagicLinkToken(userId) {
    try {
      const token = await magicLink.createToken({ userId });
      return token;
    } catch (error) {
      console.error('Error creating magic link token:', error.message);
      throw new Error('Failed to create magic link token');
    }
  }
}

module.exports = UserModel;
