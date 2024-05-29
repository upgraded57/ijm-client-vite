import Nav from "@/src/components/nav/Nav";
import Hero from "@/src/components/hero/Hero";
import Solutions from "@/src/components/home/Solutions";
import Trustees from "@/src/components/home/Trustees";
import Clientele from "@/src/components/home/Clientele";
import Intro from "@/src/components/home/Intro";
import Founder from "@/src/components/founder/Founder";
import Testimonials from "@/src/components/testimonials/Testimonials";
import RequestAMeeting from "@/src/components/requestAMeeting/RequestAMeeting";
import Footer from "@/src/components/footer/Footer";
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Solutions />
      <Trustees />
      <Clientele />
      <Intro />
      <Founder />
      <Testimonials />
      <RequestAMeeting />
      <Footer />
    </>
  );
}
