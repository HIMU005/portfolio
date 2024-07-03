import PropTypes from 'prop-types';
const ProjectCard = ({ project }) => {
    const { name, description, repositoryLink, liveLink } = project;
    return (
        <div className='flex flex-col justify-between gap-3 border-2 border-primary rounded-xl p-5'>
            <h2 className='text-xl md:text-2xl lg:text-3xl font-normal '><span className='font-bold'>Project name:</span> {name}</h2>
            <div>

                {
                    description.map((line, idx) => <li key={idx}>{line}</li>
                    )
                }
            </div>
            <div>
                <button className='btn btn-link'>
                    <a target='_blank' href={repositoryLink}>Repo link</a>
                </button>
                <button className='btn btn-link'>
                    <a target='_blank' href={liveLink}>Live link</a>
                </button>
            </div>

        </div>
    );
};

export default ProjectCard;
ProjectCard.propTypes = {
    project: PropTypes.object,
}