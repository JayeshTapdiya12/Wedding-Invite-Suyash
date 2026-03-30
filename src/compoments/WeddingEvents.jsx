import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/WeddingEvents.css';

gsap.registerPlugin(ScrollTrigger);

const weddingEvents = [
    { id: "01", type: "Ganesh Sthapna", name: "Divine Beginnings", date: "April 18, 2026", time: "11:00 AM", accent: "#b5935b", img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885904/page_03_ibnhz3.png" },
    { id: "02", type: "Pithi Dastoor", name: "Tradition & Turmeric", date: "April 19, 2026", time: "10:00 AM", accent: "#E6B800", img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885905/page_04_s39r1l.png" },
    { id: "03", type: "Mehndi", name: "Henna & Happiness", date: "April 19, 2026", time: "01:00 PM", accent: "#2D5A27", img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885904/page_05_xzegvt.png" },
    { id: "04", type: "Sangeet Sandhya", name: "Rhythms of Joy", date: "April 19, 2026", time: "07:00 PM", accent: "#8A2BE2", img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885909/page_06_bjizdf.png", dark: true },
    { id: "05", type: "Nikasi & Baarat", name: "The Grand Procession", date: "April 20, 2026", time: "04:30 PM", accent: "#FF4500", img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885904/page_07_niymic.png", dark: true },
    { id: "06", type: "Wedding Ceremony", name: "The Sacred Union", date: "April 20, 2026", time: "08:00 PM", accent: "#FFD700", img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885906/page_08_xznyuy.png", dark: true },
    { id: "07", type: "Grand Reception", name: "A Royal Finale", date: "April 21, 2026", time: "08:30 PM", accent: "#b5935b", img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774885910/page_11_qf3cxt.png", dark: true }
];

const WeddingEvents = () => {
    const component = useRef(null);
    const slider = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const panels = gsap.utils.toArray('.event-panel');
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: component.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (panels.length - 1),
                    end: () => "+=" + slider.current.offsetWidth,
                }
            });
        }, component);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={component} className="royal-events-section">
            <div ref={slider} className="events-slider">
                {weddingEvents.map((event) => (
                    <div key={event.id} className={`event-panel ${event.dark ? 'is-dark' : 'is-light'}`} style={{ '--accent': event.accent }}>
                        <div className="panel-inner">
                            <div className="event-text-area">
                                <span className="event-id">{event.id}</span>
                                <h4 className="event-type">{event.type}</h4>
                                <h2 className="event-title-main">{event.name}</h2>
                                <div className="event-meta-info">
                                    <p>📅 {event.date}</p>
                                    <p>⏰ {event.time}</p>
                                    <p>📍 Hotel HR Greens, Indore</p>
                                </div>
                                <button className="style-guide-btn">View Style Guide</button>
                            </div>

                            <div className="event-image-area">
                                <div className="invitation-frame">
                                    <img src={event.img} alt={event.type} className="invitation-img" />
                                </div>
                                <div className="frame-glow" style={{ background: event.accent }}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WeddingEvents;