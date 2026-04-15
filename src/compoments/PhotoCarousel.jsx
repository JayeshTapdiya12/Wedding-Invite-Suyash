import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/PhotoCarousel.css';

const photos = [
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882995/WhatsApp_Image_2026-03-24_at_15.06.09_1_kzlvev.jpg", label: "Together" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882976/WhatsApp_Image_2026-03-24_at_15.06.00_ehz8vb.jpg", label: "Candid Smiles" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882994/WhatsApp_Image_2026-03-24_at_15.06.07_enr0n1.jpg", label: "Us" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882975/WhatsApp_Image_2026-03-24_at_15.05.59_1_q00uyt.jpg", label: "Portrait" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882975/WhatsApp_Image_2026-03-24_at_15.06.00_1_wbai8z.jpg", label: "A Moment" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882976/WhatsApp_Image_2026-03-24_at_15.05.59_n84voj.jpg", label: "Candid" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882994/WhatsApp_Image_2026-03-24_at_15.06.06_1_ci8l0o.jpg", label: "Together" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882994/WhatsApp_Image_2026-03-24_at_15.06.05_yk0jkx.jpg", label: "Portrait" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882994/WhatsApp_Image_2026-03-24_at_15.06.06_r2wfiw.jpg", label: "Love" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882976/WhatsApp_Image_2026-03-24_at_15.06.02_1_o8ilkm.jpg", label: "Candid" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882976/WhatsApp_Image_2026-03-24_at_15.06.02_oeejhh.jpg", label: "Laughter" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882976/WhatsApp_Image_2026-03-24_at_15.06.01_oyslws.jpg", label: "Portrait" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882995/WhatsApp_Image_2026-03-24_at_15.06.09_smbekv.jpg", label: "Together" }
];

const PhotoCarousel = () => {
    return (
        <section className="carousel-section">
            <div className="carousel-container">
                <header className="carousel-header">
                    <span className="carousel-subtitle">THE WEDDING GALLERY</span>
                    <h2 className="carousel-title">Eternal Frames</h2>
                    <div className="carousel-gold-line"></div>
                </header>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {photos.map((photo, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-inner">
                                <img src={photo.url} alt={photo.label} loading="lazy" />
                                <div className="slide-overlay">
                                    <span className="slide-label">{photo.label}</span>
                                </div>
                                {/* Film strip decorative edges */}
                                <div className="film-edge top"></div>
                                <div className="film-edge bottom"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PhotoCarousel;