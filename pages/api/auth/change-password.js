import {getSession} from "next-auth/react";
import {getUserByEmail, updateUser} from "../../../helpers/db";
import {verifyPassword} from "../../../helpers/auth";

async function handler(req, res) {
    if (req.method !== 'PATCH') {
        return;
    }
    const session = await getSession({req: req});

    if (!session) {
        res.status(401).json({message: "لم تقم بتسجيل الدخول بعد!"})
        return;
    }

    const userEmail = session.user.email;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    const user = await getUserByEmail(userEmail);

    if (!user) {
        res.status(404).json({message: "لا يوجد مستخدم مسجل بهذه البيانات"})
        return;
    }
    const firstKey = Object.keys(user)[0];
    const currentUserPassword = user[firstKey].enteredHashPassword;
    const passwordOk = await verifyPassword(oldPassword, currentUserPassword);

    if (!passwordOk) {
        res.status(401).json({message: "كلمة السر التي أدخلتها ليست صحيحة!"});
        return;
    }
    user[firstKey].enteredHashPassword = "asd"
    const updatedUser = await updateUser(user);
    res.status(200).json({message: user});
}

export default handler;