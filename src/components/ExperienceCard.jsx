import javaImage from '../assets/javascript.png'
import htmlImage from '../assets/html.png'
import cssImage from '../assets/css.png'
import nodeImage from '../assets/nodejs.png'
import reactImage from '../assets/reactjs.png'

const ExperienceCard = () => {
    return (
        <>
            <h2 className='text-[#C5C5C5] text-lg md:text-lg font-bold text-center my-4' >Experience with</h2>
            <div className='flex justify-center gap-3 md:gap-6'>
                <img className='w-10 h-11' src={htmlImage} alt="" />
                <img className='w-10 h-11' src={cssImage} alt="" />
                <img className='w-10 h-11' src={javaImage} alt="" />
                <img className='w-10 h-11' src={reactImage} alt="" />
                <img className='w-10 h-11' src={nodeImage} alt="" />
            </div>
        </>
    );
};

export default ExperienceCard;