import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Blessing.css";

const Blessings = () => {
    const form = useRef(null);
    const [submitted, setSubmitted] = useState(false);
    const [showHearts, setShowHearts] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_kxet42e", "template_kojq5ca", form.current, "irbr7SFLiqDuVojKa")
            .then(() => {
                setSubmitted(true);
                setShowHearts(true);
                setTimeout(() => {
                    setSubmitted(false);
                    setShowHearts(false);
                }, 3000);
                form.current.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
            });
    };

    return (
        <section className="blessings-section">
            <div className="blessings-overlay"></div>

            <div className="blessings-container">
                <motion.div
                    className="blessings-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="script-accent">With Love</span>
                    <h2 className="blessings-title">Send Your Blessings</h2>
                    <div className="blessings-gold-line"></div>
                </motion.div>

                <motion.div
                    className="blessings-card-wrapper"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <form ref={form} onSubmit={sendEmail} className="blessings-glass-card">
                        <div className="input-group">
                            <label>Your Name</label>
                            <input type="text" name="user_name" placeholder="Enter your name" required />
                        </div>

                        <div className="input-group">
                            <label>Your Message</label>
                            <textarea name="message" placeholder="Write your wishes here..." rows={5} required />
                        </div>

                        <button type="submit" disabled={submitted} className={submitted ? "btn-sent" : "btn-submit"}>
                            {submitted ? "Blessings Sent Successfully" : "Send Wishes"}
                        </button>
                    </form>
                </motion.div>

                <AnimatePresence>
                    {showHearts && (
                        <div className="heart-burst-container">
                            {[...Array(15)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="floating-heart"
                                    initial={{ y: 0, x: 0, opacity: 1, scale: 0.5 }}
                                    animate={{
                                        y: -400,
                                        x: (Math.random() - 0.5) * 300,
                                        opacity: 0,
                                        scale: 2,
                                        rotate: (Math.random() - 0.5) * 90
                                    }}
                                    transition={{ duration: 2.5, ease: "easeOut" }}
                                >
                                    ❤
                                </motion.div>
                            ))}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Blessings;