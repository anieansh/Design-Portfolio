import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import profilePhoto from 'figma:asset/5628d2bfc8f095765ee02dc1371088c2d38d2ded.png';

export function About() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 lg:py-40 px-6 lg:px-12 bg-gradient-to-b from-black to-neutral-950 relative overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-80, 80]) }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-6">
            Introduction
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wide">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Photo with animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Animated glow effect - multiple layers */}
              <motion.div 
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-blue-600/40 rounded-3xl blur-3xl" 
              />
              <motion.div 
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.5, 0.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-tr from-pink-600/30 to-purple-600/30 rounded-3xl blur-2xl" 
              />
              
              {/* Photo container with hover animation */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
              >
                <motion.img
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  src={profilePhoto}
                  alt="Ansh Pahwa"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay shine effect */}
                <motion.div
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </motion.div>

              {/* Decorative animated elements - more dynamic */}
              <motion.div 
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 w-40 h-40 bg-purple-500/30 rounded-full blur-2xl" 
              />
              <motion.div 
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-500/30 rounded-full blur-2xl" 
              />
              
              {/* Additional floating orbs */}
              <motion.div 
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                  x: [0, -15, 0],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-1/4 -left-8 w-24 h-24 bg-pink-500/25 rounded-full blur-xl" 
              />
              <motion.div 
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                  x: [0, 15, 0],
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute bottom-1/4 -right-8 w-24 h-24 bg-cyan-500/25 rounded-full blur-xl" 
              />

              {/* Floating border animation */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-4 border-2 border-purple-500/30 rounded-3xl"
                style={{ borderStyle: 'dashed' }}
              />
              
              {/* Second rotating border */}
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-6 border border-blue-500/20 rounded-3xl"
                style={{ borderStyle: 'dotted' }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl lg:text-4xl mb-6">
              Senior UX/Product Designer
            </h3>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              With ~5 years of experience crafting user-centered solutions across 
              healthcare, fintech, blockchain, and e-commerce. I specialize in 
              transforming complex problems into intuitive, beautiful designs that 
              users love.
            </p>

            <p className="text-lg text-white/60 mb-12 leading-relaxed">
              My approach combines deep user research, data-driven insights, and 
              creative problem-solving to deliver exceptional digital experiences. 
              I'm passionate about accessibility, design systems, and mentoring the 
              next generation of designers.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-sm tracking-wider uppercase text-white/50 mb-6">
                Get In Touch
              </h4>
              
              <motion.a
                href="mailto:anieansh13@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-purple-500/20 transition-colors border border-white/10">
                  <Mail size={20} />
                </div>
                <span className="text-lg">anieansh13@gmail.com</span>
              </motion.a>

              <motion.a
                href="tel:+919992735143"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-purple-500/20 transition-colors border border-white/10">
                  <Phone size={20} />
                </div>
                <span className="text-lg">+91 9992735143</span>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-white/70"
              >
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <MapPin size={20} />
                </div>
                <span className="text-lg">Delhi (NCR), India</span>
              </motion.div>

              <motion.a
                href="https://www.linkedin.com/in/ansh-pahwa-a0a90613b/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-purple-500/20 transition-colors border border-white/10">
                  <Linkedin size={20} />
                </div>
                <span className="text-lg">LinkedIn Profile</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}