import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    AnimatePresence
} from "framer-motion";
import "../styles/CoupleReveal.css";
import { useState } from "react";

const CoupleReveal = () => {
    const { scrollY } = useScroll();
    const [showHearts, setShowHearts] = useState(false);
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

    /* ── Petal config ─────────────────────────────────────── */
    const PETALS = Array.from({ length: 18 }, (_, i) => ({
        id: i,
        size: 8 + Math.random() * 10,
        left: Math.random() * 100,
        delay: Math.random() * 14,
        duration: 10 + Math.random() * 10,
        hue: Math.random() > 0.5 ? "#d4829a" : "#e8b4c4",
    }));

    /* ── Floral SVG ornament ─────────────────────────────── */
    const FloralDivider = () => (
        <div className="blessings-divider">
            <div className="blessings-divider-line" />
            <div className="blessings-divider-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C10.5 5.5 7 6 7 9c0 2.8 2.2 5 5 5s5-2.2 5-5c0-3-3.5-3.5-5-7z" opacity="0.9" />
                    <path d="M12 14c0 3 1.5 5.5 0 8-1.5-2.5 0-5 0-8z" opacity="0.6" />
                </svg>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleX(-1)" }}>
                    <path d="M12 2C10.5 5.5 7 6 7 9c0 2.8 2.2 5 5 5s5-2.2 5-5c0-3-3.5-3.5-5-7z" opacity="0.9" />
                    <path d="M12 14c0 3 1.5 5.5 0 8-1.5-2.5 0-5 0-8z" opacity="0.6" />
                </svg>
            </div>
            <div className="blessings-divider-line" />
        </div>
    );

    const HEART_VARIANTS = ["❤", "🌸", "✨", "💐", "❤"];
    const heartConfigs = [...Array(18)].map((_, i) => ({
        symbol: HEART_VARIANTS[i % HEART_VARIANTS.length],
        x: (Math.random() - 0.5) * 340,
        rotate: (Math.random() - 0.5) * 100,
        scale: 1 + Math.random() * 1.4,
        delay: Math.random() * 0.4,
    }));

    return (
        <section className="reveal-section">
            {/* Background */}
            {/* Falling petals */}
            <div className="blessings-petals" aria-hidden="true">
                {PETALS.map((p) => (
                    <div
                        key={p.id}
                        className="petal"
                        style={{
                            left: `${p.left}%`,
                            width: p.size,
                            height: p.size * 1.3,
                            background: p.hue,
                            animationDelay: `${p.delay}s`,
                            animationDuration: `${p.duration}s`,
                        }}
                    />
                ))}
            </div>
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

                </motion.div>
            </motion.div>
            <AnimatePresence>
                {showHearts && (
                    <div className="heart-burst-container" aria-hidden="true">
                        {heartConfigs.map((h, i) => (
                            <motion.div
                                key={i}
                                className="floating-heart"
                                initial={{ y: 0, x: 0, opacity: 1, scale: 0.4 }}
                                animate={{
                                    y: -380,
                                    x: h.x,
                                    opacity: 0,
                                    scale: h.scale,
                                    rotate: h.rotate,
                                }}
                                transition={{
                                    duration: 2.6,
                                    ease: "easeOut",
                                    delay: h.delay,
                                }}
                            >
                                {h.symbol}
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CoupleReveal;