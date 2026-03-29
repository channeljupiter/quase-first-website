import { motion } from "framer-motion";
import heroLeft from "@/assets/hero-left.jpg";
import heroPolaroid from "@/assets/hero-polaroid.jpg";
import TopBanner from "@/components/TopBanner";
import FooterNav from "@/components/FooterNav";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <TopBanner />

      {/* Hero left image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-16 left-0 w-[35vw] h-[85vh]"
      >
        <img
          src={heroLeft}
          alt="Wedding photography"
          className="w-full h-full object-cover"
          width={800}
          height={1100}
        />
      </motion.div>

      {/* Polaroid top-right */}
      <motion.div
        initial={{ opacity: 0, y: -20, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 2 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="absolute top-12 right-8 w-[15vw] min-w-[140px] max-w-[220px] bg-card p-2 shadow-lg"
      >
        <img
          src={heroPolaroid}
          alt="Couple portrait"
          className="w-full aspect-[4/5] object-cover"
          loading="lazy"
          width={512}
          height={640}
        />
      </motion.div>

      {/* Large title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-[15vh] left-0 right-0 text-center font-display text-[15vw] leading-[0.9] tracking-tight text-foreground select-none pointer-events-none"
      >
        QUASE
      </motion.h1>

      <FooterNav />
    </div>
  );
};

export default Index;
