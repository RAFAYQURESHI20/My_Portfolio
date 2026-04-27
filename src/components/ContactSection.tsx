import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto relative">
      {/* Background glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none"
      />

      <div ref={ref} className="max-w-2xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-primary text-sm font-medium tracking-widest uppercase mb-3"
          >
            Get In Touch
          </motion.p>
          <h2 className="heading-lg mb-4">
            Let's build something{' '}
            <motion.span
              className="gradient-text inline-block"
              animate={isInView ? { rotate: [0, 2, -2, 0] } : {}}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              amazing
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground mb-8"
          >
            Have a project in mind? I'd love to hear about it.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 }}
            className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="mailto:abdulrafay27110802@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email me
            </a>
            <a
              href="https://wa.me/923045759899"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
