const express = require('express');
const userApi = require('../api/userApi');

const router = express.Router();

router.route('/')
  .get(userApi.getAllUsers)
  .post(userApi.createUser);

router.route('/:id')
  .get(userApi.getUserById)
  .put(userApi.updateUser)
  .delete(userApi.deleteUser);

module.exports = router;
