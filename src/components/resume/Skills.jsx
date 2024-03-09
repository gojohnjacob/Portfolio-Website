import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { skillsLeftData, skillsRightData } from '../../constants/skillsData';

const Skills = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row lgl:gap-20"
    >
        <div className="w-full lgl:w-1/2">
            <div className="py-8 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-designColor tracking-[4px] uppercase">
                    My Tech Stack
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">Languages and Frameworks</h2>
            </div>
            <div className="w-full h-auto py-5 flex flex-col gap-6 outline outline-1 bg-transparent bg-opacity-25 text-black text-xl justify-center rounded-md ">
                {skillsLeftData.map((item) => (
                    <SkillCard key={item.name} skillName={item.name} rating={item.rating} />
                ))}
            </div>
        </div>

        <div className="w-full lgl:w-1/2">
            <div className="py-8 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-designColor tracking-[4px] uppercase">
                    Other
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">Tools and Utilities</h2>
            </div>
            <div className="w-full h-auto py-5 flex flex-col gap-6 outline outline-1 bg-transparent bg-opacity-25 text-black text-xl justify-center rounded-md ">
                {skillsRightData.map((item) => (
                    <SkillCard key={item.name} skillName={item.name} rating={item.rating} />
                ))}
            </div>
        </div>
    </motion.div>
)

export default Skills