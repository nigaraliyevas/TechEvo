import React from 'react'
import Card from '../../HomePageSections/Card/Card'
import { cards } from '../../../../src/DataHome'
import styles from '../../../pages/HomePage/HomePage.module.scss'

const KbSection = () => {
    return (
        <div>
            <div className={styles.cardKb}>
                {
                    cards?.slice(5,9).map((card) => (
                        <Card key={card.id} card={card} />
                    ))
                }
            </div>
        </div>
    )
}

export default KbSection