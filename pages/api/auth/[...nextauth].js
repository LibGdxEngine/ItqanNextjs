import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {emailIsAvailable, getUserByEmail} from "../../../helpers/db";
import {verifyPassword} from "../../../helpers/auth";

export default NextAuth(
    {
        session: {
            jwt: true
        },
        providers: [CredentialsProvider({
                async authorize(credentials) {
                    const user = await getUserByEmail(credentials.email);

                    if (!user) {
                        throw new Error("لا يوجد مستخدم مسجل لهذا البريد الإلكتروني")
                    }
                    const firstKey = Object.keys(user)[0];
                    const passwordOk = await verifyPassword(credentials.password, user[firstKey].enteredHashPassword);
                    if (!passwordOk) {
                        throw new Error("كلمة السر غير صحيحة ... حاول مجددا");
                    }

                    return {email: user[firstKey].email};
                }
            }
        )]
    }
);