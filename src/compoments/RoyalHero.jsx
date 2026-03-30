import React from 'react';
import '../styles/RoyalHero.css';

const RoyalHero = () => {
    return (
        <section className="hero-section">
            <div className="video-container">
                <video autoPlay playsInline className="hero-video">
                    <source src="/assests/introvideo.mp4#t=0,5.2" type="video/mp4" />
                </video>
            </div>
        </section>
    );
};

export default RoyalHero;