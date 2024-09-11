import React, { useState } from "react";
import styles from "./RegisterPage.module.scss"
import RegisterPage2 from "./RegisterPage2";
export default function RegisterPage() {

    const [showPage2, setShowPage2] = useState(false)
    const [email, setEmail] = useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const openPage2 = () => {
        validateEmail(email) ? setShowPage2(true) : alert("Incorrect e-mail");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        openPage2();        
    }

    
    return (
            <div className={styles.container}>
                {showPage2 ? (<RegisterPage2/>) : (
                    <div className={styles.innerCont}>
                        <div className={styles.topText}>Qeydiyyat</div>
                        <div className={styles.infoText}>Daxil olmaq üçün aşağıdakı xanaları doldurun.</div>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.emailText}>E-poçt</div>
                            <div className={styles.inputContainer}>
                                <input 
                                    className={styles.innerInput}
                                    placeholder="salayevafidan2003@gmail" 
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                            </div>
                            <button 
                                type="submit"
                                className={styles.buttonGradient} 
                                onClick={openPage2}>
                                    Davam et
                            </button>
                        </form>
                    </div>
                )}
            </div>
    )
}