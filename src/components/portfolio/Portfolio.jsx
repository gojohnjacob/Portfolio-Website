import Title from '../layouts/Title'
import ProjectsCard from './PortfolioCard';
import { portfolioData } from "../../constants/portfolioData";

const Projects = () => {
    return (
    <section
        id="portfolio"
        className="w-full py-20 border-b-[1px] border-b-black"
    >
        <div className="flex justify-center items-center text-center">
            <Title
                title="Here are some of the projects I have completed over the years"
                desc="Portfolio"
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-14">
            {portfolioData.map((item) => (
                <ProjectsCard item={item} key={item.id} />
            ))}
        </div>
    </section>
    );
}

export default Projects