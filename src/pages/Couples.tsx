import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import couplesData from "@/content/couples.json";


const imageMap: Record<string, string> = {

};

const Couples = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const hoveredCouple = couplesData.find((c) => c.id === hoveredId);

  return (
    <div className="min-h-screen bg-couples-bg relative overflow-hidden">
      {/* Hover preview image (kept for later use) */}
      <AnimatePresence>
        {hoveredCouple && (
          <motion.div
            key={hoveredCouple.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-10 pointer-events-none w-[300px] h-[200px]"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y - 100,
            }}
          >
            <img
              src={imageMap[hoveredCouple.image]}
              alt={hoveredCouple.names}
              className="w-full h-full object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <PageLayout>
        <div
          className="flex flex-col items-center justify-center min-h-[70vh] px-8"
          onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
        >

          {/* ❌ Couples list (commented out)
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 max-w-4xl">
            {couplesData.map((couple, i) => (
              <div key={couple.id} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="text-foreground/40 font-body text-sm">/</span>
                )}
                <button
                  onMouseEnter={() => setHoveredId(couple.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="font-body text-lg md:text-2xl uppercase tracking-[0.15em] text-foreground hover:text-foreground/60 transition-colors cursor-pointer py-2"
                >
                  {couple.names}
                </button>
              </div>
            ))}
          </div>
          */}

          {/* ✅ SOON placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-body text-2xl md:text-4xl tracking-[0.3em] uppercase text-foreground/70"
          >
            SOON
          </motion.div>

        </div>
      </PageLayout>
    </div>
  );
};

export default Couples;
