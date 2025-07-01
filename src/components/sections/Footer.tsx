'use client';

import { Mail, Phone } from 'lucide-react';

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
              Hi, I&apos;m Sam. I&apos;ve personally scaled 3 boutique gyms to 6-figures each. Now I help other gym owners achieve the same success using the exact systems that transformed my own businesses.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <Mail className="w-5 h-5 mr-3 text-blue-400" />
              <span>sam@gymleadhub.co.uk</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Phone className="w-5 h-5 mr-3 text-blue-400" />
              <span>07490 253 471</span>
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

          {/* Call to Action */}
          <div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h5 className="text-xl font-semibold mb-3">Tired of Broken Promises?</h5>
              <p className="text-gray-300 mb-4">
                We know you've been burned before. Let us prove ourselves first with 100 leads. We work for free until we deliver results.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Let Us Prove It Works First
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