import React from "react";
import styles from "./RegisterPage2.module.scss";

export default function RegisterPage2() {
    return (
        <div className={styles.innerCont}>
            <div className={styles.topText}>Qeydiyyat</div>
            <div className={styles.infoText}>Daxil olmaq üçün aşağıdakı xanaları doldurun.</div>
            <div className={styles.emailText}>E-poçt</div>
        </div>
    )
}