import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Card from './Card/Card';
import { products } from '../../../../products';
import styles from '../HomePage.module.scss';

const Section = ({ title }) => {
    const swiperRef = useRef(null);

    // Ekran ölçüsünü saxlamaq üçün state
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    // Ekran ölçüsünü izləmək üçün useEffect
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div className={styles.title}>{title}</div>

            <div className={styles.cardMain}>
                {isMobile ? (
                    // Mobil cihazlarda kartları 1.5 card göstərəcək sadə düzən
                    <div className={styles.mobileCards}>
                        {products.map((card) => (
                            <div className={styles.cardContainer} key={card.id}>
                                <Card card={card} />
                            </div>
                        ))}
                    </div>
                ) : (
                    // Desktop üçün Swiper
                    <Swiper
                        effect="fade"
                        className={styles.swiper}
                        spaceBetween={30}
                        slidesPerView={3}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        modules={[Autoplay, Navigation]}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                    >
                        {products.map((card) => (
                            <SwiperSlide className={styles.swiperSlide} key={card.id}>
                                <div
                                    className={styles.cardContainer}
                                    onMouseEnter={() => swiperRef.current.autoplay.stop()}
                                    onMouseLeave={() => swiperRef.current.autoplay.start()}
                                >
                                    <Card card={card} />
                                </div>
                            </SwiperSlide>
                        ))}
                        {/* Kənar oxlar */}
                        <div className={`${styles.swiperNav} ${styles.swiperNavPrev} swiper-button-prev`}></div>
                        <div className={`${styles.swiperNav} ${styles.swiperNavNext} swiper-button-next`}></div>
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default Section;
