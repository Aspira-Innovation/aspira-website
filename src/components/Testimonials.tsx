import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    content: "Aspira Innovation transformed our business. Their technical expertise and dedication to our success were outstanding.",
    rating: 5
  },
  {
    name: "Jane Smith",
    role: "Founder, StartupX",
    content: "The team delivered a phenomenal mobile app that our users love. Fast, responsive, and beautifully designed.",
    rating: 5
  },
  {
    name: "Michael Johnson",
    role: "Director, GlobalEnterprises",
    content: "Their AI solutions automated our workflows, saving us countless hours. A truly professional technology partner.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            What Our Clients <span className="text-gradient">Say</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic mb-8">
                  "{test.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-cyan rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{test.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
