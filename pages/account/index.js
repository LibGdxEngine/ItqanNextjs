import {useSession, getSession, signOut} from "next-auth/react";
import {useEffect, useState} from "react";

const Account = (props) => {

    function logoutHandler() {
        signOut();
    }

    return <div>
        <button onClick={logoutHandler}>تسجيل الخروج</button>
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