import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from "./Experience"
import { useState } from 'react';

const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    return (
        <section id="resume" className="w-full py-10 lg:py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title="What I've done so far" desc="My Resume" />
            </div>
            <div className="hidden lg:block">
                <ul className="w-full grid grid-cols-1 lg:grid-cols-3">
                    <li
                    onClick={() =>
                        setEducationData(true) &
                        setSkillData(false) &
                        setExperienceData(false)
                    }
                    className={`${
                        educationData ? "border-designColor rounded-lg" : "border-transparent"
                    } resumeLi`}
                    >
                        Education
                    </li>
                    <li
                    onClick={() =>
                        setEducationData(false) &
                        setSkillData(true) &
                        setExperienceData(false)
                    }
                    className={`${
                        skillData ? "border-designColor rounded-lg" : "border-transparent"
                    } resumeLi`}
                    >
                        Skills
                    </li>
                    <li
                    onClick={() =>
                        setEducationData(false) &
                        setSkillData(false) &
                        setExperienceData(true)
                    }
                    className={`${
                        experienceData ? "border-designColor rounded-lg" : "border-transparent"
                    } resumeLi`}
                    >
                        Work Experience
                    </li>
                </ul>
            </div>
            <div className="hidden lg:block">
                {educationData && <Education />}
                {skillData && <Skills />}
                {experienceData && <Experience />}
            </div>
            <div className="lg:hidden">
                <Education />
                <Skills />
                <Experience />
            </div>
        </section>
    );
}

export default Resume