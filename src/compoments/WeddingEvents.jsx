import React from 'react';
import { motion } from 'framer-motion';
import '../styles/WeddingEvents.css';

const weddingEvents = [
    { id: "01", type: "Ganesh Sthapna", name: "Divine Beginnings", date: "April 25, 2026", time: "7:00 AM", accent: "#b5935b", img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885905/page_04_s39r1l.png" },
    { id: "02", type: "Haldi Carnival", name: "Tradition & Turmeric", date: "April 25, 2026", time: "10:30 AM", accent: "#FFC107", img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885904/page_05_xzegvt.png" },
    { id: "03", type: "Mayyra", name: "Henna & Happiness", date: "April 25, 2026", time: "03:00 PM", accent: "#ab7530", img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885909/page_06_bjizdf.png" },
    { id: "04", type: "Saggai", name: "The Ring Ceremony", date: "April 25, 2026", time: "04:30 PM", accent: "#00CED1", img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885904/page_07_niymic.png" },
    { id: "05", type: "Sangeet Sandhya", name: "Rhythms of Joy", date: "April 19, 2026", time: "08:30 PM", accent: "#8A2BE2", img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885906/page_08_xznyuy.png" },
    { id: "06", type: "Nikasi & Baarat", name: "The Grand Procession", date: "April 20, 2026", time: "09:00 AM", accent: "#FF4500", img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885906/page_09_ewnthq.png" },
    { id: "07", type: "Wedding Ceremony", name: "The Sacred Union", date: "April 20, 2026", time: "01:00 PM", accent: "#D4AF37", img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885907/page_10_a9p6hb.png" },
    { id: "08", type: "Grand Reception", name: "A Royal Finale", date: "April 21, 2026", time: "08:00 PM", accent: "#b5935b", img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885910/page_11_qf3cxt.png" }
];

const WeddingEvents = () => {
    return (
        <section className="v-timeline-section">
            <div className="v-timeline-header">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="v-subtitle"
                >
                    THE CELEBRATIONS
                </motion.span>
                <h2 className="v-title">Wedding Itinerary</h2>
                <div className="v-gold-line"></div>
            </div>

            <div className="v-timeline-container">
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 2, ease: "linear" }}
                    className="v-main-line"
                ></motion.div>

                {weddingEvents.map((event, index) => (
                    <div key={event.id} className={`v-event-item ${index % 2 !== 0 ? 'v-reverse' : ''}`}>

                        <motion.div
                            className="v-event-card"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, type: "spring", damping: 20 }}
                        >
                            <div className="v-card-inner">
                                <div className="v-card-img-full">
                                    <img src={event.img} alt={event.name} />
                                </div>

                                <div className="v-card-info">
                                    <span className="v-id" style={{ color: event.accent }}>{event.id}</span>
                                    <h4 className="v-label" style={{ color: event.accent }}>{event.type}</h4>
                                    <h3 className="v-name">{event.name}</h3>
                                    <div className="v-meta">
                                        <p><span>📅</span> {event.date}</p>
                                        <p><span>⏰</span> {event.time}</p>
                                        <p><span>📍</span> Hotel HR Green, MR 10, Indore</p>
                                    </div>
                                    <button className="v-btn" style={{ borderColor: event.accent, color: event.accent }}>
                                        View Style Guide
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        <div className="v-dot-container">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                className="v-dot"
                                style={{ backgroundColor: event.accent }}
                            >
                                <div className="v-dot-pulse" style={{ backgroundColor: event.accent }}></div>
                            </motion.div>
                        </div>

                        <div className="v-empty-space"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WeddingEvents;