import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import couplesData from "@/content/couples.json";

// Image imports — main photos
import couple1 from "@/assets/couples/couple-1.jpg";
import couple2 from "@/assets/couples/couple-2.jpg";
import couple3 from "@/assets/couples/couple-3.jpg";
import couple4 from "@/assets/couples/couple-4.jpg";
import couple5 from "@/assets/couples/couple-5.jpg";
// Extra photos
import anaPedro2 from "@/assets/couples/ana-pedro-2.jpg";
import anaPedro3 from "@/assets/couples/ana-pedro-3.jpg";
import sofiaMiguel2 from "@/assets/couples/sofia-miguel-2.jpg";
import sofiaMiguel3 from "@/assets/couples/sofia-miguel-3.jpg";
import inesTomas2 from "@/assets/couples/ines-tomas-2.jpg";
import inesTomas3 from "@/assets/couples/ines-tomas-3.jpg";
import martaJoao2 from "@/assets/couples/marta-joao-2.jpg";
import martaJoao3 from "@/assets/couples/marta-joao-3.jpg";
import carolinaDiogo2 from "@/assets/couples/carolina-diogo-2.jpg";
import carolinaDiogo3 from "@/assets/couples/carolina-diogo-3.jpg";

const imageMap: Record<string, string> = {
  "/couples/couple-1.jpg": couple1,
  "/couples/couple-2.jpg": couple2,
  "/couples/couple-3.jpg": couple3,
  "/couples/couple-4.jpg": couple4,
  "/couples/couple-5.jpg": couple5,
  "/couples/ana-pedro-2.jpg": anaPedro2,
  "/couples/ana-pedro-3.jpg": anaPedro3,
  "/couples/sofia-miguel-2.jpg": sofiaMiguel2,
  "/couples/sofia-miguel-3.jpg": sofiaMiguel3,
  "/couples/ines-tomas-2.jpg": inesTomas2,
  "/couples/ines-tomas-3.jpg": inesTomas3,
  "/couples/marta-joao-2.jpg": martaJoao2,
  "/couples/marta-joao-3.jpg": martaJoao3,
  "/couples/carolina-diogo-2.jpg": carolinaDiogo2,
  "/couples/carolina-diogo-3.jpg": carolinaDiogo3,
};

const CoupleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const couple = couplesData.find((c) => c.id === id);

  if (!couple) return <Navigate to="/couples" replace />;

  const images = couple.images;

  return (
    <PageLayout>
      <div className="bg-background">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-8 pb-16"
        >
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-3">
            {couple.names}
          </h1>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground">
            {couple.location} · {couple.date}
          </p>
        </motion.div>

        {/* First image — full width hero */}
        <section className="px-8 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <img
              src={imageMap[images[0]]}
              alt={couple.names}
              className="w-full h-[60vh] md:h-[75vh] object-cover"
              width={800}
              height={1100}
            />
          </motion.div>
        </section>

        {/* Second row — text block + image side by side */}
        <section className="px-8 pb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Text placeholder where a photo would be */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center p-8 md:p-16"
            >
              <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground max-w-md">
                {couple.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:mt-16"
            >
              <img
                src={imageMap[images[1]]}
                alt={couple.names}
                className="w-full h-[70vh] object-cover"
                loading="lazy"
                width={800}
                height={1100}
              />
            </motion.div>
          </div>
        </section>

        {/* Third image — wide */}
        <section className="px-8 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <img
              src={imageMap[images[2]]}
              alt={couple.names}
              className="w-full h-[50vh] md:h-[60vh] object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
};

export default CoupleDetail;
