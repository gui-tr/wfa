const Workspace = require('../models/Workspace');

class WorkspaceRepository {
  async createWorkspace(workspaceData) {
    const workspace = new Workspace(workspaceData);
    return await workspace.save();
  }

  async getWorkspaceById(workspaceId) {
    return await Workspace.findById(workspaceId);
  }

  async updateWorkspace(workspaceId, updateData) {
    return await Workspace.findByIdAndUpdate(workspaceId, updateData, { new: true });
  }

  async deleteWorkspace(workspaceId) {
    return await Workspace.findByIdAndDelete(workspaceId);
  }

  async getAllWorkspaces() {
    return await Workspace.find();
  }

  async getWorkspacesByCity(city) {
    return await Workspace.find({ 'address.city': city });
  }
}

module.exports = new WorkspaceRepository();
