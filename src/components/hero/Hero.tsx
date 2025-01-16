import { HeroScene } from './HeroScene';
import { HeroContent } from './HeroContent';
import { Navigation } from '../navigation/Navigation';

export const Hero = () => {
  return (
    <section className="relative h-screen">
      <Navigation />
      <div className="absolute inset-0">
      <HeroScene />
      </div>
      <HeroContent />
    </section>
  );
};