import { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import ParticleScene from './ParticleScene';

const roles = ['AI Engineer', 'Full-Stack Developer', 'Innovating Intelligent Systems'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.25, 
      delayChildren: 0.3 
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0 
  },
  transition: {
    duration: 0.6,
    ease: 'easeOut'
  }
} as const;

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.14),transparent_30%)] pointer-events-none" />
      <Suspense fallback={<div className="absolute inset-0 bg-background/80" />}> 
        <ParticleScene />
      </Suspense>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl text-center"
        >
          <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:items-start sm:text-left">
            <div className="flex-shrink-0">
              <img
                src="/mypic.jpeg"
                alt="ABDUL RAFAY"
                className="h-44 w-44 rounded-full object-cover border-4 border-primary shadow-[0_30px_80px_rgba(56,189,248,0.18)]"
              />
            </div>
            <div className="max-w-2xl">
              <motion.p
                variants={itemVariants}
                className="text-primary text-sm font-medium uppercase tracking-[0.35em] mb-3"
              >✦ Hello, I'm ✦</motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground mb-3"
              >ABDUL RAFAY</motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl font-semibold text-primary mb-4"
              >AI AGENTS AND CHATBOTS EXPERT</motion.p>
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-muted-foreground max-w-2xl leading-8 mb-8"
              >
                I create AI-driven products that accelerate growth, reduce costs, and deliver measurable business value.
                If you want a results-focused engineer who turns complex problems into market-ready systems, I am ready to build it with you.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-2xl md:text-3xl font-semibold text-primary"
              >
                {roles[currentRoleIndex]}
              </motion.p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-background transition hover:bg-primary/90"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-primary/20 bg-background px-8 py-3 text-sm font-semibold text-primary transition hover:border-primary"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
