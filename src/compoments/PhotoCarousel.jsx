import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation, Mousewheel } from 'swiper/modules';

// Swiper styles remain the same
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/PhotoCarousel.css';

const photos = [
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882995/WhatsApp_Image_2026-03-24_at_15.06.09_1_kzlvev.jpg", label: "Eternal Union", date: "Indore 2026" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882976/WhatsApp_Image_2026-03-24_at_15.06.00_ehz8vb.jpg", label: "Candid Joy", date: "April 2026" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882994/WhatsApp_Image_2026-03-24_at_15.06.07_enr0n1.jpg", label: "Soulmates", date: "April 2026" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882975/WhatsApp_Image_2026-03-24_at_15.05.59_1_q00uyt.jpg", label: "Royalty", date: "April 2026" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882975/WhatsApp_Image_2026-03-24_at_15.06.00_1_wbai8z.jpg", label: "Divine Moments", date: "April 2026" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882976/WhatsApp_Image_2026-03-24_at_15.05.59_n84voj.jpg", label: "Pure Love", date: "April 2026" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882994/WhatsApp_Image_2026-03-24_at_15.06.06_1_ci8l0o.jpg", label: "Togetherness", date: "April 2026" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882994/WhatsApp_Image_2026-03-24_at_15.06.05_yk0jkx.jpg", label: "Radiant Smiles", date: "April 2026" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882994/WhatsApp_Image_2026-03-24_at_15.06.06_r2wfiw.jpg", label: "Hand in Hand", date: "April 2026" }
];

const PhotoCarousel = () => {
    return (
        <section className="carousel-section">
            {/* Ambient Background Elements */}
            <div className="carousel-sparkles"></div>

            <div className="carousel-container">
                <header className="carousel-header">
                    <span className="carousel-subtitle">Capturing the Magic</span>
                    <h2 className="carousel-title">Eternal Frames</h2>
                    <div className="carousel-ornament">
                        <span className="ornament-line"></span>
                        <span className="ornament-icon">✦</span>
                        <span className="ornament-line"></span>
                    </div>
                </header>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    mousewheel={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 35,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Autoplay, Navigation, Mousewheel]}
                    className="wedding-swiper"
                >
                    {photos.map((photo, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-card">
                                {/* Corner Accents for a Royal Frame look */}
                                <div className="frame-corner top-left"></div>
                                <div className="frame-corner bottom-right"></div>

                                <div className="slide-inner">
                                    <img src={photo.url} alt={photo.label} loading="lazy" />

                                    <div className="slide-info-pane">
                                        <div className="text-reveal">
                                            <span className="info-date">{photo.date}</span>
                                            <h4 className="info-label">{photo.label}</h4>
                                        </div>
                                    </div>

                                    {/* Film strip decoration moved inside for better layering */}
                                    <div className="film-strip"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PhotoCarousel;