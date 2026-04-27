import { motion } from 'framer-motion';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleScene from '@/components/ParticleScene';
import PageTransition from '@/components/PageTransition';

interface EducationItem {
  degree: string;
  institution: string;
  grade: string;
  period: string;
  description: string;
  link: string | null;
  emoji: string;
}

const education: EducationItem[] = [
  {
    degree: 'Matriculation',
    institution: 'New Siddeeq Public School',
    grade: 'A+ in Biology',
    period: '2010-2020',
    description: 'Embarked on my educational journey with a solid foundation in sciences, where I developed a keen interest in Biology. This period shaped my analytical thinking and curiosity about the natural world, laying the groundwork for my future in technology and AI.',
    link: null,
    emoji: '📚',
  },
  {
    degree: 'Intermediate (Pre-Engineering)',
    institution: 'Concordia College',
    grade: 'A+',
    period: '2020-2022',
    description: 'Advanced my studies in pre-engineering, mastering mathematics, physics, and chemistry. This rigorous program honed my problem-solving skills and prepared me for the challenges of engineering and computer science disciplines.',
    link: 'https://concordia.edu.pk/',
    emoji: '🏫',
  },
  {
    degree: 'Bachelor of Science in Artificial Intelligence',
    institution: 'Sir Syed CASE Institute of Technology',
    grade: '3.5 CGPA',
    period: '2022-2026',
    description: 'Completed my undergraduate degree in AI, diving deep into machine learning algorithms, neural networks, data science, and intelligent systems. This comprehensive program equipped me with cutting-edge skills to innovate in the rapidly evolving field of artificial intelligence.',
    link: 'https://case.edu.pk/',
    emoji: '🤖',
  },
];

const Education = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
      <section id="education" className="relative py-20 px-6 md:px-12 overflow-hidden">
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
              Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey through various institutions that shaped my knowledge and skills in technology and AI.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-2xl mb-4">{edu.emoji || '🎓'}</div>
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                  <p className="text-sm font-medium text-accent mb-4">{edu.grade}</p>
                  <p className="text-sm text-muted-foreground mb-4">{edu.description}</p>
                  {edu.link && (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Visit Institution →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Education;