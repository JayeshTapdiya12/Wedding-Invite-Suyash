import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/countdown.css';

const CountdownUnit = ({ value, label, index, max }) => {
    const progress = value / max;
    const circumference = 2 * Math.PI * 40; // r=40

    return (
        <motion.div
            className="time-orbit-box"
            initial={{ opacity: 0, y: 24, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.8, ease: "easeOut" }}
        >
            <div className="glass-circle">
                <svg className="progress-ring" viewBox="0 0 100 100">
                    {/* Track */}
                    <circle className="ring-bg" cx="50" cy="50" r="40" />
                    {/* Tick marks */}
                    {Array.from({ length: 12 }).map((_, i) => {
                        const angle = (i / 12) * 360;
                        const rad = (angle - 90) * (Math.PI / 180);
                        const x1 = 50 + 44 * Math.cos(rad);
                        const y1 = 50 + 44 * Math.sin(rad);
                        const x2 = 50 + 40 * Math.cos(rad);
                        const y2 = 50 + 40 * Math.sin(rad);
                        return (
                            <line
                                key={i}
                                x1={x1} y1={y1} x2={x2} y2={y2}
                                stroke="rgba(198,161,90,0.18)"
                                strokeWidth="1"
                            />
                        );
                    })}
                    {/* Progress arc */}
                    <motion.circle
                        className="ring-progress"
                        cx="50" cy="50" r="40"
                        strokeDasharray={circumference}
                        animate={{
                            strokeDashoffset: circumference * (1 - progress)
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                </svg>

                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={value}
                        className="time-value"
                        initial={{ y: 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -8, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {String(value).padStart(2, "0")}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span className="time-label">{label}</span>
        </motion.div>
    );
};

/* Separator dot between units */
const Separator = () => (
    <div className="time-separator" aria-hidden="true">
        <span />
        <span />
    </div>
);

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const target = new Date("April 26, 2026 16:00:00").getTime();
        const tick = () => {
            const diff = target - Date.now();
            if (diff > 0) {
                setTimeLeft({
                    days: Math.floor(diff / 86400000),
                    hours: Math.floor((diff / 3600000) % 24),
                    minutes: Math.floor((diff / 60000) % 60),
                    seconds: Math.floor((diff / 1000) % 60),
                });
            }
        };
        tick();
        const timer = setInterval(tick, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="premium-countdown-section">
            <div className="royal-bg-overlay" aria-hidden="true" />

            {/* Decorative corner lines */}
            <div className="corner-deco corner-deco--tl" aria-hidden="true" />
            <div className="corner-deco corner-deco--br" aria-hidden="true" />

            <div className="countdown-content">

                {/* ── Header ── */}
                <motion.div
                    className="countdown-header"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    <span className="chronicle-subtitle">Save The Date</span>
                    <div className="wedding-date-banner">
                        <h2 className="display-date">
                            April 25 <span className="ampersand">&amp;</span> 26
                        </h2>
                        <p className="display-year">2 0 2 6</p>
                    </div>
                    <div className="royal-divider">
                        <span className="royal-divider-line" />
                        <span className="royal-divider-gem" />
                        <span className="royal-divider-line" />
                    </div>
                </motion.div>

                {/* ── Timer ── */}
                <div className="timer-horizontal-row">
                    <CountdownUnit value={timeLeft.days} label="Days" index={0} max={365} />
                    <Separator />
                    <CountdownUnit value={timeLeft.hours} label="Hours" index={1} max={24} />
                    <Separator />
                    <CountdownUnit value={timeLeft.minutes} label="Minutes" index={2} max={60} />
                    <Separator />
                    <CountdownUnit value={timeLeft.seconds} label="Seconds" index={3} max={60} />
                </div>

                {/* ── Portrait ── */}
                <motion.div
                    className="couple-portrait-container"
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    <div className="portrait-frame">
                        <img
                            src="https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882975/WhatsApp_Image_2026-03-24_at_15.05.57_kpnpim.jpg"
                            alt="The Couple"
                        />
                        <div className="frame-overlay-gold" />
                        {/* corner accents */}
                        <span className="portrait-corner portrait-corner--tl" />
                        <span className="portrait-corner portrait-corner--tr" />
                        <span className="portrait-corner portrait-corner--bl" />
                        <span className="portrait-corner portrait-corner--br" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Countdown;