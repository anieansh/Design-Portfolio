import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const certifications = [
  {
    title: 'Human-Centered Design: an Introduction',
    issuer: 'UC San Diego Design Lab',
    date: 'Nov 2025',
    credentialId: 'WAAYRG09PG6R',
    link: 'https://www.coursera.org/account/accomplishments/verify/WAAYRG09PG6R',
    color: 'from-purple-500 to-pink-500',
    category: 'Design Thinking',
  },
  {
    title: 'Foundations of Project Management',
    issuer: 'Google',
    date: 'Nov 2025',
    credentialId: 'DAHJHDU8XDRB',
    link: 'https://www.coursera.org/account/accomplishments/verify/DAHJHDU8XDRB',
    color: 'from-blue-500 to-cyan-500',
    category: 'Project Management',
  },
  {
    title: 'Understanding User Needs',
    issuer: 'University of Michigan',
    date: 'Nov 2025',
    credentialId: 'WMVAURJP28PI',
    link: 'https://www.coursera.org/account/accomplishments/verify/WMVAURJP28PI',
    color: 'from-indigo-500 to-purple-500',
    category: 'UX Research',
  },
  {
    title: 'Introduction to User Experience Principles and Processes',
    issuer: 'University of Michigan',
    date: 'Aug 2025',
    credentialId: 'TIWF028LWNYF',
    link: 'https://www.coursera.org/account/accomplishments/verify/TIWF028LWNYF',
    color: 'from-violet-500 to-fuchsia-500',
    category: 'UX Design',
  },
  {
    title: 'GenAI for UX Designers',
    issuer: 'Coursera',
    date: 'Jul 2025',
    credentialId: 'VAIGCF7QCDHI',
    link: 'https://www.coursera.org/account/accomplishments/verify/VAIGCF7QCDHI',
    color: 'from-cyan-500 to-blue-500',
    category: 'AI & Innovation',
  },
  {
    title: 'UserTesting Essentials Certificate',
    issuer: 'UserZoom (UserTesting)',
    date: 'Mar 2024',
    credentialId: null,
    link: null,
    color: 'from-pink-500 to-rose-500',
    category: 'Usability Testing',
  },
];

function CertificationCard({
  certification,
  index,
}: {
  certification: typeof certifications[0];
  index: number;
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const CardContent = (
    <>
      {/* Main Card */}
      <div className="relative h-full bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/25 hover:shadow-2xl hover:shadow-purple-500/20 group flex flex-col">
        
        {/* Top colored accent */}
        <div className={`h-1.5 bg-gradient-to-r ${certification.color} flex-shrink-0`} />
        
        {/* Card Content */}
        <div className="p-8 lg:p-10 flex-1 flex flex-col">
          
          {/* Header Row - Icon, Category, and Link */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              {/* Icon */}
              <motion.div
                animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-3 bg-gradient-to-br ${certification.color} rounded-xl shadow-lg`}
              >
                <Award className="w-5 h-5 text-white" />
              </motion.div>
              
              {/* Category Badge */}
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs tracking-wider uppercase text-white/70">
                {certification.category}
              </span>
            </div>

            {/* External Link */}
            {certification.link && (
              <motion.div
                animate={isHovered ? { x: 3, y: -3 } : { x: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-2.5 bg-white/5 border border-white/10 rounded-xl group-hover:border-purple-400/40 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-purple-400 transition-colors" />
              </motion.div>
            )}
          </div>

          {/* Title - Fixed height with line clamp fallback */}
          <h3 className="text-2xl lg:text-3xl text-white mb-4 leading-tight min-h-[4rem] lg:min-h-[4.5rem]">
            {certification.title}
          </h3>

          {/* Issuer */}
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <p className="text-base text-white/70">{certification.issuer}</p>
          </div>

          {/* Spacer to push footer to bottom */}
          <div className="flex-1" />

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-6" />

          {/* Footer - Date */}
          <div className="flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-white/40" />
            <span className="text-sm text-white/60">{certification.date}</span>
          </div>
        </div>

        {/* Bottom gradient line on hover */}
        <motion.div
          className={`h-1 bg-gradient-to-r ${certification.color} flex-shrink-0`}
          initial={{ scaleX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Subtle hover gradient overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${certification.color} opacity-0 pointer-events-none`}
          animate={isHovered ? { opacity: 0.03 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Outer glow on hover */}
      <motion.div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${certification.color} opacity-0 blur-xl -z-10`}
        animate={isHovered ? { opacity: 0.15 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {certification.link ? (
        <a
          href={certification.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {CardContent}
        </a>
      ) : (
        <div className="h-full">{CardContent}</div>
      )}
    </motion.div>
  );
}

export function Certifications() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative py-32 lg:py-40 px-6 lg:px-12 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div 
          style={{ y }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-80, 80]) }}
          className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full mb-8"
          >
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-sm tracking-[0.3em] uppercase text-purple-300">Professional Development</span>
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wide mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Certifications &
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development in UX design and related fields
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 auto-rows-fr">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={index}
              certification={certification}
              index={index}
            />
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>
    </section>
  );
}