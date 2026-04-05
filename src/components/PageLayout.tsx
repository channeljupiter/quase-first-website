import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import quase from "@/assets/quase.png";
import siteData from "@/content/site.json";

const PageLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-white text-black">

      {/* HEADER */}
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/">
          <img src={quase} className="h-10" />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1"
        >
          <span className="w-6 h-[1px] bg-black" />
          <span className="w-6 h-[1px] bg-black" />
          <span className="w-6 h-[1px] bg-black" />
        </button>
      </div>

      {/* MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-white">
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

      {/* CONTENT */}
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;