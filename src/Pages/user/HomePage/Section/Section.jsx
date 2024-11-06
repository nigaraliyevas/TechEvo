import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import 'swiper/css/navigation';
import Card from './Card/Card';
import { products } from '../../../../products';
import styles from '../HomePage.module.scss';

const Section = ({ title }) => {
    // Swiper instance-i referens vasitəsilə saxlayırıq
    const swiperRef = useRef(null);

    return (
        <div>
            <div className={styles.title}>{title}</div>

            <div className={styles.cardMain}>
                <Swiper
                    effect="fade"
                    className={styles.swiper}
                    spaceBetween={30}
                    slidesPerView={3}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev", // Sol ox
                    }}
                    modules={[Autoplay, Navigation]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper; // Swiper instance-in referensə əlavə edirik
                    }}
                >
                    {products.map((card) => (
                        <SwiperSlide className={styles.swiperSlide} key={card.id}>
                            <div
                                className={styles.cardContainer}
                                onMouseEnter={() => swiperRef.current.autoplay.stop()} // Hover zamanı autoplay dayandırılır
                                onMouseLeave={() => swiperRef.current.autoplay.start()} // Hover-dən çıxanda autoplay başlatılır
                            >
                                <Card card={card} />
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className={`${styles.swiperNav} ${styles.swiperNavPrev} swiper-button-prev`}></div> {/* Sol ox */}
                    <div className={`${styles.swiperNav} ${styles.swiperNavNext} swiper-button-next`}></div>
                </Swiper>
            </div>
        </div>
    );
};

export default Section;
