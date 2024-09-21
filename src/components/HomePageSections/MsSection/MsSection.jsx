import React from 'react'
import Card from '../../HomePageSections/Card/Card'
import { cards } from '../../../../src/DataHome'
import styles from '../../../Pages/HomePage/HomePage.module.scss'

const MsSection = () => {
    return (
        <div>
            <div className={styles.cardMs}>
                {
                    cards?.slice(3, 7).map((card) => (
                        <Card key={card.id} card={card} />
                    ))
                }
            </div>
        </div>
    )
}

export default MsSection