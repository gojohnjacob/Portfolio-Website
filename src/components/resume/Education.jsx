import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
import { schoolData, ecaData } from '../../constants/educationData';

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="font-titleFont gap-10 lg:gap-20 grid grid-cols-1 lg:grid-cols-2"
        >
            <div>
                <div className="flex flex-col gap-4 font-titleFont">
                    <p className="text-sm text-designColor tracking-[4px]">2007 - Present</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
                </div>
                <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-designColor border-opacity-30 flex flex-col gap-10">
                    {schoolData.map((item) => (
                    <ResumeCard item={item} key={item.id} />
                    ))}
                </div>
            </div>

            <div>
                <div className="flex flex-col gap-4 font-titleFont">
                    <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Extracurriculars</h2>
                </div>
                <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-designColor border-opacity-30 flex flex-col gap-10">
                    {ecaData.map((item) => (
                        <ResumeCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Education