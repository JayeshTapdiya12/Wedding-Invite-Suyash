import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import "../styles/CoupleReveal.css";

const CoupleReveal = () => {
    const { scrollY } = useScroll();

    const springConfig = { stiffness: 80, damping: 25 };

    // Parallax
    const yRange = useTransform(scrollY, [0, 800], ["0%", "8%"]);
    const yParallax = useSpring(yRange, springConfig);

    const revealVariants = {
        hidden: { opacity: 0, scale: 1.1, filter: "blur(20px) brightness(0)" },
        visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px) brightness(0.8)",
            transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2, delayChildren: 0.8 },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
        },
    };

    return (
        <section className="reveal-section">
            {/* Background */}
            <motion.div
                className="reveal-bg-container"
                initial="hidden"
                animate="visible"
                variants={revealVariants}
            >
                <motion.div
                    style={{ y: yParallax }}
                    className="hero-poster-wrapper"
                >
                    <img
                        src="https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882994/WhatsApp_Image_2026-03-24_at_15.06.06_r2wfiw.jpg"
                        alt="Suyash and Aarushi"
                        className="reveal-poster-img"
                    />
                </motion.div>

                <div className="hero-gradient-overlay"></div>
            </motion.div>

            {/* Content */}
            <motion.div
                className="hero-content-reveal"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div className="shahi-badge" variants={textVariants}>
                    ESTD • 2026
                </motion.div>

                <motion.p
                    className="royal-production-text"
                    variants={textVariants}
                >
                    A SHAHI PRODUCTIONS ORIGINAL
                </motion.p>

                <div className="name-title-group">
                    <motion.h3
                        className="cinzel-title shimmer-text"
                        variants={textVariants}
                    >
                        SUYASH
                    </motion.h3>

                    <motion.span
                        className="heart-icon"
                        variants={textVariants}
                    >
                        💞
                    </motion.span>

                    <motion.h3
                        className="cinzel-title shimmer-text"
                        variants={textVariants}
                    >
                        AARUSHI
                    </motion.h3>
                </div>

                <motion.div className="shahi-meta-tags" variants={textVariants}>
                    <span>25–26 April, 2026</span>
                </motion.div>

                <motion.div className="shahi-meta-tags" variants={textVariants}>
                    <span>INDORE • ROYAL MARWARI DRAMA</span>
                </motion.div>

                <motion.div
                    className="hero-actions-container"
                    variants={textVariants}
                >
                    <button className="play-btn-royal">
                        ▶ Play Trailer
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CoupleReveal;