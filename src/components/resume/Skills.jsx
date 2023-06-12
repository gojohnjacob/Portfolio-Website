import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

const Skills = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
        <div className="w-full lgl:w-1/2">
            <div className="py-12 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-designColor tracking-[4px] uppercase">
                    Features
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">Stack</h2>
            </div>
            <div className="w-full h-auto py-5 flex flex-col gap-6 outline outline-1 bg-transparent bg-opacity-25 text-black text-xl inline-flex justify-center rounded-md ">
                <SkillCard skillName="JavaScript" rating={4} />
                <SkillCard skillName="JavaScript" rating={4} />
            </div>
        </div>

        <div className="w-full lgl:w-1/2">
            <div className="py-12 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-designColor tracking-[4px] uppercase">
                    Features
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">Other Skill</h2>
            </div>
            <div className="w-full h-auto py-5 flex flex-col gap-6 outline outline-1 bg-transparent bg-opacity-25 text-black text-xl inline-flex justify-center rounded-md ">
                <SkillCard skillName="JavaScript" rating={4} />
                <SkillCard skillName="JavaScript" rating={4} />
                <SkillCard skillName="JavaScript" rating={4} />
                <SkillCard skillName="JavaScript" rating={4} />
                <SkillCard skillName="JavaScript" rating={4} />
                <SkillCard skillName="JavaScript" rating={4} />
                <SkillCard skillName="JavaScript" rating={4} />
                <SkillCard skillName="JavaScript" rating={4} />
                
            </div>
        </div>
    </motion.div>
)

export default Skills