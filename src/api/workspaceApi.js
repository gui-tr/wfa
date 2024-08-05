const workspaceRepository = require('../repositories/workspaceRepository');

class WorkspaceApi {
  async getAllWorkspaces(req, res) {
    try {
      const workspaces = await workspaceRepository.getAllWorkspaces();
      res.status(200).send(workspaces);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async createWorkspace(req, res) {
    try {
      const workspace = await workspaceRepository.createWorkspace(req.body);
      res.status(201).send(workspace);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async getWorkspaceById(req, res) {
    try {
      const workspace = await workspaceRepository.getWorkspaceById(req.params.id);
      if (!workspace) {
        return res.status(404).send('Workspace not found');
      }
      res.status(200).send(workspace);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateWorkspace(req, res) {
    try {
      const workspace = await workspaceRepository.updateWorkspace(req.params.id, req.body);
      if (!workspace) {
        return res.status(404).send('Workspace not found');
      }
      res.status(200).send(workspace);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async deleteWorkspace(req, res) {
    try {
      const workspace = await workspaceRepository.deleteWorkspace(req.params.id);
      if (!workspace) {
        return res.status(404).send('Workspace not found');
      }
      res.status(200).send('Workspace deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new WorkspaceApi();
