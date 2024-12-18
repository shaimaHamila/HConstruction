import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/projectController";

const ProjectRouter = express.Router();

ProjectRouter.post("/", createProject);
ProjectRouter.get("/", getProjects);
ProjectRouter.get("/:id", getProjectById);
ProjectRouter.put("/:id", updateProject);
ProjectRouter.delete("/:id", deleteProject);
export default ProjectRouter;
