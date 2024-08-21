import Carousel from "../components/HomeComponents/carousel";
import Cta from "../components/HomeComponents/cta";
import Features from "../components/HomeComponents/features";
import Hero from "../components/HomeComponents/hero";
import Skills from "../components/HomeComponents/skills";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Hero />
        <Carousel />
        <Features />
        <Skills />
        <Cta />
      </div>
    </>
  );
}
