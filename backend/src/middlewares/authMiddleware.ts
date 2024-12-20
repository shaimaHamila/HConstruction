import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { Responses } from "../helpers/responses";
import { Encrypt } from "../helpers/encrypt";

export const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return Responses.Unauthorized(res, "Invalid authorization format.");
  }
  const token = header.split(" ")[1];

  try {
    const decodedToken = Encrypt.verifyAccessToken(token);
    res.locals.decodedToken = decodedToken;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return Responses.Unauthorized(res);
    }
    return Responses.BadRequest(res);
  }
};
