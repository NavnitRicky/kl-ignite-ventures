import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StartupsSection from "@/components/StartupsSection";
import AchievementsSection from "@/components/AchievementsSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StartupsSection />
        <AchievementsSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
