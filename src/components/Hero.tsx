import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useRef, useEffect } from 'react';

export function Hero() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Stagger children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden pt-24 pb-32"
    >
      {/* Premium background with grid */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div 
          style={{ x: mouseXSpring, y: mouseYSpring }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          style={{ x: useTransform(mouseXSpring, (x) => -x), y: useTransform(mouseYSpring, (y) => -y) }}
          className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-blue-600/30 via-purple-600/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Floating orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/40 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ y, opacity, scale }} 
        className="relative max-w-7xl w-full z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center space-y-10"
        >
          {/* Top badge with luxury styling */}
          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden cursor-default"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <Sparkles className="w-4 h-4 text-purple-300 relative z-10" />
              <span className="relative z-10 text-sm tracking-[0.2em] uppercase text-white/80">Senior UX Designer</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full relative z-10"
              />
            </motion.div>
          </motion.div>

          {/* Name with split animation */}
          <motion.div variants={itemVariants} className="w-full">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-tighter leading-none relative">
              {/* First name */}
              <motion.span 
                className="inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="inline-block bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  Ansh
                </motion.span>
              </motion.span>
              
              {/* Space */}
              <span className="inline-block w-3 sm:w-4 md:w-6" />
              
              {/* Last name with gradient */}
              <motion.span 
                className="inline-block relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="inline-block relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.span
                    className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  >
                    Pahwa
                  </motion.span>
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-2xl opacity-20 -z-10"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.span>
              </motion.span>
            </h1>

            {/* Animated accent line */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center gap-3 mt-6"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] w-20 md:w-24 bg-gradient-to-r from-transparent via-purple-500 to-pink-500"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-1.5 h-1.5 bg-white/60 rounded-full"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] w-20 md:w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-transparent"
              />
            </motion.div>
          </motion.div>

          {/* Tagline with premium styling */}
          <motion.div variants={itemVariants} className="w-full max-w-4xl mx-auto px-4">
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 leading-relaxed tracking-wide">
              Crafting <span className="text-white/80 italic">exceptional</span> digital experiences through{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                user-centered design
              </span>
            </p>
          </motion.div>

          {/* Premium stats */}
          <motion.div 
            variants={itemVariants}
            className="w-full flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-4"
          >
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Delivered' },
              { number: '4', label: 'Industries' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center group cursor-default"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-white/50 tracking-wider uppercase group-hover:text-white/70 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Premium scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 group cursor-pointer"
        aria-label="Scroll to next section"
      >
        <motion.div className="flex flex-col items-center gap-3">
          <motion.span 
            className="text-xs tracking-[0.3em] uppercase text-white/40 group-hover:text-white/60 transition-colors"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Explore
          </motion.span>
          <motion.div
            className="w-6 h-10 border-2 border-white/20 rounded-full p-1 group-hover:border-white/40 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mx-auto"
            />
          </motion.div>
        </motion.div>
      </motion.button>
    </section>
  );
}
