'use client';

import { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Trophy, Star } from 'lucide-react';
import Link from 'next/link';

// Single race on Christmas Day
const MARIO_KART_RACE = {
  name: "Mushroom Cup Grand Prix",
  track: "Mario Kart Stadium",
  date: "2024-12-25T10:00:00Z", // Christmas Day 2024
  icon: "🍄"
};

export default function Footer() {
  const [raceCountdown, setRaceCountdown] = useState({
    name: MARIO_KART_RACE.name,
    track: MARIO_KART_RACE.track,
    timeLeft: '',
    icon: MARIO_KART_RACE.icon
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const raceTime = new Date(MARIO_KART_RACE.date).getTime();
      const difference = raceTime - now;

      if (difference <= 0) {
        return "🏎️ Race Day!";
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    // Update countdown immediately
    setRaceCountdown(prev => ({
      ...prev,
      timeLeft: calculateTimeLeft()
    }));

    // Update countdown every second
    const timer = setInterval(() => {
      setRaceCountdown(prev => ({
        ...prev,
        timeLeft: calculateTimeLeft()
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Turners Karts</h3>
            <p className="text-gray-400">
              Protecting your kart racing adventures with comprehensive insurance coverage.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Column 4: Christmas Day Race Countdown */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 justify-center md:justify-start">
              <Trophy className="h-5 w-5 text-yellow-400" />
              Christmas Day Race
            </h3>
            <div className="inline-flex flex-col items-center space-y-2 w-full">
              <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full w-full text-center">
                <span className="text-2xl mr-2 animate-bounce-slow inline-block">
                  {raceCountdown.icon}
                </span>
                <span className="font-bold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
                  {raceCountdown.name}
                </span>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full w-full text-center">
                <Star className="h-5 w-5 text-yellow-400 inline-block mr-2 animate-spin-slow" />
                <span className="text-blue-400">{raceCountdown.track}</span>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full w-full text-center font-mono">
                {raceCountdown.timeLeft}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Turners Karts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 