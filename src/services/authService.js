const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserRepository = require('../repositories/userRepository');

class AuthService {
  async registerUser(userData) {
    const existingUser = await UserRepository.getUserByEmail(userData.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const newUser = await UserRepository.createUser(userData);
    return newUser;
  }

  async generateToken(user) {
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return { token, user };
  }

  async refreshToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const newToken = jwt.sign({ id: decoded.id, email: decoded.email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      return newToken;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}

module.exports = new AuthService();
