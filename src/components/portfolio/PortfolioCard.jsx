import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({item:{title, desc, webLink, githubLink, img}}) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex flex-col outline outline-1">
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
                className="w-full h-auto aspect-video object-cover aspect-auto group-hover:scale-110 duration-300 cursor-pointer"
                src={img}
                alt={title}
            />
        </div>
        <div className="w-full mt-5 flex flex-col gap-6">
            <div>
                <div className="flex items-center justify-between">
                    <h3 className="text-xl uppercase text-designColor font-normal font-titleFont">
                        {title}
                    </h3>
                    <div className="mrflex gap-2">
                        {webLink && 
                        <a href={webLink} rel="noreferrer" target="_blank" className="text-lg w-10 h-10 rounded-full bg-transparent inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                             <FaGlobe />
                        </a>
                        }
                        {githubLink && 
                        <a href={githubLink} rel="noreferrer" target="_blank" className="text-lg w-10 h-10 rounded-full bg-transparent inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                            <BsGithub />
                        </a>
                        }
                    </div>
                </div>
                <p className="text-sm tracking-wide mt-3 font-bodyFont">
                    {desc}
                </p>
            </div>
        </div>
    </div>
  );
}

export default ProjectsCard