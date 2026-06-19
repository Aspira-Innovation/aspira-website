import { motion } from 'framer-motion';
import { Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Building the Future Through <span className="text-gradient">Technology</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Aspira Innovation is a technology-driven startup founded by passionate innovators dedicated to helping businesses embrace digital transformation. We combine modern technologies, creative problem-solving, and business-focused thinking to deliver impactful software solutions.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Our mission is to empower businesses through innovative, scalable, and intelligent digital solutions that accelerate growth, efficiency, and transformation.
            </p>
            
            <div className="flex gap-4 items-center mt-8">
              <div className="w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-primary-blue" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Our Vision</h4>
                <p className="text-slate-600 dark:text-slate-400">To become a trusted technology partner delivering world-class software solutions globally.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl">
              <div className="w-14 h-14 bg-primary-cyan/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-primary-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Innovation First</h3>
              <p className="text-slate-600 dark:text-slate-400">We leverage the latest technologies to build forward-thinking solutions.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl mt-0 sm:mt-12">
              <div className="w-14 h-14 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Client-Centric</h3>
              <p className="text-slate-600 dark:text-slate-400">Your success is our success. We build partnerships, not just projects.</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
