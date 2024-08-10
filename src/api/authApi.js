const authService = require('../services/authService');

class AuthApi {
  async login(req, res) {
    try {
      const { token, user } = await authService.generateToken(req.user);
      res.json({ token, user });
    } catch (error) {
      res.status(500).json({ message: 'Login failed', error: error.message });
    }
  }

  async signup(req, res) {
    try {
      const user = await authService.registerUser(req.body);
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async logout(req, res) {
    // In JWT-based systems, logout is typically handled client-side.
    res.status(200).json({ message: 'Logout successful' });
  }

  async refreshToken(req, res) {
    try {
      const newToken = await authService.refreshToken(req.body.token);
      res.json({ token: newToken });
    } catch (error) {
      res.status(401).json({ message: 'Invalid token', error: error.message });
    }
  }
}

module.exports = new AuthApi();
