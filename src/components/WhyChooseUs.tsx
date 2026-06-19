import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Shield, TrendingUp } from 'lucide-react';

const stats = [
  { value: "Zero", label: "Compromises" },
  { value: "100%", label: "Commitment" },
  { value: "Fast", label: "Rapid Delivery" },
  { value: "#1", label: "Innovation First" }
];

const features = [
  { icon: <Zap className="w-5 h-5 text-yellow-500" />, text: "Modern Technology Stack" },
  { icon: <TrendingUp className="w-5 h-5 text-green-500" />, text: "Fast Development Cycles" },
  { icon: <Shield className="w-5 h-5 text-primary-blue" />, text: "Business-Oriented Solutions" },
  { icon: <CheckCircle2 className="w-5 h-5 text-primary-cyan" />, text: "Scalable Architecture" },
  { icon: <CheckCircle2 className="w-5 h-5 text-primary-cyan" />, text: "Client-Focused Approach" },
  { icon: <CheckCircle2 className="w-5 h-5 text-primary-cyan" />, text: "Continuous Support" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-blue/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">Aspira?</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              We don't just write code; we build scalable digital businesses. Our approach combines technical excellence with deep business understanding to deliver solutions that give you a competitive edge.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-slate-800/50 border border-slate-700">
                    {feature.icon}
                  </div>
                  <span className="text-slate-200 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card bg-slate-800/40 border-slate-700 p-8 rounded-2xl text-center hover:bg-slate-800/60 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary-cyan to-primary-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
