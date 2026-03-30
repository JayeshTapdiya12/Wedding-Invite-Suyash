import React from 'react';
import { motion } from 'framer-motion';
import '../styles/StoryEpisodes.css';

const episodes = [
    {
        id: "01",
        title: "The First Glance",
        date: "NOV 2024",
        desc: "A chance meeting in the heart of the city that sparked a royal conversation and a lifetime of memories.",
        img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882956/WhatsApp_Image_2026-03-13_at_15.21.36_tqm9ny.jpg",
    },
    {
        id: "02",
        title: "The Imperial Promise",
        date: "JAN 2025",
        desc: "Under the starlit sky, two hearts decided to walk the path of gold together, promising a forever built on trust.",
        img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774883582/642ddf98-7e57-426c-932e-9bf96672968b_t47l5b.jpg",
    },
    {
        id: "03",
        title: "The Grand Premiere",
        date: "APRIL 2026",
        desc: "The highly anticipated final chapter where the red carpet rolls out and our forever officially begins.",
        img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882995/WhatsApp_Image_2026-03-24_at_15.06.09_2_pnk8rn.jpg",
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const StoryEpisodes = () => {
    return (
        <section className="episodes-section">
            <div className="episodes-container">

                <header className="ep-header-main">
                    <motion.span
                        initial={{ opacity: 0, tracking: "2px" }}
                        whileInView={{ opacity: 1, tracking: "5px" }}
                        className="subtitle"
                    >
                        THE CHRONICLES
                    </motion.span>
                    <h2 className="section-heading">Journey of Love</h2>
                    <div className="gold-accent-bar"></div>
                </header>

                <motion.div
                    className="episode-stack"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {episodes.map((ep) => (
                        <motion.div key={ep.id} className="episode-card" variants={itemVariants}>

                            <div className="ep-num-sidebar">
                                <span className="ep-num">{ep.id}</span>
                            </div>

                            <div className="ep-layout">
                                <div className="ep-image-wrapper">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        src={ep.img}
                                        alt={ep.title}
                                        className="ep-img-main"
                                    />
                                    <div className="image-overlay-vignette"></div>
                                </div>

                                <div className="ep-text-content">
                                    <div className="ep-top-row">
                                        <span className="ep-date-label">{ep.date}</span>
                                        <div className="gold-dot"></div>
                                        <span className="ep-category">CHAPTER</span>
                                    </div>
                                    <h3 className="ep-title-text">{ep.title}</h3>
                                    <p className="ep-description-text">{ep.desc}</p>

                                    <div className="ep-footer-line">
                                        <div className="progress-bar-bg">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                                className="progress-bar-fill"
                                            ></motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default StoryEpisodes;