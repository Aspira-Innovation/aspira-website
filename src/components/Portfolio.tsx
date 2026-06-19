import { motion } from 'framer-motion';

const phases = [
  { step: "01", title: "Discovery", desc: "Understanding your business goals and requirements." },
  { step: "02", title: "Planning", desc: "Creating a roadmap, wireframes, and technical architecture." },
  { step: "03", title: "Design", desc: "Crafting beautiful, intuitive, and engaging user interfaces." },
  { step: "04", title: "Development", desc: "Building the solution using modern, scalable technologies." },
  { step: "05", title: "Testing", desc: "Rigorous quality assurance for a bug-free experience." },
  { step: "06", title: "Deployment", desc: "Smooth launch and integration into your environment." },
  { step: "07", title: "Support", desc: "Continuous maintenance, updates, and improvements." },
];

const Portfolio = () => {
  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Our Development <span className="text-gradient">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            A transparent, agile workflow designed to deliver results on time and above expectations.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-primary-cyan rounded-full hidden md:block -translate-y-1/2 opacity-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {phases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-5xl font-black text-slate-300 dark:text-slate-600 mb-4 tracking-tighter">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{phase.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
