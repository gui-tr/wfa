const express = require('express');
const router = express.Router();
const workspaceApi = require('../api/workspaceApi');

// Workspace management routes
router.get('/', workspaceApi.getAllWorkspaces);
router.post('/', workspaceApi.createWorkspace);
router.get('/:id', workspaceApi.getWorkspaceById);
router.put('/:id', workspaceApi.updateWorkspace);
router.delete('/:id', workspaceApi.deleteWorkspace);

module.exports = router;
