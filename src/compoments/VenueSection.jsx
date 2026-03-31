import React from 'react';
import { motion } from 'framer-motion';
import '../styles/VenueSection.css';

const VenueSection = () => {
    const venueData = {
        name: "Hotel HR Greens",
        address: "MR 10 Rd, near Toll Bridge, Kumedi, Indore, MP 453555",
        description: "A majestic setting for our royal celebrations, featuring sprawling lush lawns and elegant banquet halls designed for grand festivities.",
        mapLink: "https://maps.app.goo.gl/N8gLzH19XLbdsZuZ9",
        venueImage:
            "https://lh3.googleusercontent.com/gps-cs-s/AHVAwercOk2GMQ6fX-QLcRBh7XnOAg2SdFDld1i_RX4m3CQpYINeOVzwI-0m-4DQpPK_qnNiDnU8eECqBYDuLdb_m4WZXECdh4DmDw9WGVRqhFpzirGF6aGKUrDt_wWBXB5QfDJ-44I7OQ=w426-h240-k-no",
    };

    return (
        <section className="venue-portal-root">
            {/* Common background from your theme */}
            <div className="venue-parchment-texture"></div>

            <div className="venue-portal-container">
                <motion.div
                    className="venue-portal-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* 1. Portal Header */}
                    <header className="portal-header">
                        <h2 className="v-portal-heading shimmer-text">The Destination</h2>
                        <div className="v-divider"></div>
                    </header>

                    {/* 2. Unified Content Body */}
                    <div className="portal-inner">
                        {/* Photo Side */}
                        <div className="portal-photo">
                            <img src={venueData.venueImage} alt="Venue" className="portal-img" />
                            <div className="v-image-soft-glow"></div>

                            {/* Animated Map Pin Inside the Photo */}
                            <motion.div
                                className="unified-floating-pin"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                📍
                            </motion.div>
                        </div>

                        {/* Text Side (Glassmorphism effect) */}
                        <div className="portal-content">
                            <h3 className="ep-title-text">{venueData.name}</h3>
                            <p className="v-description-text">{venueData.description}</p>

                            <div className="v-metadata-stack">
                                <div className="v-meta-item">
                                    <span className="v-detail-label">LOCATION</span>
                                    <p className="v-detail-value">{venueData.address}</p>
                                </div>
                                <div className="v-meta-item">
                                    <span className="v-detail-label">PROXIMITY</span>
                                    <p className="v-detail-value">Super Corridor / MR 10 Area</p>
                                </div>
                            </div>

                            <motion.a
                                href={venueData.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="portal-btn-royal"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(181, 147, 91, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                ▶ Navigate to Venue
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VenueSection;