import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const access_token = req.headers.authorization?.split(" ")[1];
  try {
    if (!access_token) {
      throw new NotAuthorizedError("failed to find token");
    }

   
    next();
  } catch (e: any) {
    next(e);
  }
};
