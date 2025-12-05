import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Download, MapPin, ArrowUp, Heart } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/ansh-pahwa-a0a90613b/',
      color: 'hover:bg-blue-500'
    },
    { 
      name: 'Download Resume', 
      icon: Download, 
      href: '/resume.pdf',
      color: 'hover:bg-purple-500',
      isDownload: true
    },
  ];

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="px-6 lg:px-12 pt-32 pb-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20"
            >
              {/* Brand Section */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h3 className="text-4xl lg:text-5xl mb-6 tracking-tight">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                      Ansh Pahwa
                    </span>
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed mb-8">
                    Senior UX/UI Designer passionate about creating exceptional 
                    digital experiences that make a difference. Let's build 
                    something amazing together.
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-3 text-white/60">
                    <div className="p-2 bg-white/5 rounded-lg">
                      <MapPin size={18} />
                    </div>
                    <span>Delhi (NCR), India</span>
                  </div>
                </motion.div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <h4 className="text-sm tracking-[0.3em] uppercase text-white/50 mb-6">
                    Quick Links
                  </h4>
                  <ul className="space-y-4">
                    {quickLinks.map((link, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      >
                        <a
                          href={link.href}
                          className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group"
                        >
                          <span className="w-0 group-hover:w-6 h-px bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300" />
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <h4 className="text-sm tracking-[0.3em] uppercase text-white/50 mb-6">
                    Get In Touch
                  </h4>
                  <div className="space-y-4 mb-8">
                    <motion.a
                      href="mailto:anieansh13@gmail.com"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                    >
                      <div className="p-3 bg-white/5 rounded-xl group-hover:bg-purple-500/20 border border-white/10 group-hover:border-purple-500/50 transition-all">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-white/50 mb-1">Email</div>
                        <div>anieansh13@gmail.com</div>
                      </div>
                    </motion.a>

                    <motion.a
                      href="tel:+919992735143"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                    >
                      <div className="p-3 bg-white/5 rounded-xl group-hover:bg-purple-500/20 border border-white/10 group-hover:border-purple-500/50 transition-all">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-white/50 mb-1">Phone</div>
                        <div>+91 9992735143</div>
                      </div>
                    </motion.a>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      const linkProps = social.isDownload 
                        ? { download: 'Ansh_Pahwa_Resume.pdf' }
                        : { target: '_blank', rel: 'noopener noreferrer' };
                      
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          {...linkProps}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`p-4 bg-white/5 rounded-xl border border-white/10 ${social.color} transition-all group relative overflow-hidden`}
                          aria-label={social.name}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <Icon size={24} className="relative z-10" />
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"
            />

            {/* Bottom Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/50"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <p className="text-sm">
                  © 2025 Ansh Pahwa. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span>Made with</span>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Heart size={16} className="text-red-500 fill-red-500" />
                  </motion.div>
                  <span>in Delhi</span>
                </div>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full border border-white/10 hover:border-transparent transition-all text-sm"
              >
                <span>Back to Top</span>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowUp size={16} />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
      </div>
    </footer>
  );
}