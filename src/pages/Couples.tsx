import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import couplesData from "@/content/couples.json";

import couple1 from "@/assets/couples/couple-1.jpg";
import couple2 from "@/assets/couples/couple-2.jpg";
import couple3 from "@/assets/couples/couple-3.jpg";
import couple4 from "@/assets/couples/couple-4.jpg";
import couple5 from "@/assets/couples/couple-5.jpg";

const imageMap: Record<string, string> = {
  "/couples/couple-1.jpg": couple1,
  "/couples/couple-2.jpg": couple2,
  "/couples/couple-3.jpg": couple3,
  "/couples/couple-4.jpg": couple4,
  "/couples/couple-5.jpg": couple5,
};

const Couples = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const hoveredCouple = couplesData.find((c) => c.id === hoveredId);

  return (
    <div className="min-h-screen bg-couples-bg relative overflow-hidden">
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
              src={imageMap[hoveredCouple.images[0]]}
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
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 max-w-4xl">
            {couplesData.map((couple, i) => (
              <div key={couple.id} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="text-foreground/40 font-body text-sm">/</span>
                )}
                <Link
                  to={`/couples/${couple.id}`}
                  onMouseEnter={() => setHoveredId(couple.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="font-body text-lg md:text-2xl uppercase tracking-[0.15em] text-foreground hover:text-foreground/60 transition-colors cursor-pointer py-2"
                >
                  {couple.names}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Couples;
