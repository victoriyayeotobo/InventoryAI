import { injectable } from "tsyringe";
import { UserModel } from "../schema/user.schema";
import { User } from "../intefaces";

@injectable()
export default class UserRepository {
    constructor(){

    }

    async addUser(args: Partial<User>): Promise<User | null> {
        return await UserModel.create(args);
    }

    async findUserByEmail(email: string): Promise<User | null> {
        return await UserModel.findOne({ email }).select('-password -refreshToken');
    }

    async setRefreshToken(userId: string, refreshToken: string): Promise<User | null> {
        return await UserModel.findByIdAndUpdate({_id: userId}, {
            refreshToken
        }, { new: true });
    }

    async getRefreshToken(userId: string): Promise<string | null> {
        const response = await UserModel.findById(userId);

        return response?.refreshToken ? response.refreshToken : null
    }
}