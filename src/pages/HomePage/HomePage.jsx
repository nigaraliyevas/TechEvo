import React from 'react'
import styles from "./HomePage.module.scss"
import PcPage from '../../components/PcPage'
import MsPage from '../../components/MsPage'
import KbPage from '../../components/KbPage'




const HomePage = () => {
    return (

        <>
            <section id={styles.bg}>
                <div className={styles.container}>
                    <div className={styles.mainTitle}>
                        <h1>Empower Your Digital World</h1>
                        <p>Find the perfect computer, PC, or laptop for unbeatable performance</p>
                    </div>
                </div>


                </section>
               
                
                
                <section id={styles.specialselected} >
                    <div className={styles.container}>
                        <h3>Xüsusi Seçimlər</h3>
                        <div className={styles.pc}>PC</div>
                        <PcPage/>
                    
                        <div className={styles.mouse}>Mouse</div>
                      <MsPage/>
                        
                        <div className={styles.keyboard}>Keyboard</div>
                        <KbPage/>
                      


                    </div>

                </section>
              



           

        </>
    )
}

export default HomePage