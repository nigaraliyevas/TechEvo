import React, { useState } from "react";
import styles from "./RegisterPage.module.scss"
import RegisterPage2 from "./RegisterPage2";
export default function RegisterPage() {

    const [showPage2, setShowPage2] = useState(false)

    const validateEmail = () => {
        return true;
    }
    const openPage2 = () => {
        validateEmail() ? setShowPage2(true) : alert("Incorrect e-mail");
    }

    
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {showPage2 ? (<RegisterPage2/>) : (
                    <div className={styles.innerCont}>
                        <div className={styles.topText}>Qeydiyyat</div>
                        <div className={styles.infoText}>Daxil olmaq üçün aşağıdakı xanaları doldurun.</div>
                        <div className={styles.emailText}>E-poçt</div>
                        <div className={styles.inputContainer}>
                            <input 
                                className={styles.innerInput}
                                placeholder="salayevafidan2003@gmail" 
                                type="email"/>
                        </div>
                        <div 
                            className={styles.buttonGradient} 
                            onClick={openPage2}>
                                Davam et
                        </div>
                    </div>
                )}
            </div>
                
        </section>
    )
}