import {hashPassword} from "../../../helpers/auth";
import {emailIsAvailable} from "../../../helpers/db";

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const {userName, email, password} = data;

        if (!email || !email.includes("@") || !password || password.trim().length < 7 || !userName) {
            res.status(422).json({message: "هذه البيانات غير صحيحة ... يرجى تصحيح الأخطاء"});
            return;
        }

        const emailAvailable = await emailIsAvailable(email);
        if (!emailAvailable) {
            res.status(404).json({message: "" + "هذا الحساب موجود بالفعل ... جرب تسجيل الدخول"});
            return;
        }
        const enteredHashPassword = await hashPassword(password);
        try {

            const response = await fetch("https://itqan-32c83-default-rtdb.firebaseio.com/users.json", {
                method: "POST",
                body: JSON.stringify({userName, email, enteredHashPassword}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
        } catch (e) {
            res.status(404).json({message: "" + e.message});
        }

        res.status(201).json({message: "تم انشاء حسابك بنجاح ... قم بتسجيل الدخول الان"})
    }
}


export default handler;