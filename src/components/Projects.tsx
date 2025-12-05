import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import commbitzImage from 'figma:asset/896a2f015abedb8cff20a78f451bb31b2b790bf3.png';
import medifindImage from 'figma:asset/44971d3dd3d1ea7c1842d9a32265abe5f52b5a9a.png';
import phreesiaImage from 'figma:asset/8be1e065cad187aa8e312e451171a3e17a1d6015.png';
import crickpeImage from 'figma:asset/c637755b6753f130202a959de532ddb25c0bd4e7.png';
import zeropeImage from 'figma:asset/61f7d343f2d55c52da53a002e054818f3be39ff6.png';
import brewTeamsImage from 'figma:asset/c304b7f4919f0422a583267d1341e7305682b6cc.png';
import brickitImage from 'figma:asset/ec4cb3c59160cf08c3ab311ee357f7ed07836a88.png';
import jupiticeImage from 'figma:asset/f8118fe4c0e2a6c0e18d56b4f7ff4251e02b2dbf.png';
import inspiroLinkImage from 'figma:asset/0cdf8b16e65da54693c390b5de39c7a92bb7b82a.png';

const projects = [
  {
    name: 'InspiroLink',
    description: 'Advanced genomic analysis platform for precision medicine',
    url: 'https://inspirogene.com',
    category: 'Healthcare',
    tags: ['Genomics', 'AI/ML', 'Healthcare'],
    image: inspiroLinkImage,
  },
  {
    name: 'Medifind',
    description: 'Revolutionary healthcare platform connecting patients with specialized medical care',
    url: 'https://www.medifind.com',
    category: 'Healthcare',
    tags: ['Healthcare', 'Web Design', 'Patient Portal'],
    image: medifindImage,
  },
  {
    name: 'Commbitz X AirIndia',
    description: 'Premium airline collaboration platform for enhanced travel experience',
    url: 'https://airindia.commbitz.com',
    category: 'Travel',
    tags: ['Travel', 'Enterprise', 'Airlines'],
    image: commbitzImage,
  },
  {
    name: 'Phreesia Life Sciences',
    description: 'Enterprise healthcare technology for patient engagement',
    url: 'https://networksolutions.phreesia.com',
    category: 'Healthcare',
    tags: ['Enterprise', 'Healthcare', 'Patient Experience'],
    image: phreesiaImage,
  },
  {
    name: 'Crickpe',
    description: 'Fantasy cricket platform with real-time analytics and seamless user experience',
    url: 'https://crickpe.com',
    category: 'Sports Tech',
    tags: ['Mobile App', 'Web Platform', 'Analytics'],
    image: crickpeImage,
  },
  {
    name: 'ZeroPe Care',
    description: 'Innovative healthcare fintech solution for seamless medical payments',
    url: 'https://www.zerope.care',
    category: 'Healthcare / Fintech',
    tags: ['Fintech', 'Healthcare', 'Payments'],
    image: zeropeImage,
  },
  {
    name: 'Jupitice',
    description: 'Next-gen legal tech platform streamlining judicial processes',
    url: 'https://jupitice.com',
    category: 'Legal Tech',
    tags: ['Legal Tech', 'Enterprise', 'SaaS'],
    image: jupiticeImage,
  },
  {
    name: 'Brew Teams',
    description: 'Modern team collaboration platform for distributed workforces',
    url: 'https://brewteams.com',
    category: 'Productivity',
    tags: ['Collaboration', 'Productivity', 'Remote Work'],
    image: brewTeamsImage,
  },
  {
    name: 'BrickIt',
    description: 'Modern e-commerce platform with immersive shopping experience',
    url: 'https://brikitt.com',
    category: 'E-commerce',
    tags: ['E-commerce', 'Retail', 'Mobile'],
    image: brickitImage,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        scale: 1
      } : { 
        opacity: 0, 
        y: 80,
        scale: 0.95
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1, 
        ease: [0.16, 1, 0.3, 1],
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      }}
      className="group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full relative"
      >
        {/* Main Card */}
        <motion.div 
          className="relative h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-700 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20"
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
            animate={isHovered ? { 
              background: [
                'linear-gradient(135deg, rgba(168, 85, 247, 0) 0%, rgba(236, 72, 153, 0) 50%, rgba(59, 130, 246, 0) 100%)',
                'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)',
              ]
            } : {}}
            transition={{ duration: 0.7 }}
          />

          {/* Image Section */}
          <div className="relative h-64 lg:h-72 overflow-hidden">
            {/* Loading placeholder */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black">
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                  className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                />
              </div>
            )}
            
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={project.name}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-700 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform' }}
            />
            
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            />
            
            {/* Category badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ 
                delay: 0.3 + index * 0.1, 
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              className="absolute top-6 right-6 z-10"
            >
              <motion.div 
                className="px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-xs tracking-wider uppercase text-white/90">
                  {project.category}
                </span>
              </motion.div>
            </motion.div>

            {/* Hover effect - View Project */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
              className="absolute inset-0 flex items-center justify-center z-20"
            >
              <div className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center gap-2">
                <span className="text-white">View Project</span>
                <motion.div
                  animate={isHovered ? { x: 3, y: -3 } : { x: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="p-8 relative">
            {/* Project name with icon */}
            <div className="flex items-start justify-between mb-4">
              <motion.h3 
                className="text-2xl lg:text-3xl tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500"
                animate={isHovered ? { x: 4 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {project.name}
              </motion.h3>
              <motion.div
                animate={isHovered ? { rotate: 45, scale: 1.1 } : { rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <ExternalLink
                  className="text-white/40 group-hover:text-purple-400 transition-colors duration-500 flex-shrink-0"
                  size={24}
                />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              className="text-white/60 leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-500"
              animate={isHovered ? { x: 4 } : { x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}
            >
              {project.description}
            </motion.p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tagIndex}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
                  transition={{ 
                    delay: 0.5 + index * 0.1 + tagIndex * 0.05, 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 group-hover:bg-purple-500/20 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-all duration-500 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Bottom gradient accent */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              initial={{ scaleX: 0 }}
              animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl blur-xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-blue-500/0 -z-10"
          animate={isHovered ? {
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.3) 50%, rgba(59, 130, 246, 0.3) 100%)',
            scale: 1.02
          } : {
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0) 0%, rgba(236, 72, 153, 0) 50%, rgba(59, 130, 246, 0) 100%)',
            scale: 1
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </a>
    </motion.div>
  );
}

export function Projects() {
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
    <section ref={sectionRef} id="projects" className="relative py-32 lg:py-40 px-6 lg:px-12 bg-black overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div 
          style={{ y }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full mb-8"
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-sm tracking-[0.3em] uppercase text-purple-300">Featured Work</span>
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wide mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            A curated collection of impactful digital experiences across healthcare, fintech, and beyond
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}