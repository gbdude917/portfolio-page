import About from "../components/About/About";
import BannerIntro from "../components/BannerIntro/BannerIntro";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Nav/NavBar";
import Projects from "../components/Proj/Projects";
import SecondBanner from "../components/SecondBanner/SecondBanner";
import Skills from "../components/Skills/Skills";
import ThirdBanner from "../components/ThirdBanner/ThirdBanner";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <BannerIntro />
      <About />
      <SecondBanner />
      <Skills />
      <ThirdBanner />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
