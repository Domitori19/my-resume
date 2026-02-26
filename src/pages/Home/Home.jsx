import Hero from "@/pages/Home/Hero/Hero";
import Skills from "@/pages/Home/Skills/Skills";
import Contact from "@/pages/Home/Contact/Contact";
import Project from "./Project/Project";
import Experience from "./Experience/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      {/* <Project /> */}
      <Contact />
    </>
  );
}
