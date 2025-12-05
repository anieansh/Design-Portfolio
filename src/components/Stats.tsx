import { motion, useScroll, useTransform } from 'motion/react';
import { Briefcase, FolderKanban, Building2, Award } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export function Stats() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const stats = [
    { 
      icon: Briefcase, 
      value: '5+', 
      label: 'Years Experience',
      color: 'from-purple-500 to-pink-500' 
    },
    { 
      icon: FolderKanban, 
      value: '50+', 
      label: 'Projects Completed',
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      icon: Building2, 
      value: '6+', 
      label: 'Industries',
      color: 'from-orange-500 to-red-500' 
    },
    { 
      icon: Award, 
      value: '15+', 
      label: 'Tools Mastered',
      color: 'from-green-500 to-emerald-500' 
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 lg:py-40 px-6 lg:px-12 bg-neutral-950 relative overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-6">
            Achievements
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wide">By The Numbers</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                
                <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>
                  <div className="text-5xl lg:text-6xl mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}