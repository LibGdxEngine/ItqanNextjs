import {hash} from "bcryptjs";

export async function hashPassword(originalPassword) {
    const hashedPassword = await hash(originalPassword, 12);
    return hashedPassword;
}