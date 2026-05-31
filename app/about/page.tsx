"use client";

import React from "react";
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
        "It all started with a single neighborhood store and a bold dream: to bring premium dairy treats to our community. Our first shop became a local landmark, known for the creamiest ice cream and a warm, welcoming atmosphere that felt like home.",
      image:
        "https://raw.createusercontent.com/3c54d3a3-e307-4970-9d2f-e1f85f6602f3/",
      reverse: false,
    },
    {
      year: "Journey to Italy",
      title: "The Italian Inspiration",
      description:
        "Our quest for excellence took us to the heart of Italy. We immersed ourselves in the age-old traditions of artisan gelato-making, learning from masters to bring back authentic techniques and the finest ingredient standards to Nigeria.",
      image:
        "https://raw.createusercontent.com/731515ba-4bee-4707-80ae-fd44f6d6402f/",
      reverse: true,
    },
    {
      year: "Sophisticated Flavors",
      title: "The Olde English Era",
      description:
        "As we grew, so did our ambition. We introduced a touch of Old English elegance to our brand, partnering with upscale jazz bars and premium restaurants to provide sophisticated dessert experiences that redefined the local culinary landscape.",
      image:
        "https://raw.createusercontent.com/12eae180-b979-4b14-b205-2196ca0a4ab1/",
      reverse: false,
    },
    {
      year: "Innovation",
      title: "A Cone of Our Own",
      description:
        "We didn't just want to follow trends; we wanted to set them. By developing our own proprietary recipes and signature cones, we established a unique identity that stood for innovation and uncompromising flavor quality.",
      image:
        "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=1200",
      reverse: true,
    },
    {
      year: "1995 - 2005",
      title: "Building for Growth",
      description:
        "A decade of relentless focus saw us scaling from a local favorite to a regional powerhouse. We invested heavily in our people and processes, laying the foundation for a sustainable manufacturing ecosystem.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
      reverse: false,
    },
    {
      year: "2005",
      title: "A New Chapter",
      description:
        "In 2005, we inaugurated our state-of-the-art production facility. This milestone allowed us to implement international safety standards and scale our vision of providing world-class dairy products across the nation.",
      image:
        "https://images.unsplash.com/photo-1558444479-c8a39e9227c8?auto=format&fit=crop&q=80&w=1200",
      reverse: true,
    },
    {
      year: "Future",
      title: "Today & Beyond",
      description:
        "Today, Pace Heritage continues to lead with passion. Our commitment to the next generation remains steadfast as we innovate with new flavors and sustainable practices, ensuring that the magic of a Pace scoop remains timeless.",
      image:
        "https://images.unsplash.com/photo-1496674202477-969403a58401?auto=format&fit=crop&q=80&w=1200",
      reverse: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A1A2F]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0A1A2F] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-linear-to-l from-[#EAB308] to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#EAB308] text-sm font-bold uppercase tracking-wider">
                Our Story
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-crimson-text leading-tight">
                A Heritage of Passion.
                <br />
                <span className="text-[#EAB308]">A Future of Excellence.</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Pace Heritage is more than just a brand. It is a legacy of
                craftsmanship, rooted in the belief that every scoop should be a
                celebration of quality, tradition, and pure joy.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#EAB308] rounded-3xl rotate-3 scale-105 opacity-20 custom-pulse" />
              <Image
                src="https://raw.createusercontent.com/9da64afb-14f4-4997-a4b3-30d40561424a/"
                alt="Premium Ice Cream"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover border-4 border-white/10"
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
                  <h2 className="text-4xl font-bold font-crimson-text text-[#0A1A2F]">
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
            <h2 className="text-4xl md:text-5xl font-bold font-crimson-text">
              Quality Today. Excellence Always.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our guiding principles ensure that every interaction with our
              brand is as premium as our products.
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
