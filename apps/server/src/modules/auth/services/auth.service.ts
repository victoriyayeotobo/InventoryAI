import { injectable } from "tsyringe";
import { RegisterUserInput, RegisterUserOutput } from "../interfaces";
import { UserRepository } from "../../../shared/database/repositories";
import { BadRequestError } from "../../../shared/errors";
import { encrypt } from "../../../shared/utils";

@injectable()
export default class AuthService {
    constructor(
        private userRepository: UserRepository
    ){

    }

    async register(args: RegisterUserInput): Promise<RegisterUserOutput> {

        const { email, password } = args;
        
        const existingUser = await this.userRepository.findUserByEmail(email);

        if(!existingUser){
            throw new BadRequestError("email already exists", {
                email,
                timestamp: new Date()
            });
        }

        const hashedPassword = await encrypt(password);

        await this.userRepository.addUser({
            ...args,
            password: hashedPassword
        });

        return {
            isSuccessful: true
        }
    }
}