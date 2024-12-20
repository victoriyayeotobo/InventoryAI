import { injectable } from "tsyringe";
import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services";
import { sendResponse } from "../../../shared/utils";
import { StatusCode } from "../../../shared/constants";

@injectable()
export default class AuthController {
    constructor(
        private authService: AuthService
    ){

    }

    async registerUser(req: Request, res: Response, next: NextFunction){
        try {

            await this.authService.register(req.body);

            sendResponse({
                res,
                status: "success",
                statusCode: StatusCode.CREATED,
                message: "successfully created account"
            });
        } catch (err: any) {
            next(err);
        }
    }
}