import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const links = [
  { label: 'GitHub', href: 'https://github.com/RAFAYQURESHI20' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-rafay-bb8a48263?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="border-t border-border py-8 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} ABDUL RAFAY. All rights reserved.
        </motion.p>
        <div className="flex items-center gap-6">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -2, color: 'hsl(175, 80%, 50%)' }}
              className="text-sm text-muted-foreground transition-colors duration-300"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
