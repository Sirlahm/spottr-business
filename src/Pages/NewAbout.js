import Navbar from "components/NewHomePage/NavBar"
import Footer from "components/NewHomePage/Footer"
import AboutHero from "components/NewAbout/AboutHero"
import AboutAccordions from "components/NewAbout/AboutAccordions"

function About() {
    return (
        <div className='bg-[#274B89]'>
            <div className="min-h-screen md:pt-3 pb-9">
                <Navbar />

                <main className='mt-10'>
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <AboutHero />
                        <AboutAccordions />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 md:px-0 mt-10">
                        <Footer />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default About
