'use client';

import { useState, useEffect } from 'react';
import { Flag, Trophy, Heart, Instagram, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';

const QUICK_LINKS = [
  { id: 'about', label: 'About Us', href: '/about' },
  { id: 'insurance', label: 'Insurance Plans', href: '/insurance' },
  { id: 'faq', label: 'FAQs', href: '/faq' },
  { id: 'support', label: 'Support', href: '/support' }
];

const SOCIAL_LINKS = [
  { id: 'instagram', Icon: Instagram, href: '#instagram' },
  { id: 'twitter', Icon: Twitter, href: '#twitter' },
  { id: 'facebook', Icon: Facebook, href: '#facebook' }
];

export default function Footer() {
  const [timeUntilNextQuoteDay, setTimeUntilNextQuoteDay] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const nextQuoteDay = new Date();
      nextQuoteDay.setDate(nextQuoteDay.getDate() + (5 - nextQuoteDay.getDay()));
      nextQuoteDay.setHours(9, 0, 0, 0);
      
      const diff = nextQuoteDay.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setTimeUntilNextQuoteDay(`${days}d ${hours}h`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">Turners Karts</span>
            </div>
            <p className="text-gray-400">
              Racing into the future of kart insurance!
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ id, label, href }) => (
                <li key={id}>
                  <Link 
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Next Quote Day Timer */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Next Quote Day</h3>
            <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
              <Flag className="h-5 w-5 text-red-500 animate-bounce-slow" />
              <span className="font-mono">{timeUntilNextQuoteDay}</span>
            </div>
          </div>

          {/* Column 4: Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {SOCIAL_LINKS.map(({ id, Icon, href }) => (
                <Link 
                  key={id}
                  href={href}
                  className="transform hover:scale-110 transition-transform"
                >
                  <Icon className="h-6 w-6 text-gray-400 hover:text-white" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Turners Karts. Made with{' '}
            <Heart className="h-4 w-4 inline-block text-red-500 animate-pulse" /> in NZ
          </p>
        </div>
      </div>
    </footer>
  );
} 