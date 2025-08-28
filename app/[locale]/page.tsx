'use client';

import { useTranslations } from 'next-intl';
import HeroSection from '../../components/layout/LandingPage/Hero';
import ProjectsSection from '../../components/layout/LandingPage/Projects';
import BlogsSection from '../../components/layout/LandingPage/Blogs';
import CTASection from '../../components/layout/LandingPage/CallToAction';

export default function HomePage() {
  const tHero = useTranslations('Hero');
  const tProjects = useTranslations('Projects');
  const tBlogs = useTranslations('Blogs');
  const tCTA = useTranslations('CTA');

  return (
    <div className="relative min-h-screen w-full mt-15">
      <HeroSection t={tHero} />
      <ProjectsSection t={tProjects} />
      <BlogsSection t={tBlogs} />
      <CTASection t={tCTA} />
    </div>
  );
}
