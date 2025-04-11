import Job from '../models/Job.js';

// Add new job
export const addJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all jobs
export const getJobs = async (req, res) => {
  const jobs = await Job.find().sort({ appliedDate: -1 });
  res.json(jobs);
};

// Update job status
export const updateJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndUpdate(id, req.body, { new: true });
  res.json(job);
};

// Delete job
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  await Job.findByIdAndDelete(id);
  res.json({ message: 'Job deleted' });
};
