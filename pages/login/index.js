import LoginForm from "../../components/login/LoginForm";

export default function Login() {
    return <div style={{
        margin: "auto",
        width: "20%",
        border: "0px none green",
        padding: "0px",
        marginBottom: "20%",
        marginTop: "3%"
    }}>
        <div>
            <h3 style={{textAlign: "center", direction: "rtl", width: "350px", marginBottom:"5%"}}>احجز مكانك في عالم
                البرمجة</h3>
        </div>

        <LoginForm/>
    </div>
};