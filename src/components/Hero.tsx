import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
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
        
        {/* Floating UI Elements */}
        <motion.div 
          className="mt-20 relative mx-auto w-full max-w-5xl h-[400px] md:h-[600px] rounded-2xl overflow-hidden glass-card shadow-2xl border border-slate-200/50 dark:border-slate-700/50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Abstract Dashboard Visual inside Hero */}
          <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 flex flex-col">
            <div className="h-12 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 p-8 flex gap-6">
              <div className="w-1/4 h-full bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-4 hidden md:flex flex-col gap-4">
                <div className="h-8 bg-slate-100 dark:bg-slate-700 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded w-1/2 animate-pulse"></div>
                <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded w-5/6 animate-pulse mt-4"></div>
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex gap-6 h-1/3">
                  <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 text-primary-blue">
                         <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-full mt-4">
                       <div className="h-full bg-primary-cyan w-3/4 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 relative overflow-hidden hidden sm:block">
                     {/* Rocket visual placeholder inside dashboard */}
                     <div className="absolute -right-4 -bottom-4 opacity-10">
                        <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                     </div>
                  </div>
                </div>
                <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-primary-cyan/5"></div>
                   {/* Abstract chart */}
                   <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end px-8 gap-2">
                      {[40, 70, 45, 90, 65, 85, 100, 60, 80].map((h, i) => (
                        <motion.div 
                           key={i} 
                           initial={{ height: 0 }}
                           animate={{ height: `${h}%` }}
                           transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                           className="flex-1 bg-gradient-to-t from-primary-blue to-primary-cyan rounded-t-sm opacity-80"
                        ></motion.div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
