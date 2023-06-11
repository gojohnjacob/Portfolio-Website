import Title from "../layouts/Title";
import Card from "./Card";
import { aboutData } from "../../constants/aboutData";
const About = () => {
    return (
    <section
        id="about"
        className="w-full py-20 border-b-[1px] border-b-black"
    >
        <Title title="About me" desc="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
            {aboutData.map((item) => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    </section>
    );
};

export default About;