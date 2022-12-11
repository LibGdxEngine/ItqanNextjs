import classes from "./LoginForm.module.css";
import {useRef, useState} from "react";
import {signIn} from "next-auth/react";
import {useRouter} from "next/router";

async function createUser(email, password) {
    const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "something went wrong!");
    }
    return data;
}

const LoginForm = (props) => {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState(true);
    const userNameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const loginEmailInputRef = useRef();
    const loginPasswordInputRef = useRef();

    let signUpClass = "";
    let loginClass = "";
    if (isSignUp) {
        loginClass = classes.login + " " + classes.slideUp;
        signUpClass = classes.signup;
    } else {
        loginClass = classes.login;
        signUpClass = classes.signup + " " + classes.slideUp;
    }


    function handleLoginClick() {
        setIsSignUp(false);
    }

    function handleSignupClick() {
        setIsSignUp(true);
    }

    async function submitHandler(event) {
        event.preventDefault();

        const enteredUserName = userNameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const enteredLoginEmail = loginEmailInputRef.current.value;
        const enteredLoginPassword = loginPasswordInputRef.current.value;

        // optional add validation here

        if (isSignUp) {
            try {
                const response = await createUser(enteredEmail, enteredPassword);
                console.log(response);
            } catch (e) {
                console.log(e.message);
            }

        } else {
            //log in the user
            // console.log(enteredLoginPassword, enteredLoginEmail);
            const result = await signIn("credentials", {
                redirect: false,
                email: enteredLoginEmail,
                password: enteredLoginPassword,
            });

            if(!result.error){
                router.replace("/courses");
            }
        }
        window.location.reload();

    }

    return <div className={classes.formContainer}>
        <div className={classes.formStructor}>
            <form onSubmit={submitHandler} className={signUpClass}>
                <h2 onClick={handleSignupClick} className={classes.formTitle} id="signup"><span> أو </span>تسجيل حساب
                    جديد
                </h2>
                <div className={classes.formHolder}>
                    <input type="text" ref={userNameInputRef} required={true} className={classes.input}
                           placeholder="الإسم"/>
                    <input type="email" ref={emailInputRef} required={true} className={classes.input}
                           placeholder="البريد الإلكتروني"/>
                    <input type="password" ref={passwordInputRef} required={true} className={classes.input}
                           placeholder="كلمة السر"/>
                </div>
                <button className={classes.submitBtn}>تسجيل</button>
            </form>
            <form onSubmit={submitHandler} className={loginClass}>
                <div className={classes.center}>
                    <h2 onClick={handleLoginClick} className={classes.formTitle} id="login"><span> أو </span>تسجيل
                        الدخول
                    </h2>
                    <div className={classes.formHolder}>
                        <input type="email" ref={loginEmailInputRef} required={true} className={classes.input}
                               placeholder="البريد الإلكتروني"/>
                        <input type="password" ref={loginPasswordInputRef} required={true} className={classes.input}
                               placeholder="كلمة السر"/>
                    </div>
                    <button className={classes.submitBtn}>تسجيل الدخول</button>
                </div>
            </form>
        </div>
    </div>
};

export default LoginForm;