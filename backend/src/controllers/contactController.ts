import { Request, Response } from "express";
import prisma from "../prisma";
import { Responses } from "../helpers/responses";
import { ContactValidator } from "../validators/ContactValidator"; // Define validations (optional)

// Create a contact
export const createContact = async (req: Request, res: Response) => {
  // Validate the request body (optional)
  const { error } = ContactValidator.validate(req.body);
  if (error) {
    console.error("Validation error during contact creation:", error);
    return Responses.ValidationBadRequest(res, error);
  }

  try {
    const { name, email, subject, message, phone } = req.body;

    // Create the contact
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
        phone,
      },
    });

    return Responses.CreateSuccess(res, contact); // Use the 'CreateSuccess' response
  } catch (error) {
    console.error("Error during contact creation:", error);
    return Responses.InternalServerError(res, "Failed to create contact.");
  }
};

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await prisma.contact.findMany(); // Correct method to fetch multiple records

    if (!contacts || contacts.length === 0) {
      // Check if contacts array is empty
      return Responses.NotFound(res, "No contacts found.");
    }

    return Responses.FetchSucess(res, contacts); // Use the correct 'FetchSuccess' response
  } catch (error) {
    console.error("Error during fetching contacts:", error);
    return Responses.InternalServerError(res, "Failed to fetch contacts.");
  }
};

// Delete a contact (hard delete)
export const deleteContact = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.contact.delete({
      where: { id: parseInt(id) },
    });

    return Responses.DeleteSuccess(res); // Use the 'DeleteSuccess' response
  } catch (error) {
    console.error("Error during contact deletion:", error);
    return Responses.InternalServerError(res, "Failed to delete contact.");
  }
};
