import { motion, AnimatePresence } from 'framer-motion';
import { Suspense, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleScene from '@/components/ParticleScene';
import PageTransition from '@/components/PageTransition';

const experienceIntro = `The National Engineering and Scientific Commission (NESCOM) is one of Pakistan’s premier government research organizations operating under the Ministry of Defence, dedicated to advancing cutting-edge engineering, aerospace, and strategic technologies. Established in 2000, NESCOM plays a critical role in strengthening national security by leading high-impact research and development in areas such as defense systems, communication technologies, and advanced engineering solutions. With a strong focus on innovation, precision, and technological self-reliance, the organization contributes significantly to Pakistan’s scientific growth and defense capabilities, making it a highly respected institution for engineers and researchers working on complex, real-world problems.`;

const internshipDetails = [
  { label: 'Role', value: 'Intern — Embedded Systems & Time Synchronization' },
  { label: 'Organization', value: 'NESCOM' },
  { label: 'Duration', value: '2 months' },
];

const contributions = [
  'Configured the u-blox NEO-M8N GNSS receiver in u-center for 10 Hz NMEA output and ensured stable baud rate communication.',
  'Implemented GPS-based time synchronization using BktTimeSync to align Windows system time with GPS UTC for sub-millisecond precision.',
  'Analyzed data flow and signal integrity to optimize reliable positioning and timing performance under practical lab conditions.',
  'Produced technical documentation, test reports, and deployment notes that supported team handoff and future system calibration.',
  'Collaborated closely with NESCOM engineers to translate defense-grade requirements into robust configuration and validation workflows.',
];

const project = {
  title: 'GPS TimeSync',
  description:
    'The u-blox NEO-M8N was configured in u-center to output NMEA messages at 10 Hz (100 ms) by setting the update rate and adjusting baud rate for stable data flow. BktTimeSync was then set to the same COM port and protocol, syncing the Windows clock with GPS UTC for sub-millisecond time accuracy.',
  tags: ['GPS', 'NMEA', 'Synchronization', 'Precision Time'],
  accent: 'from-[hsl(180,80%,55%)] to-[hsl(200,90%,60%)]',
  emoji: '📡',
  link: 'https://github.com/RAFAYQURESHI20/GPS-',
};

const Experience = () => {
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

      <section id="experience" className="relative overflow-hidden py-20 px-6 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.14),transparent_30%)] pointer-events-none" />
        <Suspense fallback={<div className="absolute inset-0 bg-background/80" />}>
          <ParticleScene />
        </Suspense>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <div className="rounded-[2rem] border border-border bg-card p-8 shadow-xl shadow-primary/5 text-center">
              <p className="text-sm font-medium tracking-[0.24em] text-primary uppercase mb-3">Professional Internship</p>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">NESCOM Internship Experience</h1>
              <p className="mx-auto max-w-3xl text-base md:text-lg text-muted-foreground leading-8">
                A focused two-month internship at NESCOM where I contributed to precision time synchronization, embedded system configuration, and research-driven engineering workflows within a top-tier defense research environment.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-8"
            >
              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-xl shadow-primary/5">
                <div className="mb-6 space-y-4">
                  <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    Internship Overview
                  </span>
                  <p className="text-base leading-8 text-muted-foreground">
                    {experienceIntro}
                  </p>
                </div>
              </div>

              {internshipDetails.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + (index + 1) * 0.1 }}
                  className="rounded-[2rem] border border-border bg-card p-8 shadow-xl shadow-primary/5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary mb-2">{item.label}</p>
                      <p className="text-lg font-bold text-foreground">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-xl shadow-primary/5">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">My Contributions</p>
                    <h2 className="mt-3 text-3xl font-bold text-foreground">Delivered measurable engineering value</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {contributions.map((contribution) => (
                    <div key={contribution} className="rounded-3xl border border-border bg-background/80 p-5">
                      <p className="text-sm leading-7 text-muted-foreground">{contribution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-8"
            >
              <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-[2rem] bg-slate-950/5">
                  <button
                    type="button"
                    onClick={() => setImageOpen(true)}
                    aria-label="Open internship image"
                    className="absolute inset-0 z-10"
                  />
                  <div className="relative h-[320px] w-full sm:h-[360px] md:h-[420px]">
                    <img
                      src="/Internship.jpeg"
                      alt="NESCOM internship overview"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <div className="relative z-10 space-y-3 p-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Full-screen preview</span>
                    <span className="text-foreground">Click the image to enlarge</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-7">
                    High-resolution internship documentation view from NESCOM, presented in a responsive, undistorted format with a premium portfolio experience.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-xl shadow-primary/5">
                <div className="flex items-center justify-between gap-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Project Deliverable</p>
                    <h2 className="mt-3 text-3xl font-bold text-foreground">GPS TimeSync</h2>
                  </div>
                  <div className="text-3xl">{project.emoji}</div>
                </div>

                <p className="mt-6 text-sm leading-7 text-muted-foreground">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
                >
                  View Repository
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {imageOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setImageOpen(false)}
          >
            <motion.div
              className="relative max-h-full w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-black"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setImageOpen(false)}
                className="absolute right-4 bottom-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Close image preview"
              >
                ✕
              </button>
              <motion.img
                src="/Internship.jpeg"
                alt="NESCOM internship full screen image"
                className="h-full w-full object-contain"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default Experience;
