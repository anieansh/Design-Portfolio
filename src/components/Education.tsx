import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const education = [
  {
    degree: 'Master in Design',
    specialization: 'User Experience',
    institution: 'Chitkara University',
    location: 'Punjab, India',
    period: '2019–2021',
    description: 'Specialized in user-centered design methodologies, design thinking, and advanced UX research techniques.',
    highlights: ['UX Research', 'Design Thinking', 'Interaction Design', 'Usability Testing'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    degree: 'Bachelor of Arts',
    specialization: 'Mass Communication and Journalism',
    institution: 'Tecnia Institute of Advanced Studies',
    location: 'Delhi, India',
    period: '2016–2019',
    description: 'Focused on visual communication, storytelling, and digital media with emphasis on design principles.',
    highlights: ['Visual Communication', 'Digital Media', 'Content Strategy', 'Design Principles'],
    color: 'from-blue-500 to-cyan-500',
  },
];

function EducationCard({
  edu,
  index,
}: {
  edu: typeof education[0];
  index: number;
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-700 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10">
        
        {/* Animated gradient overlay - REMOVED for readability */}

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity duration-700" />

        <div className="relative p-8 lg:p-10">
          {/* Icon and Period */}
          <div className="flex items-start justify-between mb-6">
            {/* Icon */}
            <motion.div
              animate={isHovered ? { rotate: [0, -10, 10, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className={`p-4 bg-gradient-to-br ${edu.color} rounded-2xl shadow-lg`}
            >
              <GraduationCap className="w-8 h-8 text-white" />
            </motion.div>

            {/* Period Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
            >
              <Calendar className="w-4 h-4 text-white/60" />
              <span className="text-sm text-white/70">{edu.period}</span>
            </motion.div>
          </div>

          {/* Degree Information */}
          <div className="mb-6">
            <h3 className="text-3xl lg:text-4xl tracking-wide text-white mb-2 transition-colors duration-500 group-hover:text-white">
              {edu.degree}
            </h3>
            <p className="text-xl text-purple-300 tracking-wide mb-4">{edu.specialization}</p>
            
            {/* Institution */}
            <div className="flex items-start gap-2 mb-2">
              <Award className="w-5 h-5 text-white/40 mt-1 flex-shrink-0" />
              <p className="text-lg text-white/80 tracking-wide">{edu.institution}</p>
            </div>

            {/* Location */}
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-white/40 mt-1 flex-shrink-0" />
              <p className="text-white/60 tracking-wide">{edu.location}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/60 leading-relaxed tracking-wide mb-6 group-hover:text-white/90 transition-colors duration-500">
            {edu.description}
          </p>

          {/* Highlights/Skills */}
          <div className="space-y-3">
            <p className="text-xs tracking-wider uppercase text-white/40">Key Focus Areas</p>
            <div className="flex flex-wrap gap-2">
              {edu.highlights.map((highlight, hIndex) => (
                <motion.span
                  key={hIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5 + index * 0.2 + hIndex * 0.1, duration: 0.4 }}
                  className={`px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 group-hover:bg-gradient-to-r group-hover:${edu.color} group-hover:text-white group-hover:border-transparent transition-all duration-500`}
                >
                  {highlight}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
            animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-3xl blur-2xl bg-gradient-to-r ${edu.color} opacity-0 -z-10`}
        animate={isHovered ? { opacity: 0.2 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}

export function Education() {
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
    <section ref={sectionRef} id="education" className="relative py-32 lg:py-40 px-6 lg:px-12 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div 
          style={{ y }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"
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
          className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-8"
          >
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span className="text-sm tracking-[0.3em] uppercase text-blue-300">Academic Background</span>
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wide mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Education &
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Learning
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Building a strong foundation in design and communication
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
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