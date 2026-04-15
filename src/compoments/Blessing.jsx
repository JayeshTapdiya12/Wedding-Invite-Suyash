import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Blessing.css";

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

/* ── Heart burst particles ───────────────────────────── */
const HEART_VARIANTS = ["❤", "🌸", "✨", "💐", "❤"];
const heartConfigs = [...Array(18)].map((_, i) => ({
    symbol: HEART_VARIANTS[i % HEART_VARIANTS.length],
    x: (Math.random() - 0.5) * 340,
    rotate: (Math.random() - 0.5) * 100,
    scale: 1 + Math.random() * 1.4,
    delay: Math.random() * 0.4,
}));

const Blessings = () => {
    const form = useRef(null);
    const [submitted, setSubmitted] = useState(false);
    const [showHearts, setShowHearts] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_dhqe5b4", "template_kojq5ca", form.current, "irbr7SFLiqDuVojKa")
            .then(() => {
                setSubmitted(true);
                setShowHearts(true);
                setTimeout(() => {
                    setSubmitted(false);
                    setShowHearts(false);
                }, 3200);
                form.current.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
            });
    };

    return (
        <section className="blessings-section">
            <div className="blessings-overlay" />

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

            <div className="blessings-container">
                {/* Header */}
                <motion.div
                    className="blessings-header"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="script-accent">With Love &amp; Joy</span>
                    <h2 className="blessings-title">Send Your Blessings</h2>
                    <FloralDivider />
                </motion.div>

                {/* Card */}
                <motion.div
                    className="blessings-card-wrapper"
                    initial={{ opacity: 0, y: 48 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 1, ease: "easeOut" }}
                >
                    <form ref={form} onSubmit={sendEmail} className="blessings-glass-card">
                        <div className="input-group">
                            <label htmlFor="blessing-name">Your Name</label>
                            <input
                                id="blessing-name"
                                type="text"
                                name="user_name"
                                placeholder="Enter your name"
                                required
                            />
                            <div className="input-underline" />
                        </div>

                        <div className="input-group">
                            <label htmlFor="blessing-message">Your Message</label>
                            <textarea
                                id="blessing-message"
                                name="message"
                                placeholder="Pour your heart out…"
                                rows={5}
                                required
                            />
                            <div className="input-underline" />
                        </div>

                        <div className="btn-submit-wrapper">
                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.button
                                        key="sent"
                                        type="button"
                                        className="btn-sent"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        disabled
                                    >
                                        ✦ Blessings Received with Love ✦
                                    </motion.button>
                                ) : (
                                    <motion.button
                                        key="submit"
                                        type="submit"
                                        className="btn-submit"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        Send Wishes
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </div>
                    </form>
                </motion.div>

                {/* Heart burst */}
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
            </div>
        </section>
    );
};

export default Blessings;