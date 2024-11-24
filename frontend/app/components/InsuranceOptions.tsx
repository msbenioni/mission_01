'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

type InsuranceType = {
  name: string;
  description: string;
  coverage: string[];
  monthlyPrice: number;
  yearlyPrice: number;
  bestFor: string[];
  icon: string; // We can use Mario Kart item icons
};

type KartCategory = {
  standard: string[];
  performance: string[];
  special: string[];
};

// Categorize karts by type
const KART_CATEGORIES: KartCategory = {
  standard: ['Cheep_Charge'],
  performance: ['B_Dasher'],
  special: ['Flame_Flyer']
};

// Define insurance packages
const INSURANCE_PACKAGES: Record<string, InsuranceType> = {
  mushroom: {
    name: "Mushroom Coverage",
    description: "Basic protection for standard karts with essential coverage",
    coverage: [
      "Collision damage",
      "Banana peel incidents",
      "Basic shell protection",
      "24/7 Lakitu recovery"
    ],
    monthlyPrice: 49.99,
    yearlyPrice: 549.99,
    bestFor: KART_CATEGORIES.standard,
    icon: "🍄"
  },
  star: {
    name: "Star Power Premium",
    description: "Comprehensive coverage for high-performance karts",
    coverage: [
      "Full collision coverage",
      "All shell types protection",
      "Lightning strike coverage",
      "Blue shell protection",
      "Premium Lakitu recovery"
    ],
    monthlyPrice: 89.99,
    yearlyPrice: 989.99,
    bestFor: KART_CATEGORIES.performance,
    icon: "⭐"
  },
  bullet: {
    name: "Bullet Bill Ultimate",
    description: "Maximum protection for special and modified karts",
    coverage: [
      "Full comprehensive coverage",
      "All item protection",
      "Off-road damage",
      "Anti-gravity protection",
      "Glider malfunction coverage",
      "VIP Lakitu service"
    ],
    monthlyPrice: 129.99,
    yearlyPrice: 1429.99,
    bestFor: KART_CATEGORIES.special,
    icon: "🚀"
  }
};

interface InsuranceOptionsProps {
  kartType: string;
}

export default function InsuranceOptions({ kartType }: InsuranceOptionsProps) {
  // Determine which insurance packages are available for this kart
  const getRecommendedPackages = () => {
    const packages = [];
    for (const [key, package_] of Object.entries(INSURANCE_PACKAGES)) {
      if (package_.bestFor.includes(kartType)) {
        packages.push({ id: key, ...package_ });
      }
    }
    return packages;
  };

  const recommendedPackages = getRecommendedPackages();

  return (
    <div className="flex justify-center items-center min-h-screen py-12 px-4">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-center mb-8">
          Recommended Insurance Packages for Your {kartType.replace(/_/g, ' ')}
        </h2>
        
        <div className="flex flex-col items-center gap-8">
          {recommendedPackages.map((package_) => (
            <div 
              key={package_.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20
                transform transition-all duration-300 hover:scale-105 w-full max-w-md"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{package_.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{package_.name}</h3>
                <p className="text-gray-600 mb-4">{package_.description}</p>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-red-600">
                    ${package_.monthlyPrice}
                    <span className="text-lg font-normal text-gray-600">/month</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    or ${package_.yearlyPrice}/year
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Coverage Includes:</h4>
                <ul className="space-y-2">
                  {package_.coverage.map((item, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/insurance-details/${package_.id}`}
                className="block w-full bg-red-600 text-white text-center py-3 rounded-full
                  font-semibold hover:bg-red-700 transition-colors duration-300"
              >
                Learn More
                <ChevronRight className="inline-block ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 