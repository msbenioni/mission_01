'use client';

import { ChevronRight, Shield, Zap, Trophy } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type FeatureCard = {
  icon: typeof Shield | typeof Zap | typeof Trophy;
  title: string;
  description: string;
  bgColor: string;
  hoverBgColor: string;
  animation: string;
  delay: string;
};

const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: Shield,
    title: 'Complete Protection',
    description: 'Comprehensive coverage for all types of karts and racing scenarios.',
    bgColor: 'bg-blue-500/20',
    hoverBgColor: 'hover:bg-blue-500/30',
    animation: 'animate-float',
    delay: 'animation-delay-0'
  },
  {
    icon: Zap,
    title: 'Lightning Fast Quotes',
    description: 'Get your premium quote in seconds with our AI-powered system.',
    bgColor: 'bg-red-500/20',
    hoverBgColor: 'hover:bg-red-500/30',
    animation: 'animate-float',
    delay: 'animation-delay-1'
  },
  {
    icon: Trophy,
    title: "Winner's Benefits",
    description: 'Exclusive perks and discounts for safe drivers.',
    bgColor: 'bg-green-500/20',
    hoverBgColor: 'hover:bg-green-500/30',
    animation: 'animate-float',
    delay: 'animation-delay-2'
  }
];

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-[80vh]">
      <video 
        onLoadedData={() => setIsVideoLoaded(true)}
        onCanPlay={() => setIsVideoLoaded(true)}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/video_game_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 z-[-1]" />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 animate-bounce-slow drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Race Your Way to the Right Insurance Premium!
          </h1>
          <p className="text-xl text-white mb-12 max-w-3xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            Protect your kart with our specialized insurance. Quick quotes, comprehensive coverage, and a dash of fun!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/upload"
              className="group bg-yellow-400 hover:bg-yellow-500 text-red-900 font-bold 
                py-4 px-8 rounded-full transform transition hover:scale-105 
                flex items-center justify-center shadow-lg"
            >
              Get Started
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/how-it-works"
              className="group bg-white hover:bg-white/90 text-red-600 font-bold 
                py-4 px-8 rounded-full transform transition hover:scale-105 shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {FEATURE_CARDS.map(({ icon: Icon, title, description, bgColor, hoverBgColor, animation, delay }) => (
            <div 
              key={title}
              className={`${bgColor} ${hoverBgColor} backdrop-blur-sm rounded-xl p-6 
                transform transition hover:scale-105 border-2 border-white/20 shadow-lg ${animation} ${delay}`}
            >
              <Icon className="w-12 h-12 mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-white/90">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}