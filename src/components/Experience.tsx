import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const experiences = [
  {
    company: 'Mckesson',
    role: 'Sr. UX Designer',
    period: 'Sep 2024 – Present',
    location: 'Deepmindz Innovations',
    highlights: [
      'Leading user-centered design for the CGAT (Cancer Genomic Analysis and Therapy) therapy ordering portal',
      'Collaborating with developers, product managers and clinicians',
      'Conducting user research and usability testing; creating wireframes, prototypes and hi-fi designs in Figma',
    ],
  },
  {
    company: 'Phreesia',
    role: 'UX Designer 2',
    period: 'Nov 2022 – Aug 2024',
    location: 'Rayden Interactive',
    highlights: [
      'Visual designer for healthcare projects; designed Phreesia Life Science App',
      'Led Unified Campaign Platform design; maintained Phreesia Design System (Compass)',
      'Ran design workshops and mentorship programs',
    ],
  },
  {
    company: 'Code Brew Labs & Blocktech Brew',
    role: 'UI/UX Designer',
    period: 'Nov 2021 – Oct 2022',
    location: '',
    highlights: [
      'Designed responsive interfaces across blockchain, e-commerce, healthcare and NFT domains',
      'Led UX/UI for Crickpe mobile app',
      'Created CRM dashboard and mobile store assets',
    ],
  },
  {
    company: 'Zessta Software Services',
    role: 'UX Designer',
    period: 'Dec 2020 – Oct 2021',
    location: '',
    highlights: [
      'Designed a Day Care Nursery Management Platform (website, admin, child management UX)',
      'Revamped company website',
      'Created social marketing visuals',
    ],
  },
];

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      <div className="absolute -left-6 lg:-left-12 top-8 w-4 h-4 rounded-full bg-purple-500 border-4 border-black z-10 group-hover:scale-125 transition-transform" />
      
      <div className="bg-white/5 backdrop-blur-sm p-8 lg:p-10 rounded-2xl hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-purple-500/50 group">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-2">
          <div>
            <h3 className="text-3xl lg:text-4xl mb-2 group-hover:text-purple-400 transition-colors">
              {experience.company}
            </h3>
            <p className="text-xl text-white/80">{experience.role}</p>
            {experience.location && (
              <p className="text-sm text-white/50 mt-1">{experience.location}</p>
            )}
          </div>
          <span className="text-sm text-white/50 whitespace-nowrap bg-white/5 px-4 py-2 rounded-full">
            {experience.period}
          </span>
        </div>
        <ul className="space-y-3">
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="text-white/70 text-base leading-relaxed flex gap-4">
              <span className="text-purple-400 mt-1.5 text-xl">→</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} id="experience" className="py-32 lg:py-40 px-6 lg:px-12 bg-gradient-to-b from-black to-neutral-950 relative overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-6">
            Work History
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wide">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 lg:left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-purple-500/30 to-transparent ml-[-1.125rem] lg:ml-[-2.625rem]" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}