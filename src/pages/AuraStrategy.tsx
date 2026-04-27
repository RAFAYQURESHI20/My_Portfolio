import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { SiPython, SiFastapi, SiReact } from 'react-icons/si';
import { Bot, Brain, GitBranch } from 'lucide-react';

export default function AuraStrategy() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start end', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10"
        />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(var(--primary), 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(var(--accent), 0.1) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl shadow-2xl"
            >
              🎯
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                Aura Strategy Agent
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium"
            >
              AI-Powered Marketing Strategy Generator
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            An intelligent system that generates complete go-to-market strategies using a crew of specialized AI agents.
            Users input product details, and the system performs research, audience segmentation, competitor analysis,
            and budget planning automatically.
          </motion.p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Problem</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a comprehensive marketing strategy is time-consuming, expensive, and requires multiple experts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Fragmented Research',
              description: 'Marketers spend days gathering data from multiple sources — audience insights, competitor moves, and market trends.',
              icon: '🔍',
            },
            {
              title: 'High Agency Costs',
              description: 'Hiring strategy consultants or agencies costs thousands of dollars, inaccessible for startups and small teams.',
              icon: '💸',
            },
            {
              title: 'Slow Time-to-Market',
              description: 'Manual strategy development delays product launches and misses critical market windows.',
              icon: '⏳',
            },
            {
              title: 'Inconsistent Quality',
              description: 'Strategy quality varies wildly depending on the experience level of the person creating it.',
              icon: '📉',
            },
            {
              title: 'Siloed Expertise',
              description: 'No single person has deep expertise in research, positioning, content, channels, and budgeting simultaneously.',
              icon: '🧩',
            },
          ].map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Market Analysis</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Existing tools solve pieces of the puzzle, but none deliver a complete strategy autonomously
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              platform: 'ChatGPT / Claude',
              focus: 'General AI Assistance',
              limitations: 'No multi-agent collaboration, no structured workflow, generic outputs',
              color: 'from-emerald-500 to-emerald-600',
            },
            {
              platform: 'HubSpot / SEMrush',
              focus: 'Marketing Analytics & CRM',
              limitations: 'Data-rich but require manual interpretation and strategy formulation',
              color: 'from-orange-500 to-orange-600',
            },
            {
              platform: 'Traditional Agencies',
              focus: 'Full-Service Strategy',
              limitations: 'Expensive, slow turnaround, limited scalability',
              color: 'from-blue-500 to-blue-600',
            },
            {
              platform: 'Notion / Miro Templates',
              focus: 'Strategy Frameworks',
              limitations: 'Static templates with no intelligence or automation',
              color: 'from-purple-500 to-purple-600',
            },
          ].map((platform, index) => (
            <motion.div
              key={platform.platform}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className={`w-full h-2 bg-gradient-to-r ${platform.color} rounded-full mb-6`} />
              <h3 className="text-2xl font-bold mb-2">{platform.platform}</h3>
              <p className="text-primary font-medium mb-3">{platform.focus}</p>
              <p className="text-muted-foreground">{platform.limitations}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Gap */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Gap</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            No existing solution combines autonomous research, multi-agent collaboration, and structured
            strategy generation in one unified system. Aura Strategy Agent bridges this gap with a crew
            of specialized AI agents that collaborate to deliver complete, actionable marketing strategies
            in minutes — not weeks.
          </p>
        </motion.div>
      </section>

      {/* System Architecture */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">System Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A multi-agent ecosystem powered by CrewAI, where each agent specializes in a critical marketing function
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Research Agent', icon: '🔍', desc: 'Gathers market data, trends, and industry insights' },
            { name: 'Audience Segmentation Agent', icon: '🎯', desc: 'Identifies and profiles ideal customer segments' },
            { name: 'Competitor Analysis Agent', icon: '🕵️', desc: 'Analyzes competitor positioning and strategies' },
            { name: 'Positioning Agent', icon: '📌', desc: 'Crafts unique value propositions and brand positioning' },
            { name: 'Channel Strategy Agent', icon: '📢', desc: 'Recommends optimal marketing channels and tactics' },
            { name: 'Content Ideation Agent', icon: '✍️', desc: 'Generates campaign ideas and content themes' },
            { name: 'Budget Planning Agent', icon: '💰', desc: 'Allocates budget across channels for maximum ROI' },
            { name: 'Orchestrator Agent', icon: '🧠', desc: 'Coordinates the crew and synthesizes final strategy' },
          ].map((module, index) => (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {module.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{module.name}</h3>
              <p className="text-muted-foreground">{module.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with modern, scalable technologies for automation and real-world business impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Python', icon: <SiPython className="w-10 h-10 text-[#3776AB]" />, desc: 'Core language for AI agent development and backend logic' },
            { name: 'CrewAI', icon: <Bot className="w-10 h-10 text-primary" />, desc: 'Multi-agent orchestration framework for collaborative AI crews' },
            { name: 'FastAPI', icon: <SiFastapi className="w-10 h-10 text-[#009688]" />, desc: 'High-performance async API framework for backend services' },
            { name: 'LLMs', icon: <Brain className="w-10 h-10 text-primary" />, desc: 'Open-source and API-based large language models for reasoning' },
            { name: 'React', icon: <SiReact className="w-10 h-10 text-[#61DAFB]" />, desc: 'Frontend framework ready for seamless UI integration' },
            { name: 'Multi-Agent System', icon: <GitBranch className="w-10 h-10 text-primary" />, desc: 'Distributed agent architecture for parallel task execution' },
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-muted-foreground">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow Pipeline */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Workflow Pipeline</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From product input to complete strategy in minutes
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {[
            { step: 'Product Input', icon: '📦', desc: 'Enter product details and goals' },
            { step: 'Research', icon: '🔍', desc: 'Agents gather market intelligence' },
            { step: 'Analysis', icon: '📊', desc: 'Audience & competitor insights' },
            { step: 'Strategy Build', icon: '🏗️', desc: 'Positioning, channels & content' },
            { step: 'Budget Plan', icon: '💰', desc: 'Optimal allocation across channels' },
            { step: 'Deliver', icon: '📄', desc: 'Complete strategy document' },
          ].map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl mb-4 shadow-lg"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{step.step}</h3>
              <p className="text-sm text-muted-foreground max-w-32">{step.desc}</p>
              {index < 5 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-primary to-accent"
                  style={{ transform: 'translateX(10px)' }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Capabilities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What makes Aura Strategy Agent powerful
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-card via-card/95 to-card/90 border-2 border-primary/30 backdrop-blur-sm overflow-hidden"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
                viewport={{ once: true }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl shadow-lg"
              >
                🚀
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Complete GTM Strategy</h3>
                <p className="text-muted-foreground text-lg">End-to-end marketing strategy generation powered by AI agents</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-4xl">
              Enter your product details and let a crew of AI agents collaborate to build a full marketing strategy —
              including target audience insights, positioning, channel strategy, content ideas, and budget allocation.
              Designed for automation, scalability, and real-world business impact.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Core Features</h4>
                <ul className="space-y-3">
                  {[
                    'Autonomous market research',
                    'AI-driven audience segmentation',
                    'Competitor landscape analysis',
                    'Brand positioning & messaging',
                    'Channel strategy recommendations',
                    'Content calendar & ideas',
                    'Budget allocation planning',
                  ].map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Impact</h4>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="text-2xl font-bold text-primary">10x</div>
                    <div className="text-sm text-muted-foreground">Faster Strategy Development</div>
                  </div>
                  <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                    <div className="text-2xl font-bold text-accent">80%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction vs Agencies</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/RAFAYQURESHI20/Aura-Strategy_Agent"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <span>View Code</span>
                <span>↗</span>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-border text-foreground font-semibold rounded-xl hover:bg-secondary transition-all duration-300 flex items-center gap-2"
              >
                <span>View Project</span>
                <span>→</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Back to Portfolio */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-lg"
            >
              <span>← Back to Portfolio</span>
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

