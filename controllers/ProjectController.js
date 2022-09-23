const asyncHandler = require("express-async-handler");
// @desc    Get projects
// @route   GET /api/projects
// @access  Private
const getProjects = asyncHandler(async (req, res) => {
  res.json({ message: "Loaded  projects" });
});

// @desc    Create projects
// @route   POST /api/projects
// @access  Private
const createdProjects = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name field");
  }
  res.json({ message: "Created  projects" });
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
  createdProjects,
  updatedProjects,
  deletedProjects,
};
