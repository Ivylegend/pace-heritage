"use client";

import { Award, Zap, Users, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  const timelineData = [
    {
      year: "1995",
      title: "The Beginning",
      description:
        "Pace Heritage began in Lagos as a neighborhood convinience store selling ice cream for a major manufacturer.",
      image: "/images/beginning.png",
      reverse: false,
    },
    {
      year: "Journey to Italy",
      title: "The Italian Inspiration",
      description:
        "Our founders, Mr. & Mrs. Prosper C. Okigue, were inspired by the art and compassion Italian gelato makers put into every flavor, the ambience, and the rich aroma of italian espresso and gelato shops.",
      image: "/images/italy.png",
      reverse: true,
    },
    {
      year: "Sophisticated Flavors",
      title: "The Olde English Era",
      description:
        "The inspiration led to The Olde English Jazz Bar/Restaurant, where every meal was paired with erotic ice cream desserts. It became a local Mecca for jazz lovers and a home for emerging artists.",
      image: "/images/old-english.png",
      reverse: false,
    },
    {
      year: "Innovation",
      title: "A Cone of Our Own",
      description:
        "We introduced ice cream cones - a complete departure from plastic cups. Demand for our takeaway ice cream and cones grew rapidly.",
      image: "/images/product-cone.png",
      reverse: true,
    },
    {
      year: "1995 - 2005",
      title: "Building for Growth",
      description:
        "We moved to a 240 square meter factory at Lagos State Small Scale Industries Estate, Matori, Lagos, equipped with automatic machines and premium ingredients from leading italian firms.",
      image: "/images/hero-bg.png",
      reverse: false,
    },
    {
      year: "2005",
      title: "A New Chapter",
      description:
        "Pace expanded to a 1.5 hectare factory at Agbara Industrial Estate and secured NAFDAC certification in 2006 for all our products.",
      image: "/images/new-chapter.png",
      reverse: true,
    },
    {
      year: "Future",
      title: "Today & Beyond",
      description:
        "The Pace Heritage inspiration became a dream, the dream became reality, and the drive to achieve excellence remains unstoppab;e. We continue to innovate and deliver premium ice cream products accross Nigeria and beyond.",
      image: "/images/lick.png",
      reverse: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A1A2F]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative isolate min-h-[760px] lg:h-screen max-lg:min-h-0 pt-[150px] pb-8 max-lg:pt-32 max-sm:pt-28 overflow-hidden bg-[radial-gradient(circle_at_66%_35%,rgba(17,166,232,0.28),transparent_33%),linear-gradient(125deg,#05142b_0%,#071a34_48%,#020d20_100%)] text-white">
        <Image
          className="absolute inset-0 -z-30 h-full w-full object-cover object-right opacity-[0.42] blur-[1px]"
          src="/images/hero-bg.png"
          alt="Hero background"
          fill
          priority
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(4,16,34,0.96)_0%,rgba(4,16,34,0.72)_38%,rgba(4,16,34,0.23)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_42%_18%,rgba(243,178,63,0.12),transparent_18%),radial-gradient(circle_at_74%_20%,rgba(255,255,255,0.16),transparent_8%),radial-gradient(circle_at_88%_62%,rgba(17,166,232,0.18),transparent_22%)] opacity-90" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[82px_82px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#EAB308] text-sm font-bold uppercase tracking-wider">
                Our Story
              </div>
              <h1 className="font-serif text-[clamp(3.1rem,5.1vw,4.25rem)] leading-[0.96] max-sm:text-[clamp(2.75rem,11.7vw,4.1rem)] max-sm:leading-[1.02]">
                A Heritage of Passion.
                <br />
                <span className="text-[#EAB308]">A Future of Excellence.</span>
              </h1>
              <p className="text-[1.05rem] text-gray-300 leading-relaxed max-w-xl">
                Our journey began with a simple love for ice cream and a dream
                to create exceptional experiences to every customer.
              </p>
            </div>
            <div className="relative">
              {/* <div className="absolute inset-0 bg-[#EAB308] rounded-3xl rotate-3 scale-105 opacity-20 custom-pulse" /> */}
              <Image
                src="/images/ab.png"
                alt="Premium Ice Cream"
                width={600}
                height={500}
                className="relative w-full h-[500px] object-cover scale-110 lg:scale-120"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-16 items-center ${item.reverse ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 space-y-6">
                  <div className="text-[#EAB308] font-bold text-lg tracking-widest uppercase">
                    {item.year}
                  </div>
                  <h2 className="text-4xl font-bold font-serif text-[#0A1A2F]">
                    {item.title}
                  </h2>
                  <div className="w-20 h-1 bg-[#EAB308]" />
                  <p className="text-lg text-gray-600 leading-relaxed italic">
                    &apos; {item.description} &apos;
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gray-100 rounded-2xl group-hover:bg-[#EAB308]/10 transition-colors" />
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="relative rounded-xl shadow-lg w-full h-[400px] object-cover grayscale-20% group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-24 bg-[#0A1A2F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
              Quality Today. Excellence Always.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We remain committed to crafting premium ice cream products with
              integrity, innovation and a passion for bringing joy to every
              customer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="text-[#EAB308]" size={40} />,
                title: "Premium Quality",
                desc: "Using only the finest ingredients sourced globally.",
              },
              {
                icon: <Zap className="text-[#EAB308]" size={40} />,
                title: "Innovation Driven",
                desc: "Constant evolution of flavors and manufacturing.",
              },
              {
                icon: <Users className="text-[#EAB308]" size={40} />,
                title: "Customer Focused",
                desc: "Every scoop is designed for your ultimate satisfaction.",
              },
              {
                icon: <ShieldCheck className="text-[#EAB308]" size={40} />,
                title: "Proudly Nigerian",
                desc: "Building local excellence with international standards.",
              },
            ].map((promise, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#EAB308] transition-all group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {promise.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{promise.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {promise.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0% {
            opacity: 0.1;
            transform: rotate(3deg) scale(1.05);
          }
          50% {
            opacity: 0.3;
            transform: rotate(3deg) scale(1.08);
          }
          100% {
            opacity: 0.1;
            transform: rotate(3deg) scale(1.05);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .custom-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
