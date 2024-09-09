import React from "react";
import styles from "./RegisterPage2.module.scss";
import passwordIcon from '../../public/images/Register/PasswordIcon.svg'
export default function RegisterPage2() {
    return (
        <div className={styles.innerCont}>
            <div className={styles.topText}>Qeydiyyat</div>
            <div className={styles.infoText}>Daxil olmaq üçün aşağıdakı xanaları doldurun.</div>
            <div className={styles.register2Container}>
                <div>
                    <div className={styles.subHeader}>Ad</div>
                    <div className={styles.inputContainer}>
                        <input 
                            className={styles.innerInput}
                            type="text"
                            placeholder="Ad"
                        />
                    </div>
                </div>

                <div>
                    <div className={styles.subHeader}>Soyad</div>
                    <div className={styles.inputContainer}>
                        <input 
                            className={styles.innerInput}
                            type="text"
                            placeholder="Soyad"
                        />
                    </div>
                </div>

                <div>
                    <div className={styles.subHeader}>Şifrə</div>
                    <div className={styles.inputContainer}>
                        <input 
                            className={styles.innerInput}
                            type="text"
                            placeholder="Şifrənizi daxil edin"
                        />
                        <div className={styles.icon}>
                            <img 
                                className={styles.iconImage}
                                src={passwordIcon} 
                                alt="ClosedEyeIcon" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className={styles.subHeader}>Şifrəni təkrarla</div>
                    <div className={styles.inputContainer}>
                        <input 
                            className={styles.innerInput}
                            type="text"
                            placeholder="Şifrənizi daxil edin"
                        />
                        <div className={styles.icon}>
                            <img 
                                className={styles.iconImage}
                                src={passwordIcon} 
                                alt="ClosedEyeIcon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.agreementBox}>
                <div className={styles.checkBoxContainer}>
                    <input 
                        className={styles.checkBoxInput}
                        type="checkbox" />
                    <span 
                        className={styles.customCheckmark}>
                    </span>
                </div>
                <div>İstifadəçi şərtləri ilə razıyam</div>
            </div>
            <div className={styles.btnGradient}>
                Qeydiyyatdan keç
            </div>
        </div>
    )
}