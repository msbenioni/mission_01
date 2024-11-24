'use client';

import { Shield, Zap, Trophy } from 'lucide-react';
import Image from 'next/image';

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
  return (
    <section className="relative overflow-hidden min-h-[80vh]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/kart racetrack.png"
          alt="Kart Racetrack Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={100}
        />
      </div>
      
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 animate-bounce-slow drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Race Your Way to the Right Insurance Premium!
          </h1>
          <p className="text-xl text-white mb-12 max-w-3xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            Protect your kart with our specialized insurance. Quick quotes, comprehensive coverage, and a dash of fun!
          </p>
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