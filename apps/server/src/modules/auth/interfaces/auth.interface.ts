export interface RegisterUserInput {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface RegisterUserOutput {
    isSuccessful: boolean
}