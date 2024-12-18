import { Request, Response } from "express";
import prisma from "../prisma";
import { Responses } from "../helpers/responses";
import { ProjectValidator } from "../validators/ProjectValidator"; // Define validations

// Create a project
export const createProject = async (req: Request, res: Response) => {
  // Validate the request body
  const { error } = ProjectValidator.validate(req.body);
  if (error) {
    console.error("Validation error during project creation:", error);
    return Responses.ValidationBadRequest(res, error);
  }

  try {
    const {
      name,
      clientName,
      location,
      surfaceArea,
      sector,
      description,
      images,
      createdById,
    } = req.body;

    // Create the project
    const project = await prisma.project.create({
      data: {
        name,
        clientName,
        location,
        surfaceArea,
        sector,
        description,
        images,
        createdById,
      },
    });

    return Responses.CreateSuccess(res, project); // Updated for create success response
  } catch (error) {
    console.error("Error during project creation:", error);
    return Responses.InternalServerError(res, "Failed to create project.");
  }
};

// Get all projects
export const getProjects = async (_req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany({
      where: { deletedAt: null },
    });

    return Responses.FetchSucess(res, projects); // Updated for fetch success response
  } catch (error) {
    console.error("Error during fetching projects:", error);
    return Responses.InternalServerError(res, "Failed to fetch projects.");
  }
};

// Get a single project by ID
export const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const project = await prisma.project.findUnique({
      where: { id: parseInt(id) },
    });

    if (!project || project.deletedAt) {
      return Responses.NotFound(res, "Project not found.");
    }

    return Responses.FetchSucess(res, project); // Updated for fetch success response
  } catch (error) {
    console.error("Error during fetching project by ID:", error);
    return Responses.InternalServerError(res, "Failed to fetch project.");
  }
};

// Update a project
export const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const {
      name,
      clientName,
      location,
      surfaceArea,
      sector,
      description,
      images,
    } = req.body;

    const project = await prisma.project.update({
      where: { id: parseInt(id) },
      data: {
        name,
        clientName,
        location,
        surfaceArea,
        sector,
        description,
        images,
        updatedAt: new Date(),
      },
    });

    return Responses.UpdateSuccess(res, project); // Updated for update success response
  } catch (error) {
    console.error("Error during project update:", error);
    return Responses.InternalServerError(res, "Failed to update project.");
  }
};

// Delete a project (soft delete)
export const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.project.update({
      where: { id: parseInt(id) },
      data: { deletedAt: new Date() },
    });

    return Responses.DeleteSuccess(res); // Updated for delete success response
  } catch (error) {
    console.error("Error during project deletion:", error);
    return Responses.InternalServerError(res, "Failed to delete project.");
  }
};
