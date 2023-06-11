import { useTypewriter, Cursor } from "react-simple-typewriter";
import { bannerImg } from "../../assets/index";
import { FaLinkedinIn, FaReact, FaVuejs, FaPython, FaNodeJs} from "react-icons/fa";
// import { SiTypescript, SiJavascript } from "react-icons/si";

const Banner = () => {
    const [text] = useTypewriter({
        words: ["Senior at Yale-NUS College", "Full Stack Developer", "Sports Enthusiast"],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 20,
        delaySpeed: 3000,
      });
    return (
    <section
        id="home"
        className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
            {/* <h4 className="text-lg font-normal"></h4> */}
            <h1 className="text-6xl font-bold text-black">
                Hi, I'm <span className="text-designColor capitalize">John Jacob Go</span>
            </h1>
            <h2 className="text-4xl font-bold text-black mb-2">
                <span>{text}</span>
                <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
                />
            </h2>
            <p className="text-base text-justify font-bodyFont leading-6 tracking-wide">
            I'm currently pursuing a Bachelor of Sciences with Honors in Computer Science and expected to graduate in May 2024. 
            I am an aspiring software engineer with experience in Python programming, full-stack web development,
            and data analysis and visualization. I'm currently looking for Software Engineering and Data Science internships!
            </p>
        </div>


        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
            </h2>
            <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/gojohnjacob/" className="bannerIcon">
                <FaLinkedinIn />
            </a>
            </div>
        </div>
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
            Experience in
            </h2>
            <div className="flex gap-4">
            <span className="bannerIcon">
                <FaReact />
            </span>
            <span className="bannerIcon">
                <FaVuejs />
            </span>
            <span className="bannerIcon">
                <FaPython />
            </span>
            <span className="bannerIcon">
                <FaNodeJs />
            </span>
            {/* <span className="bannerIcon">
                <SiJavascript />
            </span>
            <span className="bannerIcon">
                <SiTypescript />
            </span> */}
            </div>
        </div>
        </div>


        </div>
            <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
            <img
                className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 ml-auto"
                src={bannerImg}
                alt="bannerImg"
            />
        </div>
    </section>
  );
}

export default Banner