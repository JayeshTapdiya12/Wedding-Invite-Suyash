import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "../styles/CoupleReveal.css";

const CoupleReveal = () => {
    const { scrollY } = useScroll();

    // Smoother Spring-based parallax to prevent stuttering
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const yRange = useTransform(scrollY, [0, 800], ["0%", "15%"]);
    const scaleRange = useTransform(scrollY, [0, 800], [1, 1.12]);

    const yParallax = useSpring(yRange, springConfig);
    const scaleImage = useSpring(scaleRange, springConfig);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="reveal-section">
            {/* Background Layer */}
            <div className="reveal-bg-container">
                <motion.div
                    style={{ y: yParallax, scale: scaleImage }}
                    className="hero-poster-wrapper"
                >
                    {/* <img
                        src="/assests/image.png"
                        alt="Suyash and Aarushi"
                        className="reveal-poster-img"
                    /> */}

                    <img
                        src="https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882994/WhatsApp_Image_2026-03-24_at_15.06.06_r2wfiw.jpg"
                        alt="Suyash and Aarushi"
                        className="reveal-poster-img"
                    />
                </motion.div>

                {/* The "Cinema Texture" Mesh */}
                <div className="imperial-overlay-mesh"></div>

                {/* The Deep Bottom Gradient for Text Legibility */}
                <div className="hero-gradient-shimmer"></div>
            </div>

            {/* Content Layer */}
            <motion.div
                className="hero-content-reveal"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <motion.div className="shahi-badge" variants={childVariants}>
                    <span>ESTD • 2026</span>
                </motion.div>

                <motion.p className="royal-production-text" variants={childVariants}>
                    A SHAHI PRODUCTIONS ORIGINAL
                </motion.p>

                <motion.h1 className="cinzel-title shimmer-text" variants={childVariants}>
                    SUYASH <span className="ampersand">&</span> AARUSHI
                </motion.h1>

                <motion.div className="shahi-meta-tags" variants={childVariants}>
                    <span className="tag-location">INDORE</span>
                    <span className="shahi-dot"></span>
                    <span className="tag-genre">ROYAL MARWARI DRAMA</span>

                </motion.div>

                <motion.div className="hero-actions-container" variants={childVariants}>
                    <motion.button
                        whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="play-btn-royal"
                    >
                        ▶ Play Trailer
                    </motion.button>
                    <motion.button
                        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="info-btn-glass"
                    >
                        ⓘ More Info
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Elegant Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="scroll-indicator"
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default CoupleReveal;