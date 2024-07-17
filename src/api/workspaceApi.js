const express = require('express');
const workspaceRepository = require('../repository/workspaceRepository');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const workspaces = await workspaceRepository.findAll();
      res.status(200).send(workspaces);
    } catch (error) {
      res.status(500).send(error);
    }
  })
  .post(async (req, res) => {
    try {
      const workspace = await workspaceRepository.create(req.body);
      res.status(201).send(workspace);
    } catch (error) {
      res.status(400).send(error);
    }
  });

router.route('/:id')
  .get(async (req, res) => {
    try {
      const workspace = await workspaceRepository.findById(req.params.id);
      if (!workspace) {
        return res.status(404).send('Workspace not found');
      }
      res.status(200).send(workspace);
    } catch (error) {
      res.status(500).send(error);
    }
  })
  .put(async (req, res) => {
    try {
      const workspace = await workspaceRepository.updateById(req.params.id, req.body);
      if (!workspace) {
        return res.status(404).send('Workspace not found');
      }
      res.status(200).send(workspace);
    } catch (error) {
      res.status(400).send(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const workspace = await workspaceRepository.deleteById(req.params.id);
      if (!workspace) {
        return res.status(404).send('Workspace not found');
      }
      res.status(200).send('Workspace deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router;
