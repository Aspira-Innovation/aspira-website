import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-cyan/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle Circuit Patterns */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#1b4d96 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 text-primary-blue dark:text-primary-cyan text-sm font-semibold mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-blue"></span>
            </span>
            From Vision to Innovation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 dark:text-white leading-tight">
            Transforming Business Ideas Into <span className="text-gradient">Powerful Digital Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Aspira Innovation helps businesses build scalable web applications, mobile apps, and AI-powered solutions that drive growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer w-full sm:w-auto bg-primary-blue hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-primary-blue/30 flex items-center justify-center gap-2 group"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
        

      </div>
    </section>
  );
};

export default Hero;
