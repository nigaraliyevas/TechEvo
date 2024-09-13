import React from "react";
import Slider from "react-slick";
import styles from "../pages/HomePage/HomePage.module.scss";
import Slide1 from "../../public/assets/images/HomePage/Slider/NeonSlide1.png";
import Slide2 from "../../public/assets/images/HomePage/Slider/NeonSlide2.png";
import Slide3 from "../../public/assets/images/HomePage/Slider/NeonSlide3.png";

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
    };

    return (
        <div className={styles.sliderContainer}>
            <Slider arrows={false} {...settings}>
                <div className={styles.slide} style={{ paddingTop: "93px" }}>
                    <div style={{ position: "absolute", left: "10%" }} className={styles.container_top}>
                        <div className={styles.mainTitle}>
                            <h1>Empower Your Digital World</h1>
                            <p>Find the perfect computer, PC, or laptop for unbeatable performance</p>
                        </div>
                    </div>
                    <img style={{ width: "100%", height: "100%" }} src={Slide1} alt="Slide 1" />

                </div>
                <div className={styles.slide}>
                    <div style={{ position: "absolute", left: "10%" }} className={styles.container_top}>
                        <div className={styles.mainTitle}>
                            <h1>Laptops and PCs Built for You</h1>
                            <p>Upgrade with our top-tier computers, PCs, and laptops</p>
                        </div>
                    </div>
                    <img src={Slide2} alt="Slide 2" />
                </div>
                <div className={styles.slide}>
                    <div style={{ position: "absolute", left: "10%" }} className={styles.container_top}>
                        <div className={styles.mainTitle}>
                            <h1>Discover Your Perfect PC</h1>
                            <p>Upgrade with our top-tier computers,PCs, and laptops.</p>
                        </div>
                    </div>
                    <img src={Slide3} alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
};

export default SliderComponent;
