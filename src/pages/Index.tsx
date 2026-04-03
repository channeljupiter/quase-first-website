import { motion } from "framer-motion";
import P1034952 from "@/assets/couples/Daniela_Gui/P1034952.jpg";
import P1034977 from "@/assets/couples/Daniela_Gui/P1034977.jpg";
import P1035097 from "@/assets/couples/Daniela_Gui/P1035097.jpg";
import P1035353 from "@/assets/couples/Daniela_Gui/P1035353.jpg";
import P1034998 from "@/assets/couples/Daniela_Gui/P1034998.jpg";
import img16 from "@/assets/img16.jpg";
import img23 from "@/assets/img23.jpg";
import TopBanner from "@/components/TopBanner";
import FooterNav from "@/components/FooterNav";
import quase from "@/assets/quase.png";

const Index = () => {
  return (
    <div className="relative bg-background overflow-x-hidden">
      <TopBanner />

      {/* Fixed FOREGROUND title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="fixed bottom-[5vh] left-0 right-0 flex justify-center z-50 pointer-events-none"
      >
        <img
          src={quase}
          alt="Quase"
          className="w-[60vw] max-w-[600px] h-auto"
        />
      </motion.div>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full aspect-[2/3] md:absolute md:top-16 md:left-0 md:w-[35vw]"
      >
        <img
          src={img16}
          alt="Wedding photography"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Top-right image */}
      <motion.div
        initial={{ opacity: 0, y: -20, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 2 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="relative mt-4 w-[85%] mx-auto
                   md:absolute md:top-12 md:right-8 md:w-[35vw]"
      >
        <img
          src={P1034977}
          alt="Couple portrait"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* SCROLL SECTION */}
      <div className="relative mt-10 md:pt-[110vh]">
        <div className="relative md:h-[220vh]">

          {/* Image 1 (commented out) */}
          {/*
          <div className="absolute top-[0%] left-[10%] w-[28vw] max-w-[420px]">
            <img src={P1034952} className="w-full object-cover" />
          </div>
          */}

          {/* Image 2 */}
          <div className="relative w-[90%] mx-auto mb-8
                          md:absolute md:top-[2%] md:right-[12%] md:w-[28vw]">
            <img src={img23} className="w-full object-cover" />
          </div>

          {/* Image 3 */}
          <div className="relative w-[120%] mx-auto mb-8
                          md:absolute md:top-[15%] md:left-[10%] md:w-[32vw]">
            <img src={P1034998} className="w-full object-cover" />
          </div>

          {/* Image 4 */}
          <div className="relative w-[90%] mx-auto mb-8
                          md:absolute md:top-[50%] md:right-[18%] md:w-[26vw]">
            <img src={P1035097} className="w-full h-auto object-contain" />
          </div>

          {/* Image 5 */}
          <div className="relative w-[90%] mx-auto mb-8
                          md:absolute md:top-[70%] md:left-[8%] md:w-[30vw]">
            <img src={P1034952} className="w-full object-cover" />
          </div>

          {/* Image 6 */}
          <div className="relative w-[100%] mx-auto mb-18
                          md:absolute md:top-[85%] md:right-[10%] md:w-[29vw]">
            <img src={P1035353} className="w-full h-auto object-contain" />
          </div>

        </div>

        {/* breathing space */}
        <div className="h-[20vh] md:h-[40vh]" />
      </div>

      <FooterNav />
    </div>
  );
};

export default Index;