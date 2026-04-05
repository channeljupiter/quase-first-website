import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import faqData from "@/content/faq.json";

type FaqItemType = {
  id: string;
  question: string;
  answer: string;
};

type FaqItemProps = {
  item: FaqItemType;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
};

const FaqItem = ({ item, isOpen, onClick, delay }: FaqItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.04 }}
      className="border-b border-foreground/10 pb-4"
    >
      <button
        onClick={onClick}
        className="group w-full text-left flex items-start justify-between gap-4"
      >
        <h3 className="font-display text-sm md:text-base text-foreground leading-snug relative">
          {item.question}
          <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-foreground/40 transition-all duration-300 group-hover:w-full" />
        </h3>

        <span className="text-foreground/40 text-xs mt-1">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-body text-xs md:text-sm leading-relaxed text-foreground/70 mt-4 pr-4">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const About = () => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const typedFaqData = faqData as FaqItemType[];

  const leftColumn = typedFaqData.filter((_, i) => i % 2 === 0);
  const rightColumn = typedFaqData.filter((_, i) => i % 2 !== 0);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  return (
    <PageLayout>
      <div className="h-full flex flex-col">
        <div className="flex flex-col md:flex-row px-6 md:px-12 py-6 md:py-10 h-full">
          {/* LEFT SIDE */}
          <div className="md:w-1/3 md:pr-12 mb-8 md:mb-0 flex-shrink-0">
            <div className="md:sticky md:top-24">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display text-3xl md:text-4xl text-foreground tracking-tight"
              >
                Q&amp;A
              </motion.h1>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:w-2/3 pr-2 md:pr-6 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto pr-2">
              <div className="flex flex-col md:flex-row gap-x-12 gap-y-8">
                {/* LEFT COLUMN */}
                <div className="flex-1 space-y-8">
                  {leftColumn.map((item, i) => {
                    const isOpen = openIds.includes(item.id);

                    return (
                      <FaqItem
                        key={item.id}
                        item={item}
                        isOpen={isOpen}
                        onClick={() => toggleItem(item.id)}
                        delay={i}
                      />
                    );
                  })}
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex-1 space-y-8">
                  {rightColumn.map((item, i) => {
                    const isOpen = openIds.includes(item.id);

                    return (
                      <FaqItem
                        key={item.id}
                        item={item}
                        isOpen={isOpen}
                        onClick={() => toggleItem(item.id)}
                        delay={i}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;