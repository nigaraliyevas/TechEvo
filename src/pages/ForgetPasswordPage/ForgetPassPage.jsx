import styles from "../ForgetPasswordPage/ForgetPassPage.module.scss"

function ForgetPassPage() {
    return (
        <>

            <section className={styles.ForgetPass}>
                <div className={styles.forgetPassword_container}>
                <div className={styles.ForgetPassContainer}>
                    <div className={styles.ForgetPassContainerUp}>
                        <h1>
                            Şifrəni unutmusan?
                        </h1>
                        <h6>
                            Zəhmət olmasa e-poçt adresinizi daxil edin.
                        </h6>
                    </div>
                    <div className={styles.ForgetPassContainerBottom}>
                        <div className={styles.Form}>
                            <form action="">
                                <label htmlFor="mail">E-poçt</label>
                                <input id="mail" type="text" placeholder="E-poçt" />
                            </form>
                            <div className={styles.btn}>
                                <button>Göndər</button>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </section>

        </>
    )
}

export default ForgetPassPage