import GradesSection from "@/components/sections/GradesSection";
import HeroSection from "@/components/sections/HeroSection";
import TeacherSection from "@/components/sections/TeacherSection";
import TrackYourLevelSection from "@/components/sections/TrackYourLevelSection";
import WeProvideSection from "@/components/sections/WeProvideSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WeProvideSection />
      <TrackYourLevelSection />
      <GradesSection />
      <TeacherSection />
    </>
  );
}
