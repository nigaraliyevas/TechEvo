import React from 'react'
import Card from '../../HomePageSections/Card/Card'
import { cards } from '../../../../src/DataHome'
import styles from '../../../pages/HomePage/HomePage.module.scss'
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import 'swiper/css/navigation';


const MsSection = () => {


    const cards = useSelector((state) => state.pcCard.cards);

    // Determine the cards to display based on the count prop
    // const count = 4;
    // const displayedCards = count === null ? cards : cards.slice(0, count);
  
    return (
        <div>
        <div className={styles.cardMain}>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            loop={true}
            navigation={{ nextEl: '.swiper-button-next' }}
          >
            {cards.map((card) => (
              <SwiperSlide className={styles.swiperSlide} key={card.id}>
                <div className={styles.cardContainer}>
                  <Card card={card} />
                </div>
              </SwiperSlide>
            ))}
          <div className={`${styles.swiperNav} swiper-button-next`}></div>
          </Swiper>
        </div>
      </div>
    )
}

export default MsSection