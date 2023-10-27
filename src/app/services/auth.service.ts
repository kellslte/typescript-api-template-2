import { BadRequestException } from "../utils/errors";
import { getUserByEmail, createUser } from "./user.service";
import { random, authentication } from "../utils/auth";

// Type Definitions
export type CreateUserOptions = {
    email: string;
    password: string;
    username: string;
    authentication: object;
}

export const register = async function (data: CreateUserOptions) {
    const { email, password, username } = data;
    
    const existingUser = await getUserByEmail(email);

    if (existingUser) throw new BadRequestException("This email has already been used");

    const salt = random();
    const user = await createUser({
        email,
        username,
        authentication: {
            salt: salt,
            password: authentication(salt, password)
        }
    })

    return user;
}