import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = [
        {
            "name": "Craft post and details",
            "description": [
                "Normal user can see all the post cards but not the details.",
                "A logged in user can see his post card and see the details of any card.",
                "Logged in user can add card.",
                "Logged in user can update and delete his posted card.",
                "User can log in with his GitHub and Gmail account."
            ]
            ,
            "repositoryLink": "https://github.com/HIMU005/art-gallery-client-by-himu?tab=readme-ov-file",
            "liveLink": "https://authentication-and-datab-2950f.web.app/"
        },
        {
            "name": "Service Provider",
            "description": [
                "Any logged in user can post a service.",
                "Any logged in user can book any service.",
                "Service provider can update and delete his service if needed.",
                "User who books any service can see the status of his booked service.",
                "Provider can only update the status from his to-do route.",
                "Provider cannot update the status of the service if the service is completed."
            ]
            ,
            "repositoryLink": "https://github.com/HIMU005/service-provider-client-by-himu",
            "liveLink": "https://service-provider-20102.web.app/"
        },
        {
            "name": "Task Provider",
            "description": [
                "A new user can select his role while registering on the website.",
                "When a new user comes to the website for the first time, if he logs in with Gmail, he becomes a worker.",
                "Only Admin can change the role.",
                "Admin cannot demote another user from admin.",
                "Worker gets 10 coins and task creator gets 50 coins while registering.",
                "Task creator can purchase coins using a card (for test purposes).",
                "Worker can withdraw coins by bKash, Nagad, Rocket (BD payment methods) {user must provide authenticated information}.",
                "Admin can delete tasks.",
                "Task creator can only accept or reject the submission.",
                "Admin confirms the withdraw request."
            ]
            ,
            "repositoryLink": "https://github.com/HIMU005/task-provider-12-client-by-himu?tab=readme-ov-file",
            "liveLink": "https://work-managemnt.web.app/"
        }
    ]

    return (
        <div className='bg-[#161513] text-white px-[10%]'>
            <h3 className="text-xl py-8 text-center md:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 via-blue-500 to-red-400 text-transparent bg-clip-text animate-gradient ">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    projects.map(project => <ProjectCard key={project.liveLink} project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;