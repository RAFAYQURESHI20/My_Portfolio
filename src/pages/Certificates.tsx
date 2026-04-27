import { motion } from 'framer-motion';
import { Suspense, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleScene from '@/components/ParticleScene';
import PageTransition from '@/components/PageTransition';

interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link?: string;
}

const certificates: CertificateItem[] = [
  {
    title: 'Spring 2023 Excellence Award',
    issuer: 'Academic Achievement Program',
    date: 'Spring 2023',
    description: 'Recognized for outstanding academic performance and dedication to mastering complex technical concepts during the Spring semester. This achievement reflects my commitment to continuous learning and excellence in emerging technologies.',
    image: 'spring 2023.jpeg',
  },
  {
    title: 'Fall 2023 Excellence Award',
    issuer: 'Academic Achievement Program',
    date: 'Fall 2023',
    description: 'Awarded for demonstrating innovative thinking and practical application of advanced technological skills. This certification highlights my ability to transform theoretical knowledge into real-world solutions.',
    image: 'fall 2023.jpeg',
  },
  {
    title: 'Professional Internship Recognition',
    issuer: 'Industry Leadership Program',
    date: '2023-2024',
    description: 'Official acknowledgment of exceptional performance during a comprehensive internship experience. This recognition validates my professional growth, technical expertise, and ability to contribute meaningfully to industry projects.',
    image: 'Internship.jpeg',
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const openModal = (cert: CertificateItem) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
      <section id="certificates" className="relative py-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.14),transparent_30%)] pointer-events-none" />
        <Suspense fallback={<div className="absolute inset-0 bg-background/80" />}>
          <ParticleScene />
        </Suspense>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Certificates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and achievements that validate my expertise and commitment to continuous learning in technology and AI.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="h-64 mb-4 overflow-hidden rounded-lg bg-muted flex items-center justify-center cursor-pointer" onClick={() => openModal(cert)}>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DZXJ0aWZpY2F0ZTwvdGV4dD4KPC9zdmc+';
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  {cert.link && cert.link !== '#' && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certificate Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors text-2xl"
            >
              ✕
            </button>
            <div className="bg-card rounded-lg p-6 shadow-2xl">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
                <p className="text-primary font-medium mb-1">{selectedCert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-4">{selectedCert.date}</p>
                <p className="text-sm text-muted-foreground">{selectedCert.description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Certificates;