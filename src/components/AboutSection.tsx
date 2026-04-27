import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '10+', label: 'Projects', icon: '🚀' },
  { value: '5+', label: 'AI Models', icon: '🤖' },
  { value: '3+', label: 'Years Coding', icon: '⚡' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['30px', '-30px']);
  const statsY = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);

  return (
    <section id="about" ref={sectionRef} className="section-padding max-w-7xl mx-auto relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />

      <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary text-sm font-medium tracking-widest uppercase mb-3"
          >
            About Me
          </motion.p>
          <h2 className="heading-lg mb-8">
            Motivated to build products that{' '}
            <motion.span
              className="gradient-text inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              deliver impact
            </motion.span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm ABDUL RAFAY — an AI engineer and full-stack developer who helps organizations turn ambitious ideas into systems that impress users, improve operations, and accelerate growth.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              With experience in AI chatbots, LangChain-powered assistants, full-stack React/Firebase apps, and backend automation, I contribute practical engineering discipline, strong product focus, and a commitment to building solutions that stakeholders trust.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              I deliver work that brings teams closer to their goals — whether that means launching a medical chatbot, scaling an AI agent platform, or automating real-world processes to increase reliability and business value.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          style={{ y: statsY }}
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-3 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -6, scale: 1.05, transition: { duration: 0.25 } }}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors duration-500 group cursor-default"
            >
              <motion.span
                className="text-2xl block mb-3"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {stat.icon}
              </motion.span>
              <motion.div
                className="text-3xl md:text-4xl font-bold gradient-text font-display mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15, type: 'spring', stiffness: 200 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider group-hover:text-primary/70 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
