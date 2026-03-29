import { motion } from "framer-motion";
import heroLeft from "@/assets/hero-left.jpg";
import heroPolaroid from "@/assets/hero-polaroid.jpg";
import section1 from "@/assets/home-section-1.jpg";
import section2 from "@/assets/home-section-2.jpg";
import section3 from "@/assets/home-section-3.jpg";
import section4 from "@/assets/home-section-4.jpg";
import section5 from "@/assets/home-section-5.jpg";
import section6 from "@/assets/home-section-6.jpg";
import TopBanner from "@/components/TopBanner";
import FooterNav from "@/components/FooterNav";

const Index = () => {
  return (
    <div className="relative bg-background">
      {/* Hero section — full viewport */}
      <section className="relative h-screen overflow-hidden">
        <TopBanner />

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

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-[15vh] left-0 right-0 text-center font-display text-[15vw] leading-[0.9] tracking-tight text-foreground select-none pointer-events-none"
        >
          QUASE
        </motion.h1>
      </section>

      {/* Section 2 — two images side by side */}
      <section className="px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={section1}
              alt="Couple in vineyard"
              className="w-full h-[70vh] object-cover"
              loading="lazy"
              width={800}
              height={1100}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:mt-24"
          >
            <img
              src={section3}
              alt="Couple portrait in architecture"
              className="w-full h-[70vh] object-cover"
              loading="lazy"
              width={900}
              height={1200}
            />
          </motion.div>
        </div>
      </section>

      {/* Section 3 — wide image */}
      <section className="px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <img
            src={section2}
            alt="Wedding detail"
            className="w-full h-[50vh] md:h-[60vh] object-cover"
            loading="lazy"
            width={1200}
            height={800}
          />
        </motion.div>
      </section>

      {/* Section 4 — offset layout */}
      <section className="px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 md:col-start-2"
          >
            <img
              src={section5}
              alt="Couple dancing at sunset"
              className="w-full h-[75vh] object-cover"
              loading="lazy"
              width={800}
              height={1000}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 md:col-start-8 md:mt-40"
          >
            <img
              src={section6}
              alt="Wedding rings detail"
              className="w-full h-[50vh] object-cover"
              loading="lazy"
              width={1000}
              height={700}
            />
          </motion.div>
        </div>
      </section>

      {/* Section 5 — wide image */}
      <section className="px-8 py-12 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <img
            src={section4}
            alt="Wedding ceremony"
            className="w-full h-[50vh] md:h-[60vh] object-cover"
            loading="lazy"
            width={1200}
            height={800}
          />
        </motion.div>
      </section>

      <FooterNav />
    </div>
  );
};

export default Index;
