import Image from "next/image";
import classes from '../../styles/ContactUs.module.css';
import {useRef, useState} from "react";
import Modal from "../../components/tools/Modal";

const Contactus = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const email = useRef();
    const phone = useRef();
    const message = useRef();

    async function handleSubmit(event) {
        event.preventDefault();
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const userEmail = email.current.value;
        const userPhone = phone.current.value;
        const userMessage = message.current.value;

        try {
            const response = await fetch("https://itqan-32c83-default-rtdb.firebaseio.com/messages.json", {
                method: "POST",
                body: JSON.stringify({firstName, lastName, userEmail, userPhone, userMessage}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
        } catch (e) {
            setShowModal(true);
            setModalTitle("حصل خطأ ...حاول مجددا");
            return;
        }
        setShowModal(true);
        setModalTitle("لقد قمنا باستقبال رسالتك وسيتم النظر فيها. شكرا لك");
        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        email.current.value = "";
        phone.current.value = "";
        message.current.value = "";
    }

    return <div className={classes.mainContainer}>
        <h1>تواصل معنا</h1>
        <p className={"mt-4"}>يمكنك التواصل معنا في اي وقت</p>
        <section className={classes.section}>

            <div className={classes.container}>
                <div className={classes.contactInfo}>
                    <div>
                        <h2>معلومات التواصل</h2>
                        <ul className={classes.info}>
                            <li>
                                <span><Image width={25} height={25} alt={""}
                                             src="https://i.ibb.co/cbnfrDF/location.png"/></span>
                                <span>
                                مصر - القاهرة<br/>
                                مدينة نصر<br/>

                            </span>
                            </li>
                            <li>
                                <span><Image width={25} height={25} alt={""}
                                             src="https://i.ibb.co/rbbwDkP/mail.png"/></span>
                                <span>ahmed.fathy1445@gmail.com</span>
                            </li>
                            <li>
                                <span><Image width={25} height={25} alt={""}
                                             src="https://i.ibb.co/DGGjsW7/call.png"/></span>
                                <span>+201019867911</span>
                            </li>
                        </ul>
                    </div>
                    <ul className={classes.sci}>
                        <li><a href=""><Image width={20} height={20} alt={""} src="https://i.ibb.co/vxjnyw0/1.png"/></a>
                        </li>
                        {/*<li><a href=""><Image width={20} height={20} alt={""} src="https://i.ibb.co/xsXK3zW/2.png"/></a></li>*/}
                        <li><a href=""><Image width={20} height={20} alt={""} src="https://i.ibb.co/5jFR49X/3.png"/></a>
                        </li>
                        {/*<li><a href=""><Image width={20} height={20} alt={""} src="https://i.ibb.co/1Msgr4S/4.png"/></a></li>*/}
                        {/*<li><a href=""><Image width={20} height={20} alt={""} src="https://i.ibb.co/GtnC2C8/5.png"/></a></li>*/}
                    </ul>

                </div>
                <form onSubmit={handleSubmit} className={classes.contactForm}>
                    <h2>أرسل لنا رسالة</h2>
                    <div className={classes.formBox}>
                        <div className={classes.inputBox + " " + "w50"}>
                            <input ref={firstNameRef} type="text" required
                                   onInvalid={F => F.target.setCustomValidity('نسيت أن تكتب اسمك !')}
                                   onInput={F => F.target.setCustomValidity('')}/>
                            <span>الاسم </span>
                        </div>
                        <div className={classes.inputBox + " " + "w50"}>
                            <input ref={lastNameRef} type="text" required
                                   onInvalid={F => F.target.setCustomValidity('نسيت أن تكتب لقبك !')}
                                   onInput={F => F.target.setCustomValidity('')}/>
                            <span>اللقب</span>
                        </div>
                        <div className={classes.inputBox + " " + "w50"}>
                            <input ref={email} type="email" required
                                   onInvalid={F => F.target.setCustomValidity('بريدك الالكتروني غير صحيح !')}
                                   onInput={F => F.target.setCustomValidity('')}/>
                            <span>بريدك الالكتروني</span>
                        </div>
                        <div className={classes.inputBox + " " + "w50"}>
                            <input ref={phone} type="tel" required
                                   onInvalid={F => F.target.setCustomValidity('نسيت أن تكتب رقم هاتفك !')}
                                   onInput={F => F.target.setCustomValidity('')}/>
                            <span>رقم هاتفك</span>
                        </div>
                        <div className={classes.inputBox + " " + "w100"}>
                            <textarea ref={message} required
                                      onInvalid={F => F.target.setCustomValidity('نسيت أن تكتب رسالتك !')}
                                      onInput={F => F.target.setCustomValidity('')}></textarea>
                            <span>اكتب رسالتك هنا...</span>
                        </div>
                        <div className={classes.inputBox + " " + "w100"}>
                            <input type="submit" value="إرسال"/>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        {showModal ? <Modal
            onClose={() => {
                setShowModal(false);
            }}
            title={modalTitle}
            show={showModal}>
        </Modal> : null}
    </div>
};


export default Contactus;