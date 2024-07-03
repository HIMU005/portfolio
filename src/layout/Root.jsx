import Contact from "../Page/Contact";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const Root = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Projects className='bg-[#161513]' />
            <Contact />
            <Footer />
        </div>
    );
};

export default Root;