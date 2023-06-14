import { useTypewriter, Cursor } from "react-simple-typewriter";
import { bannerImg } from "../../assets/index";
import { FaGithub, FaLinkedinIn, FaReact, FaVuejs, FaPython, FaNodeJs} from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr"
import { AiOutlineMail } from "react-icons/ai";
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
        className="w-full md:pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
        <div className="w-full h-full lgl:w-1/2 flex flex-col gap-10 lg:gap-20">
            <div className="flex flex-col text-center lgl:text-left gap-5">
                    <div>
                        <h1 className="text-[2.9rem] md:text-6xl text-center lgl:text-left font-bold text-black">
                            Hi, I'm <span className="hidden md:inline text-designColor capitalize">John Jacob Go</span>
                        </h1>
                        <span className="text-[2.9rem] font-bold text-black md:hidden text-designColor capitalize">John Jacob Go</span>
                    </div>
                   
                    <h2 className="text-2xl md:text-4xl font-bold text-black mb-2">
                        <span>{text}</span>
                        <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                        />
                    </h2>
                    <div className="w-full lgl:hidden">
                        <img
                            className="w-[300] h-[450px] z-10 mx-auto"
                            src={bannerImg}
                            alt="bannerImg"
                        />
                    </div>
                    <p className="text-base text-justify font-bodyFont leading-6 tracking-wide">
                    I'm currently pursuing a Bachelor of Sciences with Honors in Computer Science and expected to graduate in May 2024. 
                    I am an aspiring software engineer with experience in Python programming, full-stack web development,
                    and data analysis and visualization. I'm currently looking for Software Engineering and Data Science internships!
                    </p>
                <a href="resume.pdf" download className="h-16 items-stretch w-auto outline outline-1 bg-transparent bg-opacity-25 text-gray-900 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                        <div className="flex flex-row gap-1.5 items-center justify-center text-md font-bodyFont">
                            <GrDocumentDownload />
                            <p>Download CV</p>
                        </div>
                    </a>
            </div>


            <div className="flex flex-col xl:flex-row gap-6 justify-between bottom-0">
                <div className="flex flex-col">
                    <div className="mb-4">
                        <h2 className="text-base uppercase font-titleFont mb-4">
                        Find me on
                        </h2>
                        <div className="flex gap-4">
                            <a href="mailto:johnjacobgo@gmail.com" className="bannerIcon">
                                <AiOutlineMail />
                            </a>
                            <a href="https://www.linkedin.com/in/gojohnjacob/" target="_blank" className="bannerIcon">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://github.com/gojohnjacob" target="_blank" className="bannerIcon">
                                <FaGithub />
                            </a>
                        </div>
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
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full hidden lgl:block lgl:w-1/2 flex justify-center items-center relative">
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