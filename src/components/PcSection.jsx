import React from 'react'
import Card from './Card'
import { cards } from '../DataHome'
import styles from '../pages/HomePage/HomePage.module.scss'

const PcSection = () => {
    return (
        <div>
            <div className={styles.cardMain}>
                {
                    cards?.slice(0, 3).map((card) => (
                        <Card key={card.id} card={card} />
                    ))
                }
            </div>
        </div>
    )
}

export default PcSection