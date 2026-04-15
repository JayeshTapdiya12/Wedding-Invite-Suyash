import React from 'react';
import { motion } from 'framer-motion';
import '../styles/StoryEpisodes.css';

const episodes = [
    {
        id: "01",
        title: "The First Glance",
        desc: "A chance meeting in the heart of the city that sparked a royal conversation and a lifetime of memories.",
        img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882956/WhatsApp_Image_2026-03-13_at_15.21.36_tqm9ny.jpg",
        label: "Where It Began",
    },
    {
        id: "02",
        title: "The Imperial Promise",
        desc: "Under the starlit sky, two hearts decided to walk the path of gold together, promising a forever built on trust.",
        img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774883582/642ddf98-7e57-426c-932e-9bf96672968b_t47l5b.jpg",
        label: "The Pledge",
    },
    {
        id: "03",
        title: "The Grand Premiere",
        desc: "The highly anticipated final chapter where the red carpet rolls out and our forever officially begins.",
        img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882995/WhatsApp_Image_2026-03-24_at_15.06.09_2_pnk8rn.jpg",
        label: "The Beginning",
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.25, delayChildren: 0.15 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const StoryEpisodes = () => {
    return (
        <section className="episodes-section">

            {/* Ambient glow orbs */}
            <div className="ep-orb ep-orb--left" aria-hidden="true" />
            <div className="ep-orb ep-orb--right" aria-hidden="true" />

            <div className="episodes-container">

                {/* ── Header ── */}
                <header className="ep-header-main">
                    <motion.span
                        className="ep-subtitle"
                        initial={{ opacity: 0, letterSpacing: "2px" }}
                        whileInView={{ opacity: 1, letterSpacing: "8px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        THE CHRONICLES
                    </motion.span>

                    <motion.h2
                        className="ep-section-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                    >
                        Journey of Love
                    </motion.h2>

                    <motion.div
                        className="ep-ornament"
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <span className="ep-ornament-line" />
                        <span className="ep-ornament-diamond" />
                        <span className="ep-ornament-line" />
                    </motion.div>
                </header>

                {/* ── Cards ── */}
                <motion.div
                    className="episode-stack"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {episodes.map((ep, idx) => (
                        <motion.div
                            key={ep.id}
                            className="episode-card"
                            variants={cardVariants}
                        >
                            {/* Ghost number watermark */}
                            <span className="ep-watermark" aria-hidden="true">{ep.id}</span>

                            <div className="ep-layout">

                                {/* Image */}
                                <div className="ep-image-wrapper">
                                    <motion.img
                                        whileHover={{ scale: 1.07 }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        src={ep.img}
                                        alt={ep.title}
                                        className="ep-img-main"
                                    />
                                    <div className="ep-img-vignette" />
                                    <div className="ep-img-label">{ep.label}</div>
                                </div>

                                {/* Text */}
                                <div className="ep-text-content">
                                    <div className="ep-top-row">
                                        <span className="ep-dot" />
                                        <span className="ep-chapter-tag">Chapter {ep.id}</span>
                                    </div>

                                    <h3 className="ep-title-text">{ep.title}</h3>

                                    <div className="ep-title-underline" />

                                    <p className="ep-description-text">{ep.desc}</p>

                                    <div className="ep-progress-wrap">
                                        <motion.div
                                            className="ep-progress-fill"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.8, delay: 0.4 + idx * 0.15, ease: "easeInOut" }}
                                        />
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