import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import quase from "@/assets/quase.png";
import P1034977 from "@/assets/couples/Daniela_Gui/P1034977.jpg";
import P1035097 from "@/assets/couples/Daniela_Gui/P1035097.jpg";
import P1035353 from "@/assets/couples/Daniela_Gui/P1035353.jpg";
import P1034998 from "@/assets/couples/Daniela_Gui/P1034998.jpg";
import P1034997 from "@/assets/couples/Daniela_Gui/P1034997.jpg";
import img23 from "@/assets/img23.jpg";

import siteData from "@/content/site.json";

/* =========================================================
   RESPONSIVE IMAGE SYSTEM (FIX OVERLAP ISSUE)
========================================================= */

const images = [
  {
    src: P1034977,
    desktop: { x: -25, y: -30, size: 1.2 },
    mobile: { x: -25, y: -25, size: 1.3 },
  },
  {
    src: P1035097,
    desktop: { x: 25, y: -25, size: 1.2 },
    mobile: { x: 18, y: -30, size: 1.2 },
  },
  {
    src: P1035353,
    desktop: { x: -30, y: 30, size: 1.1 },
    mobile: { x: -18, y: 16, size: 1.5 },
  },
  {
    src: P1034998,
    desktop: { x: 5, y: 35, size: 1.1 },
    mobile: { x: 25, y: 18, size: 1.1 },
  },
  {
    src: P1034997,
    desktop: { x: -35, y: 0, size: 0.85 },
    mobile: { x: -2, y: 35, size: 0.95 },
  },
  {
    src: img23,
    desktop: { x: 35, y: 10, size: 1.0 },
    mobile: { x: 22, y: -13, size: 0.9 },
  },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  // detect mobile once
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 400);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="relative h-screen w-screen bg-white overflow-hidden">

      {/* ================= MENU BUTTON ================= */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="absolute top-6 right-6 z-[200] flex flex-col gap-1"
      >
        <span className="w-6 h-[1px] bg-black" />
        <span className="w-6 h-[1px] bg-black" />
        <span className="w-6 h-[1px] bg-black" />
      </button>

      {/* ================= MENU OVERLAY ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 bg-white"
          >
            {siteData.navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-xl uppercase tracking-[0.3em]"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= IMAGES ================= */}
{!menuOpen &&
  images.map((img, i) => {
    const layout = isMobile ? img.mobile : img.desktop;

    return (
      <motion.img
        key={i}
        src={img.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: i * 0.15 }}
        className="absolute object-cover z-10"
        style={{
          top: "50%",
          left: "50%",
          transform: `
            translate(-50%, -50%)
            translate(${layout.x}vw, ${layout.y}vh)
            scale(${layout.size})
          `,
          width: isMobile ? "28vw" : "14vw",   // 🔥 FIX HERE
          maxWidth: "320px",                   // safety cap
        }}
      />
    );
  })}

      {/* ================= CENTER LOGO ================= */}
      {!menuOpen && (
        <div className="flex items-center justify-center w-screen h-screen">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-50 w-[70vw] md:w-[40vw]"
          >
            <img src={quase} alt="quase" className="w-full h-auto" />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Index;