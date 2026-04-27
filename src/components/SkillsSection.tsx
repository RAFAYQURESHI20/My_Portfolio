import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    category: 'AI / ML',
    icon: '🧠',
    skills: [
      { name: 'Machine Learning', level: 92 },
      { name: 'Deep Learning', level: 90 },
      { name: 'NLP', level: 90 },
      { name: 'ANN', level: 88 },
      { name: 'AI Chatbots', level: 90 },
      { name: 'Agentic AI', level: 88 },
      { name: 'CrewAI', level: 86 },
    ],
  },
  {
    category: 'Frontend',
    icon: '⚡',
    skills: [
      { name: 'ReactJS', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'Firebase', level: 84 },
    ],
  },
  {
    category: 'Backend',
    icon: '🔧',
    skills: [
      { name: 'Python', level: 93 },
      { name: 'Java', level: 85 },
      { name: 'FastAPI', level: 82 },
      { name: 'MySQL', level: 84 },
      { name: 'MongoDB', level: 82 },
    ],
  },
  {
    category: 'Systems & Tools',
    icon: '🛠️',
    skills: [
      { name: 'LangChain', level: 88 },
      { name: 'LangGraph', level: 82 },
      { name: 'u-center', level: 80 },
      { name: 'Arduino', level: 78 },
      { name: 'GPS / NMEA', level: 80 },
      { name: 'Automation', level: 88 },
      { name: 'n8n', level: 85 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="mb-5 group cursor-default"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors duration-300">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="text-xs text-muted-foreground font-mono"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
        >
          {/* Shimmer effect */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, delay: delay + 1, repeat: Infinity, repeatDelay: 3 }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-foreground/20 to-transparent skew-x-12"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section id="skills" ref={sectionRef} className="section-padding max-w-7xl mx-auto relative">
      <motion.div
        style={{ y: bgY }}
        className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none"
      />

      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-primary text-sm font-medium tracking-widest uppercase mb-3"
        >
          Expertise
        </motion.p>
        <h2 className="heading-lg">
          Skills &{' '}
          <span className="gradient-text">Technologies</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {skillCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: catIndex * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors duration-500 relative overflow-hidden group"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/[0.03] group-hover:to-accent/[0.03] transition-all duration-500" />

            <div className="relative">
              <motion.span
                className="text-3xl block mb-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: catIndex * 0.5 }}
              >
                {cat.icon}
              </motion.span>
              <h3 className="heading-md mb-6 gradient-text">{cat.category}</h3>
              {cat.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={catIndex * 0.15 + i * 0.1}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
