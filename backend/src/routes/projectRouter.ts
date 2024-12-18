import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/projectController";
import { authentication } from "../middlewares/authMiddleware";

const ProjectRouter = express.Router();

ProjectRouter.post("/", authentication, createProject);
ProjectRouter.get("/", getProjects);
ProjectRouter.get("/:id", getProjectById);
ProjectRouter.put("/:id", authentication, updateProject);
ProjectRouter.delete("/:id", authentication, deleteProject);
export default ProjectRouter;
