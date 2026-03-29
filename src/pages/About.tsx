import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import faqData from "@/content/faq.json";

const About = () => {
  return (
    <PageLayout>
      <div className="flex items-start justify-center min-h-[70vh] px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[700px] w-full"
        >
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-16">
            Questions & Answers
          </h1>
          <div className="space-y-12">
            {faqData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="border-t border-border pt-6"
              >
                <h3 className="font-display text-xl text-foreground mb-3">
                  {item.question}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default About;
