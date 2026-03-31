import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/countdown.css';

const CountdownUnit = ({ value, label, index }) => (
    <motion.div
        className="time-orbit-box"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
    >
        <div className="glass-circle">
            <svg className="progress-ring" viewBox="0 0 100 100">
                <circle className="ring-bg" cx="50" cy="50" r="40" />
                <motion.circle
                    className="ring-progress"
                    cx="50" cy="50" r="40"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: value / (label === 'DAYS' ? 100 : 60) }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </svg>
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={value}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    className="time-value"
                >
                    {value < 10 ? `0${value}` : value}
                </motion.span>
            </AnimatePresence>
        </div>
        <span className="time-label">{label}</span>
    </motion.div>
);

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const target = new Date("April 26, 2026 00:00:00").getTime();
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const diff = target - now;
            if (diff > 0) {
                setTimeLeft({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((diff / 1000 / 60) % 60),
                    seconds: Math.floor((diff / 1000) % 60),
                });
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="premium-countdown-section">
            <div className="royal-bg-overlay"></div>

            <div className="countdown-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="countdown-header"
                >
                    <span className="chronicle-subtitle">SAVE THE DATES</span>
                    <div className="wedding-date-banner">
                        <h2 className="display-date">April 25 <span className="ampersand">&</span> 26</h2>
                        <p className="display-year">2026</p>
                    </div>
                    <div className="royal-accent-line"></div>
                </motion.div>

                {/* CRITICAL: One row container */}
                <div className="timer-horizontal-row">
                    <CountdownUnit value={timeLeft.days} label="DAYS" index={0} />
                    <CountdownUnit value={timeLeft.hours} label="HOURS" index={1} />
                    <CountdownUnit value={timeLeft.minutes} label="MINS" index={2} />
                    <CountdownUnit value={timeLeft.seconds} label="SECS" index={3} />
                </div>

                <motion.div
                    className="couple-portrait-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                >
                    <div className="portrait-frame">
                        <img
                            src="https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882975/WhatsApp_Image_2026-03-24_at_15.05.57_kpnpim.jpg"
                            alt="The Couple"
                        />
                        <div className="frame-overlay-gold"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Countdown;