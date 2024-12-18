import express from "express";
import { login } from "../controllers/authController";

const AuthRouter = express.Router();
AuthRouter.post("/login", login);
export default AuthRouter;
