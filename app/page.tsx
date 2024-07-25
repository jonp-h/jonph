import Footer from "@/components/footer/Footer";
import Parallax from "@/components/parallax/Parallax";
import Slides from "@/components/slides/Slides";

export default function LandingPage() {
  return (
    <>
      <section id="parallax">
        <Parallax />
      </section>
      <div>
        <Slides />
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
}
