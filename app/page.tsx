import { About } from "@/components/About";
import { FaqSection } from "@/components/Faq";
import { Features } from "@/components/Features";


import HeroSection from "@/components/HeroSection";


import { WhySolana } from "@/components/WhySolana";


export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Features />
      <WhySolana />
      <FaqSection />
    </>
    
  );
}
