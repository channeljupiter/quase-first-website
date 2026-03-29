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
      {/* Fixed QUASE title */}
      <div className="fixed inset-0 z-0 flex items-end justify-center pointer-events-none pb-[15vh]">
        <h1 className="font-display text-[15vw] leading-[0.9] tracking-tight text-foreground select-none">
          QUASE
        </h1>
      </div>

      {/* Scrollable content on top */}
      <div className="relative z-10">
        {/* Hero section */}
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
        </section>

        {/* Scattered image sections */}
        <section className="relative pb-32 bg-background">
          {/* Image 1 — left aligned, tall */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="ml-[5vw] mr-auto w-[40vw] max-w-[500px] -mt-16"
          >
            <img
              src={section1}
              alt="Couple in vineyard"
              className="w-full h-[75vh] object-cover"
              loading="lazy"
              width={800}
              height={1100}
            />
          </motion.div>

          {/* Image 2 — right side, offset down */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="ml-auto mr-[8vw] w-[35vw] max-w-[450px] -mt-[20vh]"
          >
            <img
              src={section3}
              alt="Couple portrait in architecture"
              className="w-full h-[65vh] object-cover"
              loading="lazy"
              width={900}
              height={1200}
            />
          </motion.div>

          {/* Image 3 — center-left, wide landscape */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="mx-auto mt-24 w-[55vw] max-w-[700px] ml-[15vw]"
          >
            <img
              src={section2}
              alt="Wedding detail"
              className="w-full h-[45vh] object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
          </motion.div>

          {/* Image 4 — far right, polaroid-like */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="ml-auto mr-[5vw] mt-20 w-[28vw] max-w-[350px] bg-card p-2 shadow-lg"
          >
            <img
              src={section5}
              alt="Couple dancing at sunset"
              className="w-full h-[55vh] object-cover"
              loading="lazy"
              width={800}
              height={1000}
            />
          </motion.div>

          {/* Image 5 — left side, overlapping feel */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="ml-[10vw] -mt-[10vh] w-[38vw] max-w-[480px]"
          >
            <img
              src={section6}
              alt="Wedding rings detail"
              className="w-full h-[45vh] object-cover"
              loading="lazy"
              width={1000}
              height={700}
            />
          </motion.div>

          {/* Image 6 — center, wide */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="mx-auto mt-28 w-[50vw] max-w-[650px]"
          >
            <img
              src={section4}
              alt="Wedding ceremony"
              className="w-full h-[50vh] object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
          </motion.div>
        </section>

        <FooterNav />
      </div>
    </div>
  );
};

export default Index;
