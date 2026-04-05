/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Laptop, 
  Monitor, 
  Settings, 
  Cpu, 
  Network, 
  Wind, 
  Printer, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  DollarSign, 
  Truck,
  ChevronRight,
  Star,
  Menu,
  X,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    icon: <Laptop className="w-10 h-10" />,
    title: "Laptop and Desktop Repair",
    description: "Expert diagnostics and repair for all brands. Screen replacements, motherboard repairs, and more."
  },
  {
    icon: <Settings className="w-10 h-10" />,
    title: "Software Installation",
    description: "OS reformatting, driver updates, and essential software setup for peak performance."
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: "Hardware Upgrades",
    description: "Speed up your slow PC with SSD upgrades, RAM additions, and better components."
  },
  {
    icon: <Network className="w-10 h-10" />,
    title: "Home and Office Networking",
    description: "WiFi setup, LAN cabling, and troubleshooting for seamless connectivity."
  },
  {
    icon: <Wind className="w-10 h-10" />,
    title: "Cleaning Services",
    description: "Deep cleaning and thermal paste replacement to prevent overheating and crashes."
  },
  {
    icon: <Printer className="w-10 h-10" />,
    title: "Printing Services",
    description: "High-quality document printing, scanning, and photocopying services."
  },
  {
    icon: <Settings className="w-10 h-10" />,
    title: "Printer Repair",
    description: "Maintenance for Deskjet, Inkjet, and Laserjet printers. Head cleaning & parts replacement."
  }
];

const REASONS = [
  {
    icon: <Clock className="w-8 h-8 text-electric-blue" />,
    title: "Fast Turnaround",
    description: "Most repairs done within 24-48 hours."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-electric-blue" />,
    title: "Certified Technicians",
    description: "Years of professional tech experience."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-electric-blue" />,
    title: "Affordable Rates",
    description: "Transparent pricing with no hidden fees."
  },
  {
    icon: <Truck className="w-8 h-8 text-electric-blue" />,
    title: "Home & Office Visits",
    description: "We can come to you in San Pedro area."
  }
];

const STEPS = [
  {
    num: "01",
    title: "Contact Us",
    description: "Call or fill out our form to describe your device issue."
  },
  {
    num: "02",
    title: "Diagnose & Quote",
    description: "We provide a free assessment and a transparent price quote."
  },
  {
    num: "03",
    title: "Repair & Deliver",
    description: "We fix your device and test it thoroughly before returning."
  }
];

const TESTIMONIALS = [
  {
    name: "Juan D.",
    review: "Very fast service! My laptop was overheating and shut down constantly. PCMON cleaned it and replaced the paste, now it runs like new.",
    rating: 5
  },
  {
    name: "Maria L.",
    review: "Best printer repair in San Pedro. They fixed my Epson L3110 when other shops said it was hopeless. Highly recommended!",
    rating: 5
  },
  {
    name: "Carlo R.",
    review: "Professional and honest. They explained the problem clearly and didn't charge me extra for unnecessary parts.",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-navy selection:bg-electric-blue selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-md py-4 border-b border-white/10 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            {!logoError ? (
              <img 
                src="/pcmon-logo.png" 
                alt="PCMON Logo" 
                className="h-10 w-auto"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-10 h-10 bg-electric-blue rounded-lg flex items-center justify-center glow-blue">
                <Monitor className="text-white w-6 h-6" />
              </div>
            )}
            <span className="text-2xl font-bold tracking-tighter">PC<span className="text-electric-blue">MON</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Process', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-sm font-medium text-text-gray hover:text-electric-blue transition-colors"
              >
                {item}
              </button>
            ))}
            <a href="tel:09925788398" className="btn-primary px-6 py-2.5 rounded-full text-sm animate-pulse-glow">
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-navy border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {['Services', 'About', 'Process', 'Contact'].map((item) => (
                  <button 
                    key={item} 
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-left text-lg font-medium text-text-gray hover:text-electric-blue"
                  >
                    {item}
                  </button>
                ))}
                <a href="tel:09925788398" className="btn-primary w-full py-3 rounded-xl text-center">
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-electric-blue/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-green/10 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-bold mb-6">
                #1 Tech Repair in San Pedro
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                Fast, Reliable <span className="text-electric-blue">Computer & Laptop</span> Repair in San Pedro, Laguna
              </h1>
              <p className="text-xl text-text-gray mb-10 max-w-2xl mx-auto leading-relaxed">
                Trusted by homes and businesses. We fix hardware, software, and networking issues with a <span className="text-white font-bold">No fix, no fee</span> guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-electric-blue text-white font-bold rounded-xl hover:bg-blue-600 transition-all transform hover:-translate-y-1 shadow-xl shadow-electric-blue/20 animate-pulse-glow"
                >
                  Book a Repair Now
                </button>
                <a 
                  href="tel:09925788398"
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-electric-blue" />
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-navy/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-electric-blue">Services</span></h2>
            <p className="text-text-gray max-w-2xl mx-auto">Comprehensive tech solutions for all your digital needs. We handle everything from minor fixes to major overhauls.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-card-bg border border-white/5 hover:border-electric-blue/50 transition-all hover:glow-blue"
              >
                <div className="mb-6 text-electric-blue group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-gray leading-relaxed">{service.description}</p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="mt-6 flex items-center gap-2 text-electric-blue font-bold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Why <span className="text-electric-blue">Choose Us</span>?</h2>
              <p className="text-text-gray text-lg mb-12 leading-relaxed">
                PCMON is committed to restoring your digital life. We understand how crucial your devices are for work and school, which is why we prioritize quality and speed above all else.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {REASONS.map((reason, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{reason.title}</h4>
                      <p className="text-sm text-text-gray">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=800&q=80" 
                  alt="Tech Repair" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-green/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-electric-blue/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-24 bg-navy/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Easy <span className="text-electric-blue">3-Step</span> Process</h2>
            <p className="text-text-gray">Getting your device fixed shouldn't be complicated. Here's how we do it.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              {STEPS.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-navy border-4 border-electric-blue rounded-full flex items-center justify-center text-2xl font-black text-accent-green mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-electric-blue/20">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-text-gray">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Customer <span className="text-electric-blue">Reviews</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card-bg border border-white/5 italic">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, star) => (
                    <Star key={star} className="w-5 h-5 fill-accent-green text-accent-green" />
                  ))}
                </div>
                <p className="text-text-gray mb-6 leading-relaxed">"{t.review}"</p>
                <div className="flex items-center gap-3 not-italic">
                  <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center font-bold text-electric-blue">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-electric-blue">— {t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-navy/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card-bg p-10 rounded-3xl border border-white/5"
              >
                <h3 className="text-3xl font-bold mb-8">Book a <span className="text-electric-blue">Repair</span></h3>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your repair request has been sent. We will call you shortly.'); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text-gray">Full Name</label>
                      <input type="text" placeholder="Juan Dela Cruz" className="w-full bg-navy border border-white/10 rounded-xl p-4 focus:border-electric-blue outline-none transition-all" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text-gray">Phone Number</label>
                      <input type="tel" placeholder="09XX XXX XXXX" className="w-full bg-navy border border-white/10 rounded-xl p-4 focus:border-electric-blue outline-none transition-all" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-gray">Device Type</label>
                    <select className="w-full bg-navy border border-white/10 rounded-xl p-4 focus:border-electric-blue outline-none transition-all appearance-none">
                      <option>Laptop</option>
                      <option>Desktop PC</option>
                      <option>Printer</option>
                      <option>Networking / Others</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-gray">Problem Description</label>
                    <textarea rows={4} placeholder="Briefly describe what's wrong..." className="w-full bg-navy border border-white/10 rounded-xl p-4 focus:border-electric-blue outline-none transition-all resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-electric-blue text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-electric-blue/20">
                    Send Repair Request
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-8">Get In <span className="text-electric-blue">Touch</span></h3>
                <div className="space-y-8 mb-12">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-electric-blue/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-electric-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Our Location</h4>
                      <p className="text-text-gray">483 Purok 5 Brgy. Nueva, San Pedro, Laguna</p>
                      <p className="text-sm text-accent-green font-bold mt-1">(Near SM Savemore Supermarket)</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-electric-blue/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-electric-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us</h4>
                      <p className="text-text-gray">0992 578 8398 / 0923 180 5006</p>
                      <p className="text-text-gray">02 8868 2793 (Landline)</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-electric-blue/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-electric-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Us</h4>
                      <p className="text-text-gray">monrice191@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/10 h-64 shadow-2xl">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15461.35345719323!2d121.04257125!3d14.349635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d0ba32960679%3A0x6b106f2d24a0d924!2sSan%20Pedro%2C%20Laguna!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#05081b] pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                {!logoError ? (
                  <img 
                    src="/pcmon-logo.png" 
                    alt="PCMON Logo" 
                    className="h-8 w-auto"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="w-8 h-8 bg-electric-blue rounded flex items-center justify-center">
                    <Monitor className="text-white w-5 h-5" />
                  </div>
                )}
                <span className="text-xl font-bold tracking-tighter">PC<span className="text-electric-blue">MON</span></span>
              </div>
              <p className="text-text-gray mb-6">Your trusted local partner for all things tech. Quality repairs you can count on in San Pedro, Laguna.</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-blue transition-colors cursor-pointer">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
              <ul className="space-y-4 text-text-gray">
                {SERVICES.slice(0, 4).map((s, i) => (
                  <li key={i} className="hover:text-electric-blue transition-colors cursor-pointer">{s.title}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-4 text-text-gray">
                {['Home', 'Services', 'About Us', 'Contact'].map((link) => (
                  <li key={link} onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))} className="hover:text-electric-blue transition-colors cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
              <ul className="space-y-4 text-text-gray text-sm">
                <li className="flex gap-3"><MapPin className="w-4 h-4 text-electric-blue flex-shrink-0" /> 483 Purok 5, Brgy. Nueva, San Pedro, Laguna</li>
                <li className="flex gap-3"><Phone className="w-4 h-4 text-electric-blue flex-shrink-0" /> 0992 578 8398</li>
                <li className="flex gap-3"><Mail className="w-4 h-4 text-electric-blue flex-shrink-0" /> monrice191@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center text-text-gray text-sm">
            <p>&copy; 2025 PCMON Computer & Laptop Repair Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
