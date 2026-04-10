import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── DATA ───────────────────────────────────────────────────────────────────
const photos = [
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882995/WhatsApp_Image_2026-03-24_at_15.06.09_1_kzlvev.jpg", label: "Together", cat: "together" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882976/WhatsApp_Image_2026-03-24_at_15.06.00_ehz8vb.jpg", label: "Candid Smiles", cat: "candid" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882994/WhatsApp_Image_2026-03-24_at_15.06.07_enr0n1.jpg", label: "Us", cat: "together" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882975/WhatsApp_Image_2026-03-24_at_15.05.59_1_q00uyt.jpg", label: "Portrait", cat: "portraits" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882975/WhatsApp_Image_2026-03-24_at_15.06.00_1_wbai8z.jpg", label: "A Moment", cat: "candid" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882976/WhatsApp_Image_2026-03-24_at_15.05.59_n84voj.jpg", label: "Candid", cat: "candid" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882994/WhatsApp_Image_2026-03-24_at_15.06.06_1_ci8l0o.jpg", label: "Together", cat: "together" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882994/WhatsApp_Image_2026-03-24_at_15.06.05_yk0jkx.jpg", label: "Portrait", cat: "portraits" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882994/WhatsApp_Image_2026-03-24_at_15.06.06_r2wfiw.jpg", label: "Love", cat: "together" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882976/WhatsApp_Image_2026-03-24_at_15.06.02_1_o8ilkm.jpg", label: "Candid", cat: "candid" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882976/WhatsApp_Image_2026-03-24_at_15.06.02_oeejhh.jpg", label: "Laughter", cat: "candid" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882976/WhatsApp_Image_2026-03-24_at_15.06.01_oyslws.jpg", label: "Portrait", cat: "portraits" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882995/WhatsApp_Image_2026-03-24_at_15.06.09_smbekv.jpg", label: "Together", cat: "together" },
    { url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1774882975/WhatsApp_Image_2026-03-24_at_15.05.59_1_q00uyt.jpg", label: "A Moment", cat: "candid" },
];

const FILTERS = [
    { key: "all", label: "All Moments" },
    { key: "together", label: "Together" },
    { key: "candid", label: "Candid" },
    { key: "portraits", label: "Portraits" },
];

// ─── FILM STRIP DECORATION ───────────────────────────────────────────────────
const FilmStrip = () => (
    <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "100%",
        pointerEvents: "none", zIndex: 1,
    }}>
        {["top", "bottom"].map(pos => (
            <div key={pos} style={{
                position: "absolute", [pos]: 0, left: 0, right: 0, height: 14,
                background: "repeating-linear-gradient(90deg, transparent 0px, transparent 8px, rgba(0,0,0,0.55) 8px, rgba(0,0,0,0.55) 14px)",
            }} />
        ))}
    </div>
);

