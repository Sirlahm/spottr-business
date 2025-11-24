import Navbar from "components/NewHomePage/NavBar";
import Hero from "components/NewHomePage/Hero";
import TrustSection from "components/NewHomePage/TrustSection";
import LaunchMarketign from "components/NewHomePage/LaunchMarketign";
import BusinessSlider from "components/NewHomePage/BusinessSlider";
import Stages from "components/NewHomePage/Stages";
import YesCrypto from "components/NewHomePage/YesCrypto";
import CollabRecommend from "components/NewHomePage/CollabRecommend";
import Resources from "components/NewHomePage/Resources";
import Footer from "components/NewHomePage/Footer";

function Home() {
    return (
      <div className='bg-[#274B89]'>
        <div className="min-h-screen  md:pt-3 pb-9">
          <Navbar />
          <Hero/>
          <TrustSection/>
          <div className="px-[15px] md:px-0">
          <LaunchMarketign/>
          </div> 
          <BusinessSlider/>
          <Stages/>
          <YesCrypto/>
          <CollabRecommend/>
          <Resources/>
          <div className="px-[15px] md:px-0">
          <Footer/>
          </div>
      
          {/* <main className='mt-20'>
            <div className="max-w-7xl mx-auto">
              <Hero />
              <GlobeSection />
              <BoringSection />
              <div className=" px-5 md:px-0">
              <CheckSection />
              </div>
         
  
  
            </div>
            <BrandSection />
            <div className="max-w-7xl mx-auto px-4 md:px-0">
              <StorySection />
            </div>
            <MultiRowDynamicCarousel />
            <div className="max-w-7xl mx-auto px-4 md:px-0">
              <CommunitySection />
            </div>
  
  
            <DynamicCardCarousel />
            <div className="max-w-7xl mx-auto px-4 md:px-0">
              <Footer />
  
            </div>
          </main> */}
        </div>
      </div>
  
    )
  }
  
  export default Home