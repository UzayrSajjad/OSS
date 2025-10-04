import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer(){
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img 
              src="https://res.cloudinary.com/djetoiflq/image/upload/v1759552918/oss-logo_veijqu.png" 
              alt="One Stop Solutions" 
              className="h-20 md:h-24 w-auto mb-6" 
            />
            <p className="text-gray-600 text-sm leading-relaxed max-w-md mb-6 font-[Outfit]">
              We craft premium events, theatrical entertainment and high-impact marketing — delivering end-to-end production and creative direction that brings your vision to life.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm font-[Outfit]">
              <a href="tel:+923008468758" className="flex items-center gap-3 text-gray-600 hover:text-[hsl(var(--accent))] transition-colors">
                <FaPhone className="text-[hsl(var(--accent))]" />
                <span>+92 300 8468758</span>
              </a>
              <a href="mailto:info@ossolutions.pk" className="flex items-center gap-3 text-gray-600 hover:text-[hsl(var(--accent))] transition-colors">
                <FaEnvelope className="text-[hsl(var(--accent))]" />
                <span>info@ossolutions.pk</span>
              </a>
              <div className="flex items-start gap-3 text-gray-600">
                <FaMapMarkerAlt className="text-[hsl(var(--accent))] mt-1 flex-shrink-0" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider font-[Outfit]">Quick Links</h4>
            <ul className="space-y-3 text-sm font-[Outfit]">
              <li>
                <a href="/#about" className="text-gray-600 hover:text-[hsl(var(--accent))] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-600 hover:text-[hsl(var(--accent))] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/#works" className="text-gray-600 hover:text-[hsl(var(--accent))] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-600 hover:text-[hsl(var(--accent))] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services & Social */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider font-[Outfit]">Our Services</h4>
            <ul className="space-y-3 text-sm mb-6 font-[Outfit]">
              <li>
                <a href="/services/events" className="text-gray-600 hover:text-[hsl(var(--accent))] transition-colors">
                  Events & Entertainment
                </a>
              </li>
              <li>
                <a href="/services/oss-puppet-theatre" className="text-gray-600 hover:text-[hsl(var(--accent))] transition-colors">
                  OSS Puppet Theatre
                </a>
              </li>
              <li>
                <a href="/services/marketing" className="text-gray-600 hover:text-[hsl(var(--accent))] transition-colors">
                  Marketing Solutions
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider font-[Outfit]">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook" 
                className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram" 
                className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube" 
                className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaYoutube className="text-sm" />
              </a>
              <a 
                href="https://wa.me/923008468758" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp" 
                className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-[hsl(var(--accent))] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaWhatsapp className="text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 font-[Outfit]">
            <p>&copy; 2025 One Stop Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-[hsl(var(--accent))] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-[hsl(var(--accent))] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
