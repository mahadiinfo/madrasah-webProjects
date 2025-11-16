'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bgimage from '@/public/assets/bgImage.jpg';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      title: 'মির্জাগঞ্জ ইয়ারিয়া আলিম মাদ্রাসায় স্বাগতম',
      subtitle: 'দ্বীনি ও আধুনিক শিক্ষার এক অনন্য প্রতিচ্ছবি',
      buttonText: 'ভর্তি চলছে',
      buttonLink: '/admission',
    },
    {
      id: 2,
      title: 'একটি আদর্শ শিক্ষাঙ্গন',
      subtitle: 'মেধাবী ও অভিজ্ঞ শিক্ষকমণ্ডলী দ্বারা পরিচালিত',
      buttonText: 'আরও জানুন',
      buttonLink: '/about',
    },
    {
      id: 3,
      title: 'সহ-শিক্ষা কার্যক্রম',
      subtitle: 'শিক্ষার্থীদের মেধা বিকাশে আমরা প্রতিশ্রুতিবদ্ধ',
      buttonText: 'কার্যক্রম দেখুন',
      buttonLink: '/activities',
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Slides Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <Image
              src={bgimage}
              alt={slide.title}
              fill
              className="object-cover blur-sm md:blur-none opacity-60"
              priority={index === 0}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
              <div className="max-w-4xl animate-fadeIn">
                <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mb-8 text-sm text-gray-100 md:text-lg lg:text-xl">
                  {slide.subtitle}
                </p>

                {/* CTA Button */}
                <Link
                  href={slide.buttonLink}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#b24dff] bg-[#b24dff] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg md:px-8 md:py-4 md:text-base"
                >
                  {slide.buttonText}
                  <HiArrowNarrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#b24dff]/80 p-3 text-white transition-all hover:bg-[#b24dff] md:left-8"
        aria-label="Previous slide"
      >
        <HiArrowNarrowLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#b24dff]/80 p-3 text-white transition-all hover:bg-[#b24dff] md:right-8"
        aria-label="Next slide"
      >
        <HiArrowNarrowRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-[#b24dff]'
                : 'w-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <style jsx>{`
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
        :global(.animate-fadeIn) {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
