import {hash, compare} from "bcryptjs";

export async function hashPassword(originalPassword) {
    const hashedPassword = await hash(originalPassword, 12);
    return hashedPassword;
}

export async function verifyPassword(password, hashedPassword) {
    const isValid = await compare(password, hashedPassword);
    return isValid;
}