// ─── PHOTO CARD ──────────────────────────────────────────────────────────────
const PhotoCard = ({ photo, index, globalIndex, total, onClick }) => (
    <motion.div
        onClick={onClick}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.025, y: -4, zIndex: 10 }}
        style={{
            breakInside: "avoid", marginBottom: 12, position: "relative",
            borderRadius: 4, overflow: "hidden", cursor: "pointer", display: "block",
        }}
    >
        <motion.img
            src={photo.url}
            alt={photo.label}
            loading="lazy"
            style={{ width: "100%", display: "block", borderRadius: 4 }}
            whileHover={{ filter: "brightness(0.65)" }}
            transition={{ duration: 0.4 }}
        />

        <FilmStrip />

        {/* Hover info overlay */}
        <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
                position: "absolute", inset: 0, zIndex: 2,
                background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 60%)",
                display: "flex", flexDirection: "column", justifyContent: "flex-end",
                padding: "20px 16px",
            }}
        >
            <span style={{
                fontFamily: "'Cinzel', serif", fontSize: 9, letterSpacing: 3,
                color: "#F0A500", textTransform: "uppercase", display: "block", marginBottom: 4,
            }}>
                {photo.label}
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                {String(globalIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>

            {/* Zoom icon */}
            <div style={{
                position: "absolute", top: 12, right: 12, width: 26, height: 26,
                border: "1px solid rgba(255,255,255,0.35)", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, color: "rgba(255,255,255,0.6)",
            }}>⊕</div>
        </motion.div>
    </motion.div>
);

// ─── FEATURED ROW (top 3 photos) ─────────────────────────────────────────────
const FeaturedRow = ({ onOpen }) => (
    <div style={{
        display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 12,
        maxWidth: 1100, margin: "0 auto 12px",
    }}>
        {/* Big left card */}
        <motion.div
            onClick={() => onOpen(0)}
            whileHover={{ scale: 1.015 }}
            style={{ position: "relative", borderRadius: 4, overflow: "hidden", cursor: "pointer" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            <motion.img
                src={photos[0].url} alt="Featured"
                style={{ width: "100%", height: 340, objectFit: "cover", display: "block", borderRadius: 4 }}
                whileHover={{ filter: "brightness(0.65)", scale: 1.04 }}
                transition={{ duration: 0.5 }}
            />
            <FilmStrip />
            <motion.div
                initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }}
                style={{
                    position: "absolute", inset: 0, zIndex: 2,
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)",
                    display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "24px 20px",
                }}
            >
                <span style={{ fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: 4, color: "#F0A500" }}>Featured ✦</span>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>01 / {photos.length}</span>
            </motion.div>
        </motion.div>

        {/* Two stacked right cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[1, 2].map((idx) => (
                <motion.div
                    key={idx}
                    onClick={() => onOpen(idx)}
                    whileHover={{ scale: 1.015 }}
                    style={{ flex: 1, position: "relative", borderRadius: 4, overflow: "hidden", cursor: "pointer" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.img
                        src={photos[idx].url} alt={photos[idx].label}
                        style={{ width: "100%", height: 162, objectFit: "cover", display: "block", borderRadius: 4 }}
                        whileHover={{ filter: "brightness(0.65)", scale: 1.04 }}
                        transition={{ duration: 0.5 }}
                    />
                    <FilmStrip />
                    <motion.div
                        initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }}
                        style={{
                            position: "absolute", inset: 0, zIndex: 2,
                            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)",
                            display: "flex", alignItems: "flex-end", padding: "16px",
                        }}
                    >
                        <span style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: 3, color: "#F0A500" }}>
                            {photos[idx].label}
                        </span>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    </div>
);

// ─── LIGHTBOX ────────────────────────────────────────────────────────────────
const Lightbox = ({ index, onClose, onNav }) => {
    const thumbsRef = useRef(null);

    useEffect(() => {
        // Scroll active thumb into view
        if (thumbsRef.current) {
            const active = thumbsRef.current.children[index];
            if (active) active.scrollIntoView({ inline: "center", behavior: "smooth" });
        }
    }, [index]);

    const FilmSide = () => (
        <div style={{
            position: "absolute", top: 0, bottom: 0, width: 20,
            background: "repeating-linear-gradient(180deg, #111 0px, #111 12px, #000 12px, #000 18px)",
            display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center",
        }}>
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} style={{ width: 10, height: 6, background: "#000", borderRadius: 1, border: "1px solid #333" }} />
            ))}
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
            style={{
                position: "fixed", inset: 0, background: "rgba(0,0,0,0.97)",
                zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center",
            }}
        >
            {/* Film strip sides */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0 }}><FilmSide /></div>
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0 }}><FilmSide /></div>

            {/* Close */}
            <button
                onClick={onClose}
                style={{
                    position: "absolute", top: 20, right: 36,
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: 3,
                    color: "rgba(255,255,255,0.4)", zIndex: 10,
                }}
            >✕ CLOSE</button>

            {/* Prev / Next */}
            {[-1, 1].map((dir) => (
                <button
                    key={dir}
                    onClick={() => onNav(dir)}
                    style={{
                        position: "absolute", top: "50%", transform: "translateY(-50%)",
                        [dir === -1 ? "left" : "right"]: 40,
                        background: "none", border: "1px solid rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.5)", fontSize: 28,
                        width: 48, height: 48, cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "border-color 0.25s, color 0.25s", zIndex: 10,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#F0A500"; e.currentTarget.style.color = "#F0A500"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                >
                    {dir === -1 ? "‹" : "›"}
                </button>
            ))}

            {/* Image */}
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={photos[index].url}
                        alt={photos[index].label}
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            maxWidth: "82vw", maxHeight: "78vh",
                            objectFit: "contain", borderRadius: 2, display: "block",
                        }}
                    />
                </AnimatePresence>

                {/* Counter */}
                <div style={{
                    position: "absolute", bottom: -28, left: "50%", transform: "translateX(-50%)",
                    fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: 3,
                    color: "rgba(255,255,255,0.25)", whiteSpace: "nowrap",
                }}>
                    {String(index + 1).padStart(2, "0")} of {String(photos.length).padStart(2, "0")}
                </div>
            </div>

            {/* Caption */}
            <div style={{
                position: "absolute", bottom: 68, left: "50%", transform: "translateX(-50%)",
                fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic",
                fontSize: 14, color: "rgba(255,255,255,0.35)", letterSpacing: 2, whiteSpace: "nowrap",
            }}>
                {photos[index].label} · Suyash & Aarushi · 2025
            </div>

            {/* Thumbnail strip */}
            <div
                ref={thumbsRef}
                style={{
                    position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
                    display: "flex", gap: 6, maxWidth: "90vw", overflowX: "auto", padding: "4px 0",
                    scrollbarWidth: "none",
                }}
            >
                {photos.map((p, i) => (
                    <img
                        key={i}
                        src={p.url}
                        alt=""
                        onClick={() => onNav(i - index)} // jump directly
                        style={{
                            width: 44, height: 30, objectFit: "cover", borderRadius: 2,
                            cursor: "pointer", flexShrink: 0, transition: "opacity 0.2s, transform 0.2s",
                            opacity: i === index ? 1 : 0.3,
                            transform: i === index ? "scale(1.12)" : "scale(1)",
                            border: i === index ? "1px solid #F0A500" : "1px solid transparent",
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
const PhotoGallery = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const filtered = activeFilter === "all" ? photos : photos.filter(p => p.cat === activeFilter);
    const masonryPhotos = activeFilter === "all" ? filtered.slice(3) : filtered;

    const openLightbox = useCallback((idx) => setLightboxIndex(idx), []);
    const closeLightbox = useCallback(() => setLightboxIndex(null), []);

    const navigate = useCallback((dir) => {
        setLightboxIndex(prev => {
            const next = prev + dir;
            if (next < 0) return photos.length - 1;
            if (next >= photos.length) return 0;
            return next;
        });
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handler = (e) => {
            if (lightboxIndex === null) return;
            if (e.key === "ArrowRight") navigate(1);
            if (e.key === "ArrowLeft") navigate(-1);
            if (e.key === "Escape") closeLightbox();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [lightboxIndex, navigate, closeLightbox]);

    // Lock body scroll when lightbox open
    useEffect(() => {
        document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [lightboxIndex]);

    return (
        <>
            {/* Google Fonts */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Kalam:wght@300;400&display=swap');
      `}</style>

            <section style={{
                padding: "80px 24px",
                background: "linear-gradient(180deg, #060200 0%, #0d0500 40%, #060200 100%)",
                position: "relative", overflow: "hidden", minHeight: "100vh",
            }}>

                {/* Background orbs */}
                {[
                    { size: 300, top: -100, left: -100, color: "rgba(240,165,0,0.06)", delay: "0s" },
                    { size: 400, bottom: -150, right: -150, color: "rgba(180,50,50,0.05)", delay: "-4s" },
                ].map((orb, i) => (
                    <div key={i} style={{
                        position: "absolute", width: orb.size, height: orb.size,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
                        top: orb.top, left: orb.left, bottom: orb.bottom, right: orb.right,
                        pointerEvents: "none",
                        animation: `orbFloat 8s ease-in-out ${orb.delay} infinite`,
                    }} />
                ))}

                {/* ── HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ textAlign: "center", marginBottom: 64, position: "relative", zIndex: 2 }}
                >
                    <span style={{
                        fontFamily: "'Kalam', cursive", fontSize: 15, color: "#F0A500",
                        letterSpacing: 3, display: "block", marginBottom: 14,
                    }}>
                        ✦ Frozen in Time
                    </span>

                    {/* Divider */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 18 }}>
                        <div style={{ height: 1, width: 80, background: "linear-gradient(90deg, transparent, #F0A500)" }} />
                        <div style={{ width: 8, height: 8, background: "#F0A500", transform: "rotate(45deg)" }} />
                        <div style={{ height: 1, width: 80, background: "linear-gradient(90deg, #F0A500, transparent)" }} />
                    </div>

                    <h2 style={{
                        fontFamily: "'Cinzel', serif", fontSize: "clamp(28px, 5vw, 52px)",
                        fontWeight: 400, color: "#fff", letterSpacing: 4, lineHeight: 1.2, margin: 0,
                    }}>
                        Suyash{" "}
                        <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "#F0A500" }}>&</em>
                        {" "}Aarushi
                    </h2>
                    <p style={{
                        fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                        fontSize: 16, color: "rgba(255,255,255,0.35)", letterSpacing: 2, marginTop: 10,
                    }}>
                        A gallery of moments written in light
                    </p>
                </motion.div>

                {/* ── FILTER TABS ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        display: "flex", justifyContent: "center", gap: 8,
                        flexWrap: "wrap", marginBottom: 48, position: "relative", zIndex: 2,
                    }}
                >
                    {FILTERS.map((f) => (
                        <button
                            key={f.key}
                            onClick={() => setActiveFilter(f.key)}
                            style={{
                                fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: 3,
                                textTransform: "uppercase", padding: "8px 20px",
                                border: `1px solid ${activeFilter === f.key ? "#F0A500" : "rgba(240,165,0,0.25)"}`,
                                color: activeFilter === f.key ? "#F0A500" : "rgba(255,255,255,0.4)",
                                background: activeFilter === f.key ? "rgba(240,165,0,0.06)" : "transparent",
                                cursor: "pointer", transition: "all 0.3s", borderRadius: 0,
                            }}
                        >
                            {f.label}
                        </button>
                    ))}
                </motion.div>

                {/* ── FEATURED ROW (all only) ── */}
                <AnimatePresence>
                    {activeFilter === "all" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }}
                            style={{ position: "relative", zIndex: 2 }}
                        >
                            <FeaturedRow onOpen={openLightbox} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── MASONRY GRID ── */}
                <div style={{
                    columns: "2 200px", columnGap: 12,
                    maxWidth: 1100, margin: "0 auto",
                    position: "relative", zIndex: 2,
                }}>
                    {masonryPhotos.map((photo, i) => {
                        const globalIndex = photos.indexOf(photo);
                        return (
                            <PhotoCard
                                key={photo.url + i}
                                photo={photo}
                                index={i}
                                globalIndex={globalIndex}
                                total={photos.length}
                                onClick={() => openLightbox(globalIndex)}
                            />
                        );
                    })}
                </div>

                {/* ── GOLD DIVIDER ── */}
                <motion.div
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{
                        display: "flex", alignItems: "center", gap: 12,
                        maxWidth: 1100, margin: "48px auto 0", position: "relative", zIndex: 2,
                    }}
                >
                    <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(240,165,0,0.3))" }} />
                    <div style={{ width: 6, height: 6, background: "rgba(240,165,0,0.4)", transform: "rotate(45deg)" }} />
                    <span style={{ fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: 4, color: "rgba(240,165,0,0.4)", whiteSpace: "nowrap" }}>
                        {photos.length} Moments · Suyash & Aarushi
                    </span>
                    <div style={{ width: 6, height: 6, background: "rgba(240,165,0,0.4)", transform: "rotate(45deg)" }} />
                    <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(240,165,0,0.3), transparent)" }} />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        textAlign: "center", fontFamily: "'Cormorant Garamond',serif",
                        fontStyle: "italic", color: "rgba(255,255,255,0.18)",
                        fontSize: 13, letterSpacing: 1, marginTop: 24, position: "relative", zIndex: 2,
                    }}
                >
                    Click any photo to explore · Use ← → arrow keys to navigate
                </motion.p>
            </section>

            {/* CSS for orb animation (injected once) */}
            <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(20px, -30px); }
        }
      `}</style>

            {/* ── LIGHTBOX ── */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <Lightbox
                        index={lightboxIndex}
                        onClose={closeLightbox}
                        onNav={navigate}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default PhotoGallery;