const express = require("express");
const { getProjects, createdProjects, updatedProjects, deletedProjects } = require("../controllers/ProjectController");
const router = express.Router();

router.route("/").get(getProjects).post(createdProjects);
router.route("/:id").put(updatedProjects).delete(deletedProjects);

module.exports = router;
