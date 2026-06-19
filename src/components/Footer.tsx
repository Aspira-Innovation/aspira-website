import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 lg:col-span-1">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Aspira Innovation" className="h-16 w-16 md:h-20 md:w-20 brightness-0 invert object-contain" />
              <span className="text-2xl md:text-3xl font-bold text-white">Aspira</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering businesses through innovative, scalable, and intelligent digital solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="home" smooth={true} className="cursor-pointer hover:text-primary-cyan transition-colors">Home</Link></li>
              <li><Link to="about" smooth={true} className="cursor-pointer hover:text-primary-cyan transition-colors">About Us</Link></li>
              <li><Link to="process" smooth={true} className="cursor-pointer hover:text-primary-cyan transition-colors">Process</Link></li>
              <li><Link to="contact" smooth={true} className="cursor-pointer hover:text-primary-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="hover:text-primary-cyan transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-primary-cyan transition-colors cursor-pointer">Mobile App Development</li>
              <li className="hover:text-primary-cyan transition-colors cursor-pointer">AI & Automation</li>
              <li className="hover:text-primary-cyan transition-colors cursor-pointer">Full-Stack Development</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Chennai, India</li>
              <li>admin.aspirainnovations@gmail.com</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Aspira Innovation. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
