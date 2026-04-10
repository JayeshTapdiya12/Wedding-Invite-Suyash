import React from 'react';
import { motion } from 'framer-motion';
import '../styles/WeddingEvents.css';

const weddingEvents = [
    {
        id: "01",
        type: "Ganesh Sthapna",
        name: "Divine Beginnings",
        date: "April 25, 2026",
        time: "7:00 AM",
        accent: "#b5935b",
        img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885905/page_04_s39r1l.png",
        video: "https://res.cloudinary.com/dwsv6ggaa/video/upload/v1774972910/From_Main_Klickpin_CF-_ganesha_ji_-_1L2fmSYSf_i9p08h.mp4"
    },
    {
        id: "02",
        type: "Haldi Carnival",
        name: "Tradition & Turmeric",
        date: "April 25, 2026",
        time: "10:30 AM",
        accent: "#FFC107",
        img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885904/page_05_xzegvt.png",
        video: "https://res.cloudinary.com/dwsv6ggaa/video/upload/v1774972901/From_Main_Klickpin_CF-_Bright_Festive_Haldi_Ceremony_Decor_Ideas_Colorful_Fun_-_1X6sNJLSD_1_jkgil8.mp4"
    },
    {
        id: "03",
        type: "Mayyra",
        name: "Bhai  & Bhen Ki Jodi",
        date: "April 25, 2026",
        time: "03:00 PM",
        accent: "#ab8b21",
        img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885909/page_06_bjizdf.png",
        video: "https://res.cloudinary.com/dwsv6ggaa/video/upload/v1774977105/Untitled_design_2_thwq1m.mp4"
    },
    {
        id: "04",
        type: "Saggai",
        name: "The Ring Ceremony",
        date: "April 25, 2026",
        time: "04:30 PM",
        accent: "#00CED1",
        img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885904/page_07_niymic.png",
        video: "https://res.cloudinary.com/dwsv6ggaa/video/upload/v1774974140/Untitled_design_sixh5r.mp4"
    },
    {
        id: "05",
        type: "Sangeet Sandhya",
        name: "Rhythms of Joy",
        date: "April 25, 2026",
        time: "08:30 PM",
        accent: "#8A2BE2",
        img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885906/page_08_xznyuy.png",
        video: "https://res.cloudinary.com/dwsv6ggaa/video/upload/v1774972791/From_Main_Klickpin_CF-_Sangeet_couple_dance_invitation_video___3D_CGI_Indian_Wedding_Couple_Dance_-_3clwdC5PC_tncrjd.mp4"
    },
    {
        id: "06",
        type: "Nikasi & Baarat",
        name: "The Grand Procession",
        date: "April 26, 2026",
        time: "09:00 AM",
        accent: "#FF4500",
        img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885906/page_09_ewnthq.png",
        video: "https://res.cloudinary.com/dwsv6ggaa/video/upload/v1774973725/From_Main_Klickpin_CF-_Barat_3d_Animation_-_6AxeQjx4S_aohvhk.mp4"
    },
    {
        id: "07",
        type: "Wedding Ceremony",
        name: "The Sacred Union",
        date: "April 26, 2026",
        time: "01:00 PM",
        accent: "#D4AF37",
        img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885907/page_10_a9p6hb.png",
        video: "https://res.cloudinary.com/dwsv6ggaa/video/upload/v1774972870/From_Main_Klickpin_CF-_Indian_Wedding___Sindoor_daan_-_412vN5Ixo_izgrfi.mp4"
    },
    {
        id: "08",
        type: "Grand Reception",
        name: "A Royal Finale",
        date: "April 26, 2026",
        time: "08:00 PM",
        accent: "#b5935b",
        img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885910/page_11_qf3cxt.png",
        video: "https://res.cloudinary.com/dwsv6ggaa/video/upload/v1774974567/Untitled_design_1_baopl0.mp4"
    }
];

const WeddingEvents = () => {
    return (
        <section className="wedding-events-wrapper">
            <div className="itinerary-intro">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="intro-label"
                >
                    JOURNEY TO FOREVER
                </motion.p>
                <h2 className="intro-title">Wedding Itinerary</h2>
                <div className="royal-accent-line"></div>
            </div>

            <div className="v-timeline-container">
                {/* Central Decorative Line */}
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="timeline-vertical-bar"
                ></motion.div>

                {weddingEvents.map((event, index) => (
                    <div key={event.id} className={`timeline-row ${index % 2 !== 0 ? 'row-reverse' : ''}`}>

                        {/* Event Card */}
                        <motion.div
                            className="event-glass-card"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="card-media-wrapper">
                                {event.video ? (
                                    <video
                                        src={event.video}
                                        autoPlay loop muted playsInline
                                        className="card-media-content"
                                    />
                                ) : (
                                    <img src={event.img} alt={event.name} className="card-media-content" />
                                )}

                            </div>

                            <div className="card-details">
                                <h4 className="event-label" style={{ color: event.accent }}>{event.type}</h4>
                                <h3 className="event-heading">{event.name}</h3><div className="v-id" style={{ color: event.accent }} >
                                    {event.id}
                                </div>


                                <div className="event-info-grid">

                                    <p><span>📅</span> {event.date}</p>
                                    <p><span>⏰</span> {event.time}</p>
                                    <p><span>📍</span> Hotel HR Greens, Indore</p>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="dress-code-btn"
                                    style={{ borderColor: event.accent, color: event.accent }}
                                >
                                    Dress Code Details
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Center Timeline Node */}
                        <div className="timeline-node-area">
                            <div className="node-circle" style={{ backgroundColor: event.accent }}>
                                <div className="node-ring" style={{ backgroundColor: event.accent }}></div>
                            </div>
                        </div>

                        <div className="timeline-spacer"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WeddingEvents;