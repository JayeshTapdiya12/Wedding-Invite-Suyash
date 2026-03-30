import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/countdown.css';

const FlipUnit = ({ value, unit }) => {
    return (
        <div className="mini-flip-box">
            <div className="glass-card-frame">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={value}
                        initial={{ rotateX: 90, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        exit={{ rotateX: -90, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="glass-card"
                    >
                        <span className="glass-num">{value < 10 ? `0${value}` : value}</span>
                    </motion.div>
                </AnimatePresence>
                <div className="glass-divider"></div>
            </div>
            <span className="glass-label">{unit}</span>
        </div>
    );
};

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const target = new Date("April 26, 2026 15:00:00").getTime();
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
        <section className="sandwich-layout">
            {/* 1. TOP CONTENT */}
            <motion.div
                className="top-content"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <p className="sub-heading">SAVE THE DATE</p>
                <h2 className="main-heading">THE CELEBRATION BEGINS</h2>
            </motion.div>

            {/* 2. MIDDLE PHOTO */}
            <div className="middle-photo-container">
                <img
                    src="/assests/couple-photo.png"
                    alt="Couple"
                    className="framed-photo"
                />
            </div>

            {/* 3. BOTTOM TIMER */}
            <div className="bottom-timer-container">
                <p className="timer-tag">COUNTING EVERY SECOND UNTIL WE SAY 'I DO'</p>
                <div className="mini-flip-grid">
                    <FlipUnit value={timeLeft.days} unit="DAYS" />
                    <FlipUnit value={timeLeft.hours} unit="HRS" />
                    <FlipUnit value={timeLeft.minutes} unit="MINS" />
                    <FlipUnit value={timeLeft.seconds} unit="SECS" />
                </div>
            </div>
        </section>
    );
};

export default Countdown;