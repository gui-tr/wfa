const express = require('express');
const jobRepository = require('../repository/jobRepository');
const swaggerJSDoc = require('swagger-jsdoc');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const jobs = await jobRepository.findAll();
      res.status(200).send(jobs);
    } catch (error) {
      res.status(500).send(error);
    }
  })
  .post(async (req, res) => {
    try {
      const job = await jobRepository.create(req.body);
      res.status(201).send(job);
    } catch (error) {
      res.status(400).send(error);
    }
  });

router.route('/:id')
  .get(async (req, res) => {
    try {
      const job = await jobRepository.findById(req.params.id);
      if (!job) {
        return res.status(404).send('Job not found');
      }
      res.status(200).send(job);
    } catch (error) {
      res.status(500).send(error);
    }
  })
  .put(async (req, res) => {
    try {
      const job = await jobRepository.updateById(req.params.id, req.body);
      if (!job) {
        return res.status(404).send('Job not found');
      }
      res.status(200).send(job);
    } catch (error) {
      res.status(400).send(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const job = await jobRepository.deleteById(req.params.id);
      if (!job) {
        return res.status(404).send('Job not found');
      }
      res.status(200).send('Job deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router;
