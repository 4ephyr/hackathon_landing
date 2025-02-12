import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Registration from "@/components/Registration";
import Coordinators from "@/components/Coordinators";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Registration />
      <Coordinators />
      <Footer />
    </div>
  );
}
