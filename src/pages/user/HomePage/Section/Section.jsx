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
    // Access the `cards` from the Redux store using useSelector

    // Determine the cards to display based on the count prop

    return (
        <div>
            <div className={styles.title}>{title}</div>

            <div className={styles.cardMain}>
                <Swiper
                    effect='fade'
                    className={styles.swiper}
                    spaceBetween={30}
                    slidesPerView={3}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev', // Sol ox
                    }}
                    modules={[Autoplay, Navigation]}
                >
                    {products.map((card) => (
                        <SwiperSlide className={styles.swiperSlide} key={card.id}>
                            <div className={styles.cardContainer}>
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