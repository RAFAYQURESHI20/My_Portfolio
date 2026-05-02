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
            { name: 'JobPulse - Job Intelligence', icon: '🔎', desc: 'AI job discovery & analytics' },
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

{/* JobPulse - AI Job Intelligence Engine */}
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
            Deep dive into JobPulse – AI Job Intelligence Engine
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-card via-card/95 to-card/90 border-2 border-primary/30 backdrop-blur-sm overflow-hidden mb-16"
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
                🔎
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold mb-2">JobPulse – AI Job Intelligence</h3>
                <p className="text-muted-foreground text-lg">Automated job discovery, aggregation, and analytics engine</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-4xl">
              JobPulse automates the discovery and aggregation of job postings from multiple online sources. It normalizes raw listing data using a machine learning classification pipeline, stores results in a PostgreSQL database, and exposes everything via a FastAPI backend, consumed by a React dashboard.
            </p>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { title: 'Multi-source Scraping', desc: 'Rotating proxy support forIndeed, LinkedIn, Rozee', icon: '🕷️' },
                { title: 'NLP Classification', desc: 'Fine-tuned BERT model for job categorization', icon: '🧠' },
                { title: 'Automated Pipeline', desc: 'GitHub Actions + cron daily runs', icon: '⚙️' },
                { title: 'REST API', desc: 'Filtering, pagination, CSV export', icon: '🔗' },
                { title: 'Real-time Dashboard', desc: 'Search, analytics, visualizations', icon: '📊' },
                { title: 'PostgreSQL Storage', desc: 'Efficient data persistence', icon: '🗄️' },
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h4 className="font-semibold mb-1 text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/RAFAYQURESHI20/KhedmaAI_Job"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <span>View Code</span>
                <span>↗</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* ML Pipeline - AI Classification Engine */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">AI Classification Engine</h3>
          
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card via-card/95 to-card/90 border border-primary/20 backdrop-blur-sm overflow-hidden">
            {/* Animated neural network visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-40">
                {/* Input layer nodes */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`input-${i}`}
                    className="absolute w-4 h-4 rounded-full bg-primary"
                    style={{ left: 0, top: 30 + i * 40 }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                  />
                ))}
                {/* Hidden layer nodes */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={`hidden-${i}`}
                    className="absolute w-5 h-5 rounded-full bg-accent"
                    style={{ left: 100, top: 20 + i * 25 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.15, repeat: Infinity }}
                  />
                ))}
                {/* Output layer nodes */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`output-${i}`}
                    className="absolute w-4 h-4 rounded-full bg-green-500"
                    style={{ right: 0, top: 30 + i * 40 }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, delay: 0.6 + i * 0.2, repeat: Infinity }}
                  />
                ))}
                {/* Connection lines - simplified SVG paths */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                  <line x1="16" y1="40" x2="100" y2="20" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  <line x1="16" y1="80" x2="100" y2="70" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  <line x1="16" y1="120" x2="100" y2="120" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  <line x1="100" y1="20" x2="230" y2="40" stroke="currentColor" strokeWidth="1" className="text-accent" />
                  <line x1="100" y1="45" x2="230" y2="80" stroke="currentColor" strokeWidth="1" className="text-accent" />
                  <line x1="100" y1="70" x2="230" y2="120" stroke="currentColor" strokeWidth="1" className="text-accent" />
                </svg>
              </div>
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-6 mt-40">
              <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary mb-2">DistilBERT</div>
                <p className="text-sm text-muted-foreground">Model Architecture</p>
                <p className="text-xs text-muted-foreground">distilbert-base-uncased</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-accent mb-2">45,000+</div>
                <p className="text-sm text-muted-foreground">Training Samples</p>
                <p className="text-xs text-muted-foreground">Labeled job postings</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-green-500 mb-2">18+</div>
                <p className="text-sm text-muted-foreground">Job Categories</p>
                <p className="text-xs text-muted-foreground">Engineering, Marketing, Finance...</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Daily Automated Pipeline Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Daily Automated Pipeline</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-green-500 hidden md:block" />
            
            <div className="space-y-8">
              {[
                { step: 1, title: 'Scrape Job Listings', desc: 'Collect from multiple sources with rotating proxies', icon: '🕷️' },
                { step: 2, title: 'ML Classification', desc: 'Categorize using fine-tuned DistilBERT', icon: '🧠' },
                { step: 3, title: 'Deduplicate & Store', desc: 'Clean data and save to PostgreSQL', icon: '🗄️' },
                { step: 4, title: 'Update Dashboard', desc: 'Refresh React dashboard in real-time', icon: '📊' },
                { step: 5, title: 'Send Report', desc: 'Slack webhook with daily summary', icon: '📱' },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl shadow-lg z-10">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-primary">Step {item.step}</span>
                    </div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 text-center p-4 rounded-xl bg-primary/10 border border-primary/20"
            >
              <p className="text-sm text-muted-foreground">
                ⏰ GitHub Actions runs daily at <span className="font-mono text-primary font-semibold">02:00 UTC</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Submodule - ATS Resume Builder */}
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