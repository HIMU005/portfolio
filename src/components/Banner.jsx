import bannerImg from '../assets/Banner.jpeg'
import myImg from "../assets/image.png"
import ExperienceCard from './ExperienceCard';
const Banner = () => {
    return (
        <div className='bg-[#161513] text-white mx-auto'>
            <img className='w-full' src={bannerImg} alt="Banner Image" />

            <>
                <img className='mx-auto w-40' src={myImg} alt="" />
                <h2 className='text-2xl md:text-3xl lg:text-5xl w-3/5 mx-auto'>I am a <span className=' font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient'>junior Front end developer</span>. I am now exploring it.</h2>

                <p className='w-3/5 mx-auto text-center' >I am a junior front-end developer with some knowledge of backend development. I have gained hands-on experience in creating dynamic and responsive web applications. Alongside my front-end skills, I have completed a few projects using MongoDB. I am continuously working on expanding my knowledge to deliver efficient and robust web solutions.</p>
                <h3 className='text-center text-2xl font-semibold text-[#C5C5C5] '>Experience With</h3>
                {/* button section  */}
                <div className="flex flex-col md:flex-row justify-center gap-6 my-5">
                    <button className='btn btn-accent bg-white rounded-3xl text-xl'><a href="#contact">Get In touch</a></button>
                    <button className='btn btn-success rounded-3xl text-xl border-white text-white bg-black'>
                        <a href={myImg} download="Himu_Banner.png">Download CV</a>
                    </button>
                </div>

                <ExperienceCard />
            </>
        </div>
    );
};

export default Banner;