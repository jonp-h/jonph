import Footer from "@/components/Footer";
import Parallax from "@/components/Parallax";
import Slides from "@/components/slides/Slides";

export default function LandingPage() {
  return (
    <>
      <section id="parallax">
        <Parallax />
      </section>
      <Slides />
      <section>
        <Footer />
      </section>
    </>
  );
}
