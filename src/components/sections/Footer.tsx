'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Gym Lead Hub
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We help boutique gym owners transform their passion into profitable, scalable businesses through proven lead generation, sales optimisation, and scaling strategies.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <Mail className="w-5 h-5 mr-3 text-blue-400" />
              <span>hello@gymleadhub.co.uk</span>
            </div>
            <div className="flex items-center text-gray-300 mb-2">
              <Phone className="w-5 h-5 mr-3 text-blue-400" />
              <span>+44 20 7123 4567</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-3 text-blue-400" />
              <span>London, United Kingdom</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Get Started
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Free Resources</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="/guide" className="text-gray-300 hover:text-blue-400 transition-colors">
                  5 Quick Wins for Gym Owners
                </a>
              </li>
              <li>
                <a href="/calculator" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Revenue Growth Calculator
                </a>
              </li>
              <li>
                <a href="/checklist" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Gym Marketing Checklist
                </a>
              </li>
            </ul>
            
            <div className="bg-slate-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Ready to Get Started?</h5>
              <p className="text-sm text-gray-300 mb-3">
                Book your free growth assessment today.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200"
              >
                Get Free Assessment
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Gym Lead Hub. All rights reserved.
          </p>
          <div className="text-gray-400 text-sm">
            <span>Helping gym owners build 6-figure businesses since 2020</span>
          </div>
        </div>
      </div>
    </footer>
  );
}