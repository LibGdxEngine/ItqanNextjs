import {hashPassword} from "../../../helpers/auth";
import {emailIsAvailable} from "../../../helpers/db";

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const {email, password} = data;

        if (!email || !email.includes("@") || !password || password.trim().length < 7) {
            res.status(422).json({message: +email + " " + password + "هذه البيانات غير منتظمة ... يرجى تصحيح الأخطاء"});
            return;
        }

        const emailAvailable = await emailIsAvailable(email);
        if (!emailAvailable) {
            res.status(404).json({message: "خطأ : " + "هذا الحساب موجود بالفعل ... جرب تسجيل الدخول"});
            return;
        }
        const enteredHashPassword = await hashPassword(password);
        try {
            const response = await fetch("https://itqan-32c83-default-rtdb.firebaseio.com/users.json", {
                method: "POST",
                body: JSON.stringify({email: email, password: enteredHashPassword}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
        } catch (e) {
            res.status(404).json({message: "Error: " + e.message});
        }

        res.status(201).json({message: "Created user!"})
    }
}


export default handler;