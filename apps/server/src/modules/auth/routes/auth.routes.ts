import { Request, Response, NextFunction, Router } from "express";
import { container } from "tsyringe";
import AuthController from "../controllers/auth.controller";
import { validateMiddleware } from "../../../shared/middleware";
import { userRegistrationSchema } from "../validations";


const authRouter = Router();
const authController = container.resolve(AuthController);

authRouter.post("/register", 
    validateMiddleware(userRegistrationSchema, 'body'), 
    async (req: Request, res: Response, next: NextFunction) => {
        await authController.registerUser(req, res, next);
    });

export default authRouter;