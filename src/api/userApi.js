const userRepository = require('../repositories/userRepository');

class UserApi {
  async getAllUsers(req, res) {
    try {
      const users = await userRepository.getAllUsers();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async createUser(req, res) {
    try {
      const user = await userRepository.createUser(req.body);
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userRepository.getUserById(req.params.id);
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateUser(req, res) {
    try {
      const user = await userRepository.updateUser(req.params.id, req.body);
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await userRepository.deleteUser(req.params.id);
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.status(200).send('User deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new UserApi();
