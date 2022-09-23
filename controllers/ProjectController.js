const asyncHandler = require("express-async-handler");
const Project = require("../models/project");
const ObjectId = require("mongodb").ObjectId;
// @desc    Get projects
// @route   GET /api/projects
// @access  Private
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find();
  res.status(200).json(projects);
});
// @desc    Get One project
// @route   GET /api/projects/:id
// @access  Private
const getSingleProjects = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const project = await Project.findOne(query);
  res.status(200).json(project);
});

// @desc    Create projects
// @route   POST /api/projects
// @access  Private
const createdProjects = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name field");
  }
  const project = await Project.insertMany(req.body);

  res.status(200).json(project);
});

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private
const updatedProjects = asyncHandler(async (req, res) => {
  res.json({ message: `Updated projects ${req.params.id}` });
});

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private
const deletedProjects = asyncHandler(async (req, res) => {
  res.json({ message: `deleted projects ${req.params.id}` });
});

module.exports = {
  getProjects,
  getSingleProjects,
  createdProjects,
  updatedProjects,
  deletedProjects,
};
