import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { 
  Search, 
  TestTube, 
  Pencil, 
  Layers, 
  Palette, 
  FileText, 
  BarChart, 
  Users, 
  Grid, 
  Eye, 
  Smartphone, 
  Sparkles,
  Figma,
  Workflow,
  MessageSquare,
  Calendar,
  CheckSquare,
  Lightbulb,
  Monitor
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Design & Research',
    description: 'User-centered design methodologies',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'User Research', icon: Search },
      { name: 'User Testing', icon: TestTube },
      { name: 'Wireframing', icon: Pencil },
      { name: 'Prototyping', icon: Layers },
      { name: 'Visual Design', icon: Palette },
      { name: 'Storyboarding', icon: FileText },
    ],
  },
  {
    title: 'Testing & Optimization',
    description: 'Data-driven design decisions',
    icon: BarChart,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'A/B Testing', icon: BarChart },
      { name: 'Usability Testing', icon: Users },
      { name: 'Design Systems', icon: Grid },
      { name: 'Accessibility Design', icon: Eye },
      { name: 'Responsive Design', icon: Smartphone },
      { name: 'Motion Graphics', icon: Sparkles },
    ],
  },
  {
    title: 'Tools & Technologies',
    description: 'Industry-standard design tools',
    icon: Monitor,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Figma', icon: Figma },
      { name: 'Adobe CC', icon: Lightbulb },
      { name: 'ChatGPT', icon: MessageSquare },
      { name: 'Claude AI', icon: Sparkles },
      { name: 'Miro Board', icon: Grid },
      { name: 'Jira', icon: CheckSquare },
      { name: 'Balsamiq', icon: Pencil },
      { name: 'UserZoom', icon: Users },
      { name: 'Monday Board', icon: Calendar },
    ],
  },
];

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      
      <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-white/10 group-hover:border-white/20 transition-all duration-500 h-full">
        {/* Header */}
        <div className="flex items-start gap-6 mb-8">
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
            <Icon size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl lg:text-3xl mb-2">{category.title}</h3>
            <p className="text-white/50 text-sm">{category.description}</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-3">
          {category.skills.map((skill, skillIndex) => {
            const SkillIcon = skill.icon;
            return (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.2 + skillIndex * 0.05 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 cursor-default group/skill"
              >
                <SkillIcon size={18} className="text-white/60 group-hover/skill:text-white transition-colors flex-shrink-0" />
                <span className="text-sm text-white/80 group-hover/skill:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom accent line */}
        <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${category.color} rounded-full mt-8 transition-all duration-700`} />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-32 lg:py-40 px-6 lg:px-12 bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity }}
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm tracking-[0.4em] uppercase text-white/50 mb-6"
          >
            Expertise & Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wide mb-6"
          >
            Skills & Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            A comprehensive toolkit for creating exceptional user experiences across all touchpoints
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}