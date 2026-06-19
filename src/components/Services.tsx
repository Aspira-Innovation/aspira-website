import { motion } from 'framer-motion';
import { Globe, Smartphone, BrainCircuit, Layers } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "Custom websites, business portals, dashboards, and scalable web applications built with modern frameworks.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform and native mobile applications with modern user experiences for iOS and Android.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "AI & Automation",
    description: "AI-powered business solutions, chatbots, intelligent workflows, and custom automation systems.",
    icon: <BrainCircuit className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end software development from concept to deployment, ensuring scalable and secure architecture.",
    icon: <Layers className="w-8 h-8" />,
    color: "from-orange-500 to-pink-500"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Our Core <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            We provide comprehensive digital solutions tailored to meet the unique challenges of modern enterprises.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group border border-slate-200/50 dark:border-slate-700/50 transition-all hover:shadow-2xl hover:shadow-primary-blue/10 dark:hover:shadow-primary-cyan/10"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary-blue dark:group-hover:text-primary-cyan transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
