import React, { useState } from "react";
import styles from "./RegisterPage.module.scss"
import RegisterPage2 from "./RegisterPage2";
import "../../components/css/Button.scss";
export default function RegisterPage() {

    const [showPage2, setShowPage2] = useState(false)
    const [email, setEmail] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPage2(true)        
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
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                            </div>
                            <button 
                                type="submit"
                                className="Btn"
                               >
                                    Davam et
                            </button>
                        </form>
                    </div>
                )}
            </div>
    )
}