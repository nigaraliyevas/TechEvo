import React, { useState } from "react";
import styles from "./RegisterPage.module.scss"
import RegisterPage2 from "./RegisterPage2";
import "../../components/css/Button.scss";
// import axios from "axios";
export default function RegisterPage() {

    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showPage2, setShowPage2] = useState(false)
    const [email, setEmail] = useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return emailRegex.test(email);
      };


      const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if(validateEmail(newEmail)) {
            setError('');
        }
      }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSubmitted(true);
        
        if (!validateEmail(email)) {
            setError('Düzgün E-poçt Ünvanından istifadə edilməyib');
            return;
        }


        setError('');
        // localStorage.setItem('email', email);
        // setShowPage2(true);
        
        
        try {
            console.log(email);
            
            const response = await fetch('https://c82b-5-133-233-247.ngrok-free.app/api/v1/auth/store-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            });
            console.log(response);
            
            if (response.ok) { 
                localStorage.setItem('email', email);
                // setError('');
                setShowPage2(true);
            } else {
                const errorText = await response.text(); // Read the response as text
                setError(`Failed to store email: ${errorText}`);
            }
        } catch (err) {
            setError('An error occurred while storing the email');
            console.error(err);
        }
        
    };
    
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
                                    placeholder="E-poçt" 
                                    type="email"
                                    value={email}
                                    required
                                    onChange={handleEmailChange}
                                    />
                            </div>
                            {submitted && error && <div className={styles.errorMessage}>{error}</div>}
                            <button 
                                type="submit"
                                className={`${styles.btnResponsive} Btn`}
                               >
                                    Davam et
                            </button>
                        </form>
                    </div>
                )}
            </div>
    )
}