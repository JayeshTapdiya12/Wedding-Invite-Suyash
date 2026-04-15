import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="wedding-footer">
            <div className="footer-texture" />

            <div className="footer-container">
                {/* Decorative Top Border */}
                <div className="footer-ornament">
                    <svg width="100" height="20" viewBox="0 0 100 20">
                        <path d="M0 10 Q 25 0 50 10 T 100 10" fill="none" stroke="#D4A373" strokeWidth="1" opacity="0.5" />
                    </svg>
                </div>

                {/* Monogram Section */}
                <div className="monogram-wrapper">
                    <img
                        src="https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774978273/AS_wedding_logo_j1gchm.png"
                        alt="Wedding Logo"
                        className="footer-mid-logo"
                    />
                </div>

                {/* Names & Hashtag */}
                <div className="footer-main-info">
                    <h3 className="footer-names">Aarushi & Suyash</h3>
                    <div className="wedding-hashtag">"UntilSheMetYesh"</div>
                </div>

                {/* Details Grid */}
                <div className="footer-details">
                    <div className="detail-item">
                        <span className="detail-label">Where</span>
                        <p className="credits-text">HR GREENS, MR10, Indore</p>
                    </div>
                    <div className="detail-separator" />
                    <div className="detail-item">
                        <span className="detail-label">When</span>
                        <p className="credits-text">April 25 - 26, 2026</p>
                    </div>
                </div>

                {/* Bottom Credits & Navigation */}
                <div className="footer-bottom">
                    <div className="gold-line-dim" />

                    <button onClick={scrollToTop} className="back-to-top">
                        Back to Top
                    </button>

                    <p className="credits-text">Crafted with love for our special guests</p>
                    <p className="detail-label"> Jayesh Tapdiya</p>


                    <div className="heart-pulse-container">
                        <div className="pulse-ring"></div>
                        <svg className="footer-heart" width="24" height="24" viewBox="0 0 32 32">
                            <path d="M16 28.722c-0.294 0-0.587-0.094-0.831-0.278-2.644-2.003-5.144-3.997-7.069-5.719-2.419-2.166-3.85-4.384-4.375-6.791-0.537-2.463-0.178-4.966 1.009-7.050 1.216-2.134 3.228-3.506 5.666-3.862 1.725-0.253 3.497 0.084 4.978 0.947 0.422 0.247 0.816 0.534 1.178 0.856 0.362-0.322 0.756-0.609 1.178-0.856 1.481-0.863 3.253-1.2 4.978-0.947 2.438 0.356 4.45 1.728 5.666 3.862 1.188 2.084 1.547 4.588 1.009 7.050-0.525 2.406-1.956 4.625-4.375 6.791-1.925 1.722-4.425 3.716-7.069 5.719-0.244 0.184-0.537 0.278-0.831 0.278z" />
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;