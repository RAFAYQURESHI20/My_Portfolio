import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

import { SiGooglecalendar, SiGmail } from "react-icons/si";
import { MdOutlineWaves } from "react-icons/md";

const WhatsAppIcon = () => (
  <span aria-hidden className="text-3xl">💬</span>
);


export default function SmartAppointmentAutomation() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const workflowRef = useRef<HTMLDivElement | null>(null);

  const scrollToWorkflow = () => {
    workflowRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10"
        />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(var(--primary), 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(var(--accent), 0.1) 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="relative w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl shadow-2xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 blur-xl"
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div className="relative z-10 flex items-center gap-2">
                <span className="text-3xl">🤖</span>
              </motion.div>
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                Smart Appointment Automation System
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium"
            >
              Turn WhatsApp into a scheduling assistant powered by Gemini + n8n.
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            This workflow transforms natural conversations (including voice) into real-time calendar bookings,
            automated confirmations, and structured data persistence using Google services.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <motion.a
              href="https://github.com/RAFAYQURESHI20/smart-appointment-automation"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaGithub className="text-lg" />
              <span>View Code</span>
              <span>↗</span>
            </motion.a>

            <motion.button
              onClick={scrollToWorkflow}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-border text-foreground font-semibold rounded-xl hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MdOutlineWaves className="text-lg" />
              <span>Workflow Preview</span>
              <span>→</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Project Overview</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An AI-powered WhatsApp appointment booking automation system that handles conversations, voice,
            scheduling, confirmations, and data persistence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Natural Conversations",
              icon: "💬",
              desc: "Gemini understands intent and guides users through booking details.",
            },
            {
              title: "Voice Transcription",
              icon: "🎙️",
              desc: "WhatsApp voice notes are transcribed into structured scheduling requests.",
            },
            {
              title: "Real-time Booking",
              icon: "📅",
              desc: "Availability is checked instantly and calendar events are created automatically.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>

            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Features Showcase</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium automation building blocks designed for reliable scheduling at scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { t: "AI-Powered Chat", d: "Natural language appointment booking with context-aware dialogue.", i: "🤖" },
            { t: "Voice Support", d: "Automated transcription for WhatsApp voice messages.", i: "🎙️" },
            { t: "Smart Scheduling", d: "Availability checking + real-time calendar bookings.", i: "📆" },
            { t: "Data Persistence", d: "Stores and updates user data using Google Sheets.", i: "📊" },
            { t: "Email Confirmations", d: "Automated confirmation emails via Gmail.", i: "📧" },
            { t: "Conversation Memory", d: "Maintains context using memory buffers for fewer back-and-forths.", i: "🧠" },
            { t: "Timezone Intelligence", d: "Timezone + daylight saving handling for accurate scheduling.", i: "🌍" },
            { t: "Real-time Synchronization", d: "Keeps calendar + workflow state updated as new messages arrive.", i: "🔄" },
            { t: "Secure OAuth2 Integration", d: "OAuth2 authentication for Google services and protected actions.", i: "🛡️" },
            { t: "WhatsApp Native Integration", d: "Direct WhatsApp Business API integration for native scheduling flows.", i: "📱" },
          ].map((f, index) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{f.i}</div>
              <h3 className="text-2xl font-bold mb-2">{f.t}</h3>
              <p className="text-muted-foreground">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow Architecture */}
      <section ref={workflowRef} className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Workflow Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            WhatsApp → Gemini AI → n8n → Google Services
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {[
            { step: "WhatsApp Business", icon: <FaWhatsapp className="w-8 h-8" />, desc: "Receives user chat + voice messages." },

            { step: "Gemini AI", icon: <span className="text-3xl">✨</span>, desc: "Extracts intent, creates scheduling actions." },
            { step: "n8n Orchestration", icon: <span className="text-3xl">🔁</span>, desc: "Routes steps, triggers tools, manages flow." },
            { step: "Google Calendar", icon: <SiGooglecalendar className="w-8 h-8" />, desc: "Creates and updates appointment events." },
            { step: "Google Sheets", icon: <span className="text-3xl">📄</span>, desc: "Persists user data for reuse and continuity." },
            { step: "Gmail Confirmations", icon: <SiGmail className="w-8 h-8" />, desc: "Sends booking confirmations and updates." },
          ].map((node, index) => (
            <motion.div
              key={node.step}
              initial={{ opacity: 0, x: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl mb-4 shadow-lg"
              >
                {node.icon}
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{node.step}</h3>
              <p className="text-sm text-muted-foreground max-w-40">{node.desc}</p>
              {index < 5 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.12 + 0.2 }}
                  viewport={{ once: true }}
                  className="hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-primary to-accent"
                  style={{ transform: "translateX(16px)" }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20 px-6 max-w-6xl mx-auto bg-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Business Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reduce no-shows, increase throughput, and scale scheduling without adding staff.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-card via-card/95 to-card/90 border-2 border-primary/30 backdrop-blur-sm overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 grid md:grid-cols-2 gap-8">
            {[
              { k: "24/7 Automation", v: "Instant scheduling across time zones", icon: "⏱️" },
              { k: "Reduced No-shows", v: "Email confirmations + real-time booking confirmation", icon: "✅" },
              { k: "Scalable Management", v: "Handles multiple appointment flows concurrently", icon: "📈" },
              { k: "Less Staff Workload", v: "Automates FAQs, booking, confirmations, and updates", icon: "🧑‍💻" },
            ].map((x, i) => (
              <motion.div
                key={x.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{x.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{x.k}</h3>
                    <p className="text-muted-foreground">{x.v}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technology Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production-grade automation built around reliable APIs and secure auth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "n8n", icon: "🔧", desc: "Workflow automation orchestrator." },
            { name: "Google Gemini AI", icon: "🧠", desc: "AI intent extraction + conversational scheduling." },
            { name: "WhatsApp Business API", icon: "📱", desc: "Native chat + voice message input." },
            { name: "Google Calendar API", icon: "📅", desc: "Real-time availability + booking events." },
            { name: "Google Sheets API", icon: "📊", desc: "Persist user data and booking details." },
            { name: "Gmail API", icon: "📧", desc: "Email confirmations and automated updates." },
            { name: "OAuth2 Authentication", icon: "🛡️", desc: "Secure integration with Google services." },
            { name: "Timezone Handling", icon: "🌍", desc: "Accurate scheduling across DST and zones." },
          ].map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="mb-4 text-4xl">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-muted-foreground">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GitHub CTA Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto bg-secondary/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-card via-card/95 to-card/90 border-2 border-primary/30 backdrop-blur-sm overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Explore the repository</h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                View the full n8n workflow + integration details for WhatsApp, Gemini, and Google services.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://github.com/RAFAYQURESHI20/smart-appointment-automation"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <FaGithub className="text-lg" />
                <span>GitHub Repo</span>
                <span>↗</span>
              </motion.a>

              <motion.button
                onClick={scrollToWorkflow}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-border text-foreground font-semibold rounded-xl hover:bg-secondary transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <span>Explore Workflow</span>
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

