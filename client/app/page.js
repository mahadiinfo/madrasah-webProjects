'use client';

import React from "react";
import HeroSlider from "./components/HomePageComponents/HeroSlider";
import WelcomeNotice from "./components/HomePageComponents/WelcomeNotice";
import Statistics from "./components/HomePageComponents/Statistics";
import Features from "./components/HomePageComponents/Features";
import PrincipalMessage from "./components/HomePageComponents/PrincipalMessage";
import QuickLinks from "./components/HomePageComponents/QuickLinks";
import ContactMap from "./components/HomePageComponents/ContactMap";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <main className="w-full font-hind-siliguri bg-white">
      {/* Hero Slider Section */}
      <section id="home">
        <HeroSlider />
      </section>

      {/* Welcome & Notice Section */}
      <section id="about">
        <WelcomeNotice />
      </section>

      {/* Statistics Section */}
      <Statistics />

      {/* Features Section */}
      <section id="features">
        <Features />
      </section>

      {/* Principal Message Section */}
      <PrincipalMessage />

      {/* Quick Links Section */}
      <QuickLinks />

      {/* Contact & Map Section */}
      <ContactMap />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
