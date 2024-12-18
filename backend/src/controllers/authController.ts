import { Request, Response } from "express";
import { Responses } from "../helpers/responses";
import { TokenResultType } from "../types/TokenResultType";
import prisma from "../prisma";
import { UserLoginValidator } from "../validators/UserValidator";
import { Encrypt } from "../helpers/encrypt";

// User login function
export const login = async (req: Request, res: Response) => {
  // Validate the user input
  const { error } = UserLoginValidator.validate(req.body);
  if (error) {
    console.error("Error during user login validation:", error);
    return Responses.ValidationBadRequest(res, error);
  }

  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return Responses.BadRequest(res, "Invalid email.");
    }

    // Check if the password is correct
    const isPasswordCorrect = Encrypt.comparepassword(password, user.password);
    if (!isPasswordCorrect) {
      return Responses.BadRequest(res, "Invalid password.");
    }

    // Generate JWT tokens
    const accessToken = Encrypt.generateToken({
      id: user.id,
    });
    const refreshToken = Encrypt.generateRefreshToken({
      id: user.id,
    });

    // Construct the token result for response
    const tokenResult: TokenResultType = { accessToken, refreshToken };

    // Use structured login success response
    return Responses.LoginSuccess(
      res,
      {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt,
      },
      tokenResult
    );
  } catch (error) {
    console.error("Error during user login:", error);
    return Responses.InternalServerError(res, "Internal server error.");
  }
};
export const getCurrentUser = async (id: number) => {
  // Fetch user by ID to verify they exist
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};
