import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function FeaturedProjectCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="col-span-full mb-12 relative"
    >
      {/* Premium glow effect */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-card via-card/95 to-card/90 border border-primary/20 backdrop-blur-sm">
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ padding: '1px' }}
        >
          <div className="w-full h-full rounded-3xl bg-card" />
        </motion.div>

        <div className="relative p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl shadow-lg"
            >
              🤖
            </motion.div>
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                Khedma AI
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-muted-foreground font-medium"
              >
                Final Year Project • AI-Powered Job Automation Platform
              </motion.p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl"
          >
            An intelligent career automation platform that solves modern job market challenges through AI, NLP, and automation.
            Combines job aggregation, AI matching, ATS-optimized resume building, and semi-automated applications in one unified ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {['AI/ML', 'NLP', 'Automation', 'ATS', 'Job Matching', 'React', 'Node.js'].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-4"
          >
            <Link to="/khedma-ai">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore Project</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
            <motion.a
              href="https://github.com/RAFAYQURESHI20/Khedma-AI-ATS-Resume"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-border text-foreground font-semibold rounded-xl hover:bg-secondary transition-all duration-300 flex items-center gap-2"
            >
              <span>View Code</span>
              <span>↗</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function AuraStrategyCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="col-span-full mb-12 relative"
    >
      {/* Premium glow effect */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-card via-card/95 to-card/90 border border-primary/20 backdrop-blur-sm">
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ padding: '1px' }}
        >
          <div className="w-full h-full rounded-3xl bg-card" />
        </motion.div>

        <div className="relative p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl shadow-lg"
            >
              🎯
            </motion.div>
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                Aura Strategy Agent
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-muted-foreground font-medium"
              >
                AI-Powered Marketing Strategy Generator
              </motion.p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl"
          >
            An intelligent system that generates complete go-to-market strategies using a crew of specialized AI agents.
            Users input product details, and the system performs research, audience segmentation, competitor analysis,
            and budget planning automatically.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {['CrewAI', 'FastAPI', 'Python', 'LLMs', 'React', 'Multi-Agent'].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-4"
          >
            <Link to="/aura-strategy">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore Project</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
            <motion.a
              href="https://github.com/RAFAYQURESHI20/Aura-Strategy_Agent"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-border text-foreground font-semibold rounded-xl hover:bg-secondary transition-all duration-300 flex items-center gap-2"
            >
              <span>View Code</span>
              <span>↗</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

const projects = [
  {
    title: 'SaveMart-AI',
    description: 'Conversational AI assistant built for retail operations, helping customers and staff with inventory, pricing, and product suggestions.',
    tags: ['Chatbot', 'Retail', 'AI', 'Automation'],
    accent: 'from-primary to-[hsl(200,80%,55%)]',
    emoji: '🛒',
    link: 'https://github.com/RAFAYQURESHI20/SaveMart-AI',
  },
  {
    title: 'Shaheen-Pharmacy-AI',
    description: 'Healthcare chatbot that supports pharmacy workflows, prescription guidance, and patient interactions.',
    tags: ['Chatbot', 'Healthcare', 'Pharmacy', 'AI'],
    accent: 'from-accent to-[hsl(290,70%,55%)]',
    emoji: '💊',
    link: 'https://github.com/RAFAYQURESHI20/Shaheen-Pharmacy-AI',
  },
  {
    title: 'SkyDrip-AI',
    description: 'AI-powered assistant for weather-aware decision support, helping users plan with accurate environmental insights.',
    tags: ['Chatbot', 'Weather', 'AI', 'Insights'],
    accent: 'from-[hsl(150,70%,45%)] to-primary',
    emoji: '☁️',
    link: 'https://github.com/RAFAYQURESHI20/SkyDrip-AI',
  },
  {
    title: 'BilalMediGuideAI',
    description: 'Medical chatbot that guides users through symptoms, treatments, and healthcare information with intelligent assistance.',
    tags: ['Chatbot', 'Medical', 'AI', 'Guide'],
    accent: 'from-[hsl(30,80%,55%)] to-[hsl(350,70%,55%)]',
    emoji: '🩺',
    link: 'https://github.com/RAFAYQURESHI20/BilalMediGuideAI',
  },
  {
    title: 'Human-in-the-loop Agent',
    description: 'Agent system that combines human feedback with autonomous decision-making for smarter workflows.',
    tags: ['AI', 'Agent', 'Human-in-the-loop', 'Automation'],
    accent: 'from-primary to-[hsl(200,80%,55%)]',
    emoji: '🤖',
    link: 'https://github.com/RAFAYQURESHI20/Human-in-the-loop_Agent',
  },
  {
    title: 'Agent-switching-swarm',
    description: 'Multi-agent swarm framework that dynamically switches roles and behaviors in real time.',
    tags: ['Swarm', 'AI', 'Multi-Agent', 'Autonomy'],
    accent: 'from-accent to-[hsl(290,70%,55%)]',
    emoji: '🕸️',
    link: 'https://github.com/RAFAYQURESHI20/Agent-switching-swarm',
  },
  {
    title: 'Search-Agent',
    description: 'Intelligent search agent that automates discovery and retrieval across datasets and web sources.',
    tags: ['Search', 'Agent', 'Automation', 'AI'],
    accent: 'from-[hsl(150,70%,45%)] to-primary',
    emoji: '🔎',
    link: 'https://github.com/RAFAYQURESHI20/Search-Agent',
  },
  {
    title: 'Weather and Email Automation Agent',
    description: 'Automated agent that delivers weather updates and email notifications with smart scheduling.',
    tags: ['Weather', 'Email', 'Automation', 'Agent'],
    accent: 'from-[hsl(30,80%,55%)] to-[hsl(350,70%,55%)]',
    emoji: '☁️',
    link: 'https://github.com/RAFAYQURESHI20/Weather-and-Email-Automation-Agent',
  },
  {
    title: 'AR Pharmacy Web App',
    description: 'AR Pharmacy is an online pharmacy web app built with React.js and Firebase. It enables users to securely sign up, upload prescriptions, browse medicines, and place orders. An NLP-based AI chatbot provides basic health guidance and assists users, with real-time updates and a responsive UI.',
    tags: ['React', 'Firebase', 'Chatbot', 'Pharmacy'],
    accent: 'from-[hsl(210,90%,56%)] to-[hsl(200,80%,60%)]',
    emoji: '🧾',
    link: 'https://github.com/RAFAYQURESHI20/AR-Pharmacy_Web_App',
  },
  {
    title: 'GPS TimeSync',
    description: 'The u-blox NEO-M8N was configured in u-center to output NMEA messages at 10 Hz (100 ms) by setting the update rate and adjusting baud rate for stable data flow. BktTimeSync was then set to the same COM port and protocol, syncing the Windows clock with GPS UTC for sub-millisecond time accuracy.',
    tags: ['GPS', 'NMEA', 'Synchronization', 'Precision Time'],
    accent: 'from-[hsl(180,80%,55%)] to-[hsl(200,90%,60%)]',
    emoji: '📡',
    link: 'https://github.com/RAFAYQURESHI20/GPS-',
  },
  {
    title: 'Pneumonia Detection with ANN',
    description: 'Used different ANN models (AlexNet, ResNet, VGG16, ViT) to classify chest images as normal or pneumonia with high accuracy.',
    tags: ['ANN', 'AlexNet', 'ResNet', 'VGG16', 'ViT'],
    accent: 'from-[hsl(240,80%,55%)] to-[hsl(210,90%,60%)]',
    emoji: '🧠',
    link: 'https://github.com/RAFAYQURESHI20/ANN-SEMESTER-PROJECT',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <a href={project.link} target="_blank" rel="noreferrer" className="group block">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80, rotateX: 8 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
        className="relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors duration-500 cursor-pointer"
        style={{ perspective: 1000 }}
      >
      {/* Animated gradient overlay on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
      />

      {/* Gradient top bar with width animation */}
      <motion.div
        className={`h-1 bg-gradient-to-r ${project.accent}`}
        initial={{ width: '0%' }}
        animate={isInView ? { width: '100%' } : {}}
        transition={{ duration: 0.8, delay: index * 0.12 + 0.3, ease: 'easeOut' }}
      />

      <div className="relative p-8 md:p-10">
        <div className="flex items-start justify-between mb-4">
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.12 + 0.5, type: 'spring' }}
            className="text-2xl"
          >
            {project.emoji}
          </motion.span>
          <motion.div
            whileHover={{ rotate: 45, scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/50 group-hover:glow transition-all duration-300"
          >
            ↗
          </motion.div>
        </div>

        <h3 className="heading-md mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.12 + 0.4 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
    </a>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section id="projects" ref={sectionRef} className="section-padding max-w-7xl mx-auto relative">
      {/* Parallax background glow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"
      />

      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16 relative"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-primary text-sm font-medium tracking-widest uppercase mb-3"
        >
          Selected Work
        </motion.p>
        <h2 className="heading-lg">
          Projects that{' '}
          <motion.span
            className="gradient-text inline-block"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            style={{ backgroundSize: '200% 200%' }}
          >
            matter
          </motion.span>
        </h2>
      </motion.div>

      <FeaturedProjectCard />

      <AuraStrategyCard />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
