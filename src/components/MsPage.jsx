import React from 'react'
import Card from './Card'
import { cards } from '../DataHome'
import styles from '../pages/HomePage/HomePage.module.scss'

const MsPage = () => {
    return (
        <div>
            <div className={styles.cardMs}>
                {
                    cards?.slice(3,6).map((card) => (
                        <Card key={card.id} card={card} />
                    ))
                }
            </div>
        </div>
    )
}

export default MsPage