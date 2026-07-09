import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import Statement from "@/components/Statement";
import Services from "@/components/Services";
import Method from "@/components/Method";
import Engagements from "@/components/Engagements";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Credentials />
        <Statement />
        <Services />
        <Method />
        <Engagements />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
