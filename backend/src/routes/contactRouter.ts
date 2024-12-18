import express from "express";
import {
  createContact,
  deleteContact,
  getContacts,
} from "../controllers/contactController";
import { authentication } from "../middlewares/authMiddleware";

const ContactRouter = express.Router();

// Route to create a new contact
ContactRouter.post("/", createContact);

// Route to get all contacts
ContactRouter.get("/", authentication, getContacts);

// Route to get a contact by its ID

// Route to delete a contact
ContactRouter.delete("/:id", authentication, deleteContact);

export default ContactRouter;
