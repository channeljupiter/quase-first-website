import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import quase from "@/assets/quase.png";
import P1034952 from "@/assets/couples/Daniela_Gui/P1034952.jpg";
import P1034977 from "@/assets/couples/Daniela_Gui/P1034977.jpg";
import P1035097 from "@/assets/couples/Daniela_Gui/P1035097.jpg";
import P1035353 from "@/assets/couples/Daniela_Gui/P1035353.jpg";
import P1034998 from "@/assets/couples/Daniela_Gui/P1034998.jpg";
import P1034997 from "@/assets/couples/Daniela_Gui/P1034997.jpg";
import img23 from "@/assets/img23.jpg";

import siteData from "@/content/site.json";

const images = [
  { src: P1034977, desktop: "top-[10%] left-[8%]", mobile: "top-[15%] left-[5%]" },
  { src: P1035097, desktop: "top-[20%] right-[10%]", mobile: "top-[10%] right-[5%]" },
  { src: P1035353, desktop: "top-[55%] left-[12%]", mobile: "top-[65%] left-[5%]" },
  { src: P1034998, desktop: "top-[65%] right-[12%]", mobile: "top-[60%] right-[5%]" },
  { src: P1034997, desktop: "top-[35%] left-[30%]", mobile: "top-[40%] left-[10%]" },
  { src: img23, desktop: "top-[40%] right-[25%]", mobile: "top-[35%] right-[10%]" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="relative h-screen w-screen bg-white overflow-hidden">

      {/* ===== MENU BUTTON ===== */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="absolute top-6 right-6 z-50 flex flex-col gap-1"
      >
        <span className="w-6 h-[1px] bg-black" />
        <span className="w-6 h-[1px] bg-black" />
        <span className="w-6 h-[1px] bg-black" />
      </button>

      {/* ===== MENU OVERLAY ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-white"
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

      {/* ===== IMAGES ===== */}
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: i * 0.2 }}
          className={`
            absolute 
            w-[28vw] md:w-[18vw]
            object-cover

            ${img.mobile}
            md:${img.desktop}
          `}
        />
      ))}

      {/* ===== LOGO ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="
          absolute 
          left-1/2 -translate-x-1/2 
          
          bottom-[8vh] md:bottom-[5vh]
          md:left-1/2 md:-translate-x-1/2

          md:w-[40vw]
          w-[70vw]
        "
      >
        <img src={quase} className="w-full h-auto" />
      </motion.div>

      {/* ===== MOBILE CENTER OVERRIDE ===== */}
      <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src={quase} className="w-[70vw]" />
      </div>

    </div>
  );
};

export default Index;