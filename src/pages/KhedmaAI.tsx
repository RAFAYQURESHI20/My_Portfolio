import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function KhedmaAI() {
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
              🤖
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                Khedma AI
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium"
            >
              AI-Powered Job Automation & Career Intelligence Platform
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Revolutionizing the job market with intelligent automation, AI-driven matching,
            and ATS-optimized career tools in one unified ecosystem.
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
            Modern job seekers face fragmented platforms, manual processes, and ATS rejection barriers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Scattered Job Data',
              description: 'Job seekers waste hours across multiple platforms like Rozee, Indeed, and LinkedIn with no unified view.',
              icon: '🔍',
            },
            {
              title: 'Manual Repetitive Applications',
              description: 'Copy-pasting resumes and filling forms manually for each job application.',
              icon: '📝',
            },
            {
              title: 'No Centralized Tracking',
              description: 'Lost track of applications, interviews, and follow-ups across different platforms.',
              icon: '📊',
            },
            {
              title: 'Skill-Job Mismatch',
              description: 'Difficulty finding jobs that match actual skills and career aspirations.',
              icon: '🎯',
            },
            {
              title: 'ATS Compatibility Issues',
              description: 'Resumes rejected by Applicant Tracking Systems due to poor formatting and missing keywords.',
              icon: '⚠️',
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

      {/* Literature Review */}
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
            Existing platforms lack comprehensive AI-driven solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              platform: 'LinkedIn',
              focus: 'Networking & Job Search',
              limitations: 'No automation, manual application process',
              color: 'from-blue-500 to-blue-600',
            },
            {
              platform: 'Indeed',
              focus: 'Job Search Only',
              limitations: 'Basic search, no AI matching or tracking',
              color: 'from-red-500 to-red-600',
            },
            {
              platform: 'Sonara AI',
              focus: 'Job Application Automation',
              limitations: 'Limited transparency, no comprehensive analytics',
              color: 'from-purple-500 to-purple-600',
            },
            {
              platform: 'Google Career Dreamer',
              focus: 'Career Exploration',
              limitations: 'Theoretical execution, not practical implementation',
              color: 'from-green-500 to-green-600',
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

      {/* Gap Identified */}
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
            No platform combines job aggregation, AI matching, automation, and analytics
            in one unified ecosystem. Khedma AI bridges this gap with intelligent,
            transparent, and user-controlled career automation.
          </p>
        </motion.div>
      </section>

      {/* Solution */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Solution</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unified AI-driven system with semi-automation, user control, and complete transparency
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <span className="text-2xl">🎯</span>
            <span className="text-lg font-medium">AI + Human Control + Transparency</span>
          </div>
        </motion.div>
      </section>

      {/* System Modules */}
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
            Eight interconnected modules working together to revolutionize job searching
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'ATS Resume Builder & Checker', icon: '📄', desc: 'AI-powered resume optimization' },
            { name: 'Career DNA & Insights', icon: '🧬', desc: 'Personal career profiling' },
            { name: 'Job Scraping & Aggregation', icon: '🔍', desc: 'Unified job data collection' },
            { name: 'AI Job Matching', icon: '🎯', desc: 'Intelligent job recommendations' },
            { name: 'Auto-Apply Agent', icon: '⚡', desc: 'Semi-automated applications' },
            { name: 'User Dashboard', icon: '📊', desc: 'Comprehensive tracking' },
            { name: 'Admin Dashboard', icon: '⚙️', desc: 'System management' },
            { name: 'Data & Feedback Layer', icon: '📈', desc: 'Analytics and insights' },
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

      {/* Workflow */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Workflow Pipeline</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seamless end-to-end career automation process
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {[
            { step: 'Resume Upload', icon: '📄', desc: 'Upload and parse resume' },
            { step: 'Career DNA Analysis', icon: '🧬', desc: 'Extract skills and preferences' },
            { step: 'Job Aggregation', icon: '🔍', desc: 'Collect relevant opportunities' },
            { step: 'AI Matching', icon: '🎯', desc: 'Find perfect job fits' },
            { step: 'Auto Apply', icon: '⚡', desc: 'Apply with user approval' },
            { step: 'Dashboard Tracking', icon: '📊', desc: 'Monitor all activities' },
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

      {/* Featured Submodule */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Module</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dive into our ATS Resume Builder & Checker
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
                📄
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold mb-2">ATS Resume Builder & Checker</h3>
                <p className="text-muted-foreground text-lg">AI-powered resume optimization for Applicant Tracking Systems</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-4xl">
              An AI-powered module that analyzes and optimizes resumes for Applicant Tracking Systems (ATS).
              It identifies missing keywords, formatting issues, and provides actionable suggestions to improve job success rate.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {[
                    'Resume parsing using NLP',
                    'ATS scoring system',
                    'Keyword optimization',
                    'Formatting analysis',
                    'Smart improvement suggestions',
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
                    <div className="text-2xl font-bold text-primary">85%</div>
                    <div className="text-sm text-muted-foreground">ATS Pass Rate Improvement</div>
                  </div>
                  <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                    <div className="text-2xl font-bold text-accent">60%</div>
                    <div className="text-sm text-muted-foreground">Faster Application Process</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/RAFAYQURESHI20/Khedma-AI-ATS-Resume"
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