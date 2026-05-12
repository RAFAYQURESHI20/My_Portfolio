import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiSupabase, SiPostgresql } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";

function WorkflowNode({
  title,
  subtitle,
  icon,
  accent,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: string;
}) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <motion.div
        whileHover={{ scale: 1.08, y: -4 }}
        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center text-3xl shadow-lg`}
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-44">{subtitle}</p>
    </div>
  );
}

export default function N8nRagAgent() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

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
              <motion.div className="relative z-10">🧠</motion.div>
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                n8n RAG Agent
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium"
            >
              Google Gemini • Supabase Vector Store • Postgres Memory
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A Retrieval-Augmented Generation (RAG) conversational agent built inside n8n.
            Upload documents → embed them → retrieve semantic context → generate responses with persistent
            chat memory.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <motion.a
              href="https://github.com/RAFAYQURESHI20/RAG-AGENT"
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
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-border text-foreground font-semibold rounded-xl hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2"
              onClick={() => {
                const el = document.getElementById("project-flow");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <MdOutlineWeb className="text-lg" />
              <span>Explore Architecture</span>
              <span>→</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Overview */}
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
            An end-to-end RAG agent where n8n orchestrates Gemini embeddings, Supabase semantic search,
            and PostgreSQL-based persistent chat memory.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Conversational RAG",
              icon: "🤖",
              desc: "Answers using retrieved document context for grounded responses.",
            },
            {
              title: "Document Ingestion",
              icon: "📚",
              desc: "PDF + Drive workflows that embed and index knowledge automatically.",
            },
            {
              title: "Persistent Memory",
              icon: "🧠",
              desc: "Long-term conversation history stored in Postgres for continuity.",
            },
          ].map((x, idx) => (
            <motion.div
              key={x.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{x.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{x.title}</h3>
              <p className="text-muted-foreground">{x.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architecture Flow */}
      <section id="project-flow" className="py-20 px-6 max-w-7xl mx-auto bg-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Architecture Flow</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            User Chat → Gemini → Supabase Vector Search → Postgres Memory → AI Response
          </p>
        </motion.div>

        <div className="flex flex-col gap-10">
          {/* Main conversational pipeline */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {[
              {
                title: "User Chat",
                subtitle: "Message + intent",
                icon: "💬",
                accent: "from-primary/60 to-accent/60",
              },
              {
                title: "Gemini Agent",
                subtitle: "Chat + embeddings",
                icon: "✨",
                accent: "from-primary to-accent",
              },
              {
                title: "Supabase Search",
                subtitle: "Semantic context",
                icon: <SiSupabase className="w-9 h-9" />,
                accent: "from-emerald-500 to-cyan-500",
              },
              {
                title: "Postgres Memory",
                subtitle: "Persistent chat",
                icon: <SiPostgresql className="w-9 h-9" />,
                accent: "from-primary/70 to-[hsl(215,90%,60%)]",
              },
              {
                title: "AI Response",
                subtitle: "Grounded generation",
                icon: "🧾",
                accent: "from-accent to-primary",
              },
            ].map((node, index) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center"
              >
                <WorkflowNode
                  title={node.title}
                  subtitle={node.subtitle}
                  icon={node.icon}
                  accent={node.accent}
                />

                {index < 4 && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "120px" }}
                    transition={{ duration: 0.7, delay: index * 0.12 + 0.15 }}
                    viewport={{ once: true }}
                    className="hidden lg:block absolute top-10 right-[-60px] h-0.5 bg-gradient-to-r from-primary to-accent"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Ingestion pipeline */}
          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold">Ingestion Pipeline</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
                Google Drive → PDF Extraction → Embeddings → Supabase Vector Store
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { t: "Drive Files", i: "🗂️", a: "from-primary/50 to-accent/50" },
                { t: "PDF Extraction", i: "📄", a: "from-accent/50 to-primary/50" },
                { t: "Embeddings", i: "🧬", a: "from-emerald-500/60 to-cyan-500/60" },
                { t: "Supabase Index", i: "🧠", a: "from-primary to-[hsl(200,90%,55%)]" },
              ].map((s, idx) => (
                <motion.div
                  key={s.t}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.a} flex items-center justify-center text-2xl shadow`}>
                    {s.i}
                  </div>
                  <h4 className="text-lg font-semibold mt-4">{s.t}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Main Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for semantic retrieval + persistent conversational memory.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              t: "Conversational RAG Agent",
              d: "Generates answers grounded in retrieved document chunks.",
              i: "🤖",
            },
            { t: "Semantic Search", d: "Supabase vector embeddings for context matching.", i: "🔎" },
            {
              t: "Persistent Chat Memory",
              d: "Postgres stores conversation history for continuity.",
              i: "🗄️",
            },
            {
              t: "Gemini Embeddings",
              d: "Embeddings + responses generated via Google Gemini.",
              i: "🧠",
            },
            {
              t: "PDF / Binary Ingestion",
              d: "Pipeline supports document extraction workflows.",
              i: "📚",
            },
            {
              t: "Workflow Automation in n8n",
              d: "Orchestrated end-to-end using n8n visual workflows.",
              i: "🔄",
            },
          ].map((f, idx) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{f.i}</div>
              <h3 className="text-2xl font-bold mb-2">{f.t}</h3>
              <p className="text-muted-foreground">{f.d}</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technology Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for robust automation, semantic retrieval, and long-term memory.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            "n8n",
            "Google Gemini",
            "Gemini Embeddings",
            "Supabase Vector Store",
            "PostgreSQL Memory",
            "RAG",
            "PDF Processing",
            "Semantic Search",
          ].map((tag, idx) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </section>

      {/* GitHub CTA + Back */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
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
                View n8n workflow + Gemini/Supabase/Postgres integration details.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://github.com/RAFAYQURESHI20/RAG-AGENT"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <FaGithub className="text-lg" />
                <span>View Code</span>
                <span>↗</span>
              </motion.a>

              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-border text-foreground font-semibold rounded-xl hover:bg-secondary transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <span>← Back to Portfolio</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

