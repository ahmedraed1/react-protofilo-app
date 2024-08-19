import Footer from "../components/footer";
import Cta from "../components/HomeComponents/cta";
import Features from "../components/HomeComponents/features";
import Hero from "../components/HomeComponents/hero";
import Skills from "../components/HomeComponents/skills";

export default function Index() {
  return (
    <>
      <div>
        <Hero />
        <Features />
        <Skills />
        <Cta />
        <Footer />
      </div>
    </>
  );
}
