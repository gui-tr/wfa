// src/repositories/jobRepository.js
const Job = require('../model/job');

class JobRepository {
  async create(jobData) {
    const job = new Job(jobData);
    return job.save();
  }

  async findAll() {
    return Job.find();
  }

  async findById(id) {
    return Job.findById(id);
  }

  async updateById(id, jobData) {
    return Job.findByIdAndUpdate(id, jobData, { new: true, runValidators: true });
  }

  async deleteById(id) {
    return Job.findByIdAndDelete(id);
  }
}

module.exports = new JobRepository();
