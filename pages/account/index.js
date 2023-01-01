import {useSession, getSession, signOut} from "next-auth/react";
import {useEffect, useState} from "react";
import classes from "../../styles/navbar.module.css";

const Account = (props) => {

    function logoutHandler() {
        signOut();
    }

    return <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",margin:"8rem"}}>
        <h2>حسابك الشخصي</h2>
        <button style={{marginTop:"2rem"}} className={classes.actionBtn} onClick={logoutHandler}>تسجيل الخروج</button>
    </div>
};

export default Account;


export async function getServerSideProps(context) {
    const session = await getSession({req: context.req});

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        };
    }

    return {
        props: {session},
    };
}