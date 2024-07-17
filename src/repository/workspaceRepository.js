const Workspace = require('../model/workspace');

class WorkspaceRepository {
  async create(workspaceData) {
    const workspace = new Workspace(workspaceData);
    return workspace.save();
  }

  async findAll() {
    return Workspace.find();
  }

  async findById(id) {
    return Workspace.findById(id);
  }

  async updateById(id, workspaceData) {
    return Workspace.findByIdAndUpdate(id, workspaceData, { new: true, runValidators: true });
  }

  async deleteById(id) {
    return Workspace.findByIdAndDelete(id);
  }
}

module.exports = new WorkspaceRepository();
