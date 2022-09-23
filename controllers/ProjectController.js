// @desc    Get projects
// @route   GET /api/projects
// @access  Private
const getProjects = (req, res) => {
  res.json({ message: "Loaded  projects" });
};

// @desc    Create projects
// @route   POST /api/projects
// @access  Private
const createdProjects = (req, res) => {
  res.json({ message: "Created  projects" });
};

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private
const updatedProjects = (req, res) => {
  res.json({ message: `Updated projects ${req.params.id}` });
};

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private
const deletedProjects = (req, res) => {
  res.json({ message: `deleted projects ${req.params.id}` });
};

module.exports = {
  getProjects,
  createdProjects,
  updatedProjects,
  deletedProjects,
};