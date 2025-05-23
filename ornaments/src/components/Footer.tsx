"use client"
import { useState, useEffect } from 'react';

export default function OrnamentsFooter() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const footerRef = document.getElementById('footer-section');
        if (footerRef) {
            observer.observe(footerRef);
        }

        return () => observer.disconnect();
    }, []);

    const socialLinks = [
        { name: 'Instagram', icon: '📷', href: '#', color: 'hover:text-pink-500' },
        { name: 'Facebook', icon: '📘', href: '#', color: 'hover:text-blue-500' },
        { name: 'Pinterest', icon: '📌', href: '#', color: 'hover:text-red-500' },
        { name: 'TikTok', icon: '🎵', href: '#', color: 'hover:text-purple-500' }
    ];

    const quickLinks = [
        'Shop All',
        'Keychains',
        'Magnets',
        'Charms',
        'Custom Orders',
        'About Us'
    ];

    const supportLinks = [
        'Contact Us',
        'FAQ',
        'Shipping Info',
        'Returns',
        'Care Guide',
        'Wholesale'
    ];

    return (
        <>
            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .gradient-text {
          background: linear-gradient(135deg, #f472b6, #ec4899, #db2777, #be185d);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease-in-out infinite;
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .clay-blob {
          background: linear-gradient(135deg, #fef3c7, #fed7aa, #fecaca);
          border-radius: 50% 40% 60% 30%;
          animation: morph 10s ease-in-out infinite;
        }
        
        @keyframes morph {
          0%, 100% { border-radius: 50% 40% 60% 30%; }
          25% { border-radius: 30% 60% 40% 50%; }
          50% { border-radius: 60% 30% 50% 40%; }
          75% { border-radius: 40% 50% 30% 60%; }
        }
        
        .slide-up {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .floating {
          animation: float 8s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-5px) rotate(1deg); }
          66% { transform: translateY(3px) rotate(-1deg); }
        }
        
        .sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
        
        .glass-effect {
          backdrop-filter: blur(16px);
          background: rgba(255, 255, 255, 0.05);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .link-hover {
          transition: all 0.3s ease;
          position: relative;
        }
        
        .link-hover::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(90deg, #f472b6, #ec4899);
          transition: width 0.3s ease;
        }
        
        .link-hover:hover::after {
          width: 100%;
        }
        
        .social-bounce:hover {
          animation: bounce 0.6s ease;
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-10px); }
          70% { transform: translateY(-5px); }
        }
        
        .heart-pulse {
          animation: heartPulse 2s ease-in-out infinite;
        }
        
        @keyframes heartPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>

            <footer id="footer-section" className="relative mt-20 bg-none backdrop-blur-sm overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="clay-blob absolute -top-10 -left-10 w-32 h-32 opacity-10 floating"></div>
                    <div className="clay-blob absolute top-20 right-10 w-24 h-24 opacity-15 floating" style={{ animationDelay: '3s' }}></div>
                    <div className="clay-blob absolute -bottom-5 left-1/3 w-20 h-20 opacity-10 floating" style={{ animationDelay: '6s' }}></div>

                    {/* Sparkles */}
                    <div className="absolute top-16 right-1/4 w-2 h-2 bg-pink-400 rounded-full sparkle"></div>
                    <div className="absolute bottom-32 left-1/5 w-1 h-1 bg-rose-400 rounded-full sparkle" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 right-16 w-1.5 h-1.5 bg-pink-500 rounded-full sparkle" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Newsletter Section */}
                <div className="relative">
                    <div className={`glass-effect py-12 transition-all duration-1000 ${isVisible ? 'slide-up' : ''
                        }`}>
                        <div className="max-w-6xl mx-auto px-4 text-center">
                            <h3 className="gradient-text text-2xl md:text-3xl font-bold mb-4">
                                Stay in the Loop! 🎨
                            </h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Get the latest updates on new clay creations, exclusive offers, and behind-the-scenes peeks at our crafting process!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 px-4 py-3 rounded-full border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-white/80 backdrop-blur-sm"
                                />
                                <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                    Subscribe ✨
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="relative">
                    <div className="max-w-6xl mx-auto px-4 py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                            {/* Brand Section */}
                            <div className={`transition-all duration-1000 ${isVisible ? 'slide-up' : ''
                                }`} style={{ animationDelay: '0.1s' }}>
                                <div className="mb-6">
                                    <h2 className="gradient-text text-2xl font-bold mb-3">
                                        Ornaments
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Handcrafted with love, each piece tells a story. Bringing joy and whimsy to your everyday life through the art of clay.
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            className={`w-10 h-10 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 transform hover:scale-110 social-bounce shadow-sm hover:shadow-md`}
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className={`transition-all duration-1000 ${isVisible ? 'slide-up' : ''
                                }`} style={{ animationDelay: '0.2s' }}>
                                <h3 className="text-gray-800 font-semibold mb-6 text-lg">
                                    Shop 🛍️
                                </h3>
                                <ul className="space-y-3">
                                    {quickLinks.map((link, index) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-gray-600 hover:text-pink-600 link-hover block py-1"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Support Links */}
                            <div className={`transition-all duration-1000 ${isVisible ? 'slide-up' : ''
                                }`} style={{ animationDelay: '0.3s' }}>
                                <h3 className="text-gray-800 font-semibold mb-6 text-lg">
                                    Support 💬
                                </h3>
                                <ul className="space-y-3">
                                    {supportLinks.map((link, index) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-gray-600 hover:text-pink-600 link-hover block py-1"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Info */}
                            <div className={`transition-all duration-1000 ${isVisible ? 'slide-up' : ''
                                }`} style={{ animationDelay: '0.4s' }}>
                                <h3 className="text-gray-800 font-semibold mb-6 text-lg">
                                    Get in Touch 📞
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-pink-500 mt-1">📧</span>
                                        <div>
                                            <p className="text-gray-600 text-sm">Email</p>
                                            <a href="mailto:hello@ornaments.com" className="text-gray-800 hover:text-pink-600 transition-colors">
                                                hello@ornaments.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-pink-500 mt-1">🏠</span>
                                        <div>
                                            <p className="text-gray-600 text-sm">Studio</p>
                                            <p className="text-gray-800 text-sm leading-relaxed">
                                                123 Artisan Lane<br />
                                                Creative District, CD 12345
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-pink-500 mt-1">⏰</span>
                                        <div>
                                            <p className="text-gray-600 text-sm">Hours</p>
                                            <p className="text-gray-800 text-sm">
                                                Mon-Fri: 9AM-6PM<br />
                                                Sat-Sun: 10AM-4PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative border-t border-pink-200/50 bg-white/30 backdrop-blur-sm">
                    <div className={`max-w-6xl mx-auto px-4 py-6 transition-all duration-1000 ${isVisible ? 'slide-up' : ''
                        }`} style={{ animationDelay: '0.5s' }}>
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="flex items-center space-x-2 text-gray-600 text-sm">
                                <span>© 2024 Ornaments. Made with</span>
                                <span className="text-pink-500 heart-pulse">❤️</span>
                                <span>and clay.</span>
                            </div>
                            <div className="flex space-x-6 text-sm">
                                <a href="#" className="text-gray-600 hover:text-pink-600 link-hover">Privacy Policy</a>
                                <a href="#" className="text-gray-600 hover:text-pink-600 link-hover">Terms of Service</a>
                                <a href="#" className="text-gray-600 hover:text-pink-600 link-hover">Cookies</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}