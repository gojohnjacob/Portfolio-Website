import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr"
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return (
    <div className="w-full py-10 h-auto border-b-[1px] border-b-black">
        <div className="flex flex-row justify-evenly items-center">
            <a href="mailto:johnjacobgo@gmail.com" className="h-16 w-auto outline outline-1 bg-transparent bg-opacity-25 text-gray-900 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                <div className="flex flex-row gap-1.5 items-center justify-center text-md font-bodyFont mx-4">
                    <AiOutlineMail />
                    <p className="text-sm">johnjacobgo@gmail.com</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/gojohnjacob/" className="h-16 w-auto outline outline-1 bg-transparent bg-opacity-25 text-gray-900 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                <div className="flex flex-row gap-3 items-center justify-center text-md font-bodyFont mx-4">
                    <FaLinkedinIn />
                    <p className="text-sm">https://www.linkedin.com/in/gojohnjacob</p>
                </div>
            </a>
            <a href="https://github.com/gojohnjacob" className="h-16 w-auto outline outline-1 bg-transparent bg-opacity-25 text-gray-900 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                <div className="flex flex-row gap-1.5 items-center justify-center text-md font-bodyFont mx-4">
                    <FaGithub />
                    <p className="text-sm">https://github.com/gojohnjacob</p>
                </div>
            </a>
            <a href="resume.pdf" download className="h-16 w-auto outline outline-1 bg-transparent bg-opacity-25 text-gray-900 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                <div className="flex flex-row gap-1.5 items-center justify-center text-md font-bodyFont mx-4">
                    <GrDocumentDownload />
                    <p className="text-sm">Resume</p>
                </div>
            </a>
        </div>
    </div>
    );
}

export default Footer