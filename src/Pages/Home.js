import LP from "../components/Home";
import Experience from "../components/Experience";
import Awaits from "../components/Awaits";
import Footer from "../components/Footer";
import Brands from "../components/Brand/Brands";
import Features from "../components/Features/Features";
import Payment from "../components/Payment/Payment";
import Sme from "components/Sme/Sme";

function Home() {
  return (
    <div>
      <LP />
      <Features />
      <Payment />

      {/* <Experience /> */}
      <Sme />
      <Brands />
      <Awaits />
      <Footer />
    </div>
  );
}

export default Home;
