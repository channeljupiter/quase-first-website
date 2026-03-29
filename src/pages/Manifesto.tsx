import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import manifestoData from "@/content/manifesto.json";

const Manifesto = () => {
  return (
    <PageLayout>
      <div className="flex items-center justify-center min-h-[70vh] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[600px] w-full"
        >
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-12">
            {manifestoData.title}
          </h1>
          <div className="space-y-6">
            {manifestoData.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="font-body text-base leading-relaxed text-muted-foreground"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Manifesto;
