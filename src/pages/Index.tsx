import React from 'react';
import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CatalogSection from '@/components/home/CatalogSection';
import AboutSection from '@/components/home/AboutSection';
import OrderFormSection from '@/components/home/OrderFormSection';
import ContactsSection from '@/components/home/ContactsSection';
import Footer from '@/components/home/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CatalogSection />
      <AboutSection />
      <OrderFormSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}