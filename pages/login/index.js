import LoginForm from "../../components/login/LoginForm";
import {useEffect, useState} from "react";
import {getSession} from "next-auth/react";
import {useRouter} from "next/router";
import classes from '../../styles/login.module.css';
import Modal from "../../components/tools/Modal";

export default function Login() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        getSession().then(session => {
            if (session) {
                router.replace("/");
            } else {
                setIsLoading(false);
            }
        })
    }, [router]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return <div className={classes.authFormContainer}>
        <div>
            <h3>احجز مكانك في عالم البرمجة</h3>
        </div>

        <LoginForm/>

    </div>
};


