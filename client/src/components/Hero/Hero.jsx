import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Blur */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-[120px]" />

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <HeroContent />

        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;