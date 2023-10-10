import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";
import { experienceData, researchData } from "../../constants/experienceData";

const Experience = () => {
    return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="py-12 font-titleFont grid grid-cols-1 space-x-5 lg:grid-cols-2"
    >
        <div className="flex flex-col">
            <div className="flex flex-col gap-4 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
                <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
            </div>
            <div className="mt-14 w-full border-l-[6px] border-l-designColor border-opacity-30 flex flex-col gap-10">
                {experienceData.map((item) => (
                        <ResumeCard item={item} key={item.id} />
                ))}
            </div>
        </div>
        <div>
            <div className="flex flex-col gap-4 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">2020-2022</p>
                <h2 className="text-3xl md:text-4xl font-bold">Research Experience</h2>
            </div>
            <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-designColor border-opacity-30 flex flex-col gap-10">
                {researchData.map((item) => (
                    <ResumeCard item={item} key={item.id} />
                ))}
            </div>
        </div>
    </motion.div>
  );
};

export default Experience;