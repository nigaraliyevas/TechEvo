import React from 'react'
import Card from './Card'
import { cards } from '../DataHome'
import styles from '../pages/HomePage/HomePage.module.scss'

const KbSection = () => {
    return (
        <div>
            <div className={styles.cardKb}>
                {
                    cards?.slice(6,9).map((card) => (
                        <Card key={card.id} card={card} />
                    ))
                }
            </div>
        </div>
    )
}

export default KbSection