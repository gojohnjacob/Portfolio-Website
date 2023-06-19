import {useState} from 'react'
import Title from '../layouts/Title';
import { FaGithub, FaTelegram, FaLinkedinIn } from "react-icons/fa";
import { GrDocumentDownload, GrPhone } from "react-icons/gr"
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
    const [successMsg, setSuccessMsg] = useState("");
    const handleSend = () => {
        setSuccessMsg("Your message has been sent successfully!");
    };
  return (
    <section
        id="contact"
        className="w-full py-20 border-b-[1px] border-b-black"
    >
        <div className="flex justify-center items-center text-center">
        <Title title="Feel free to reach out for a chat!" desc="Contact Me" />
        </div>
        <div className="w-full">
        <div className="w-full h-auto flex flex-col gap-5 lgl:gap-0 lgl:flex-row justify-between">
        <div className="w-full outline outline-1 lgl:w-[35%] bg-transparent p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center">
        <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-black">John Jacob Go</h3>
        <p className="text-lg font-normal text-black">
            Full Stack Developer
        </p>
        <p className="text-base text-black tracking-wide">
            Currently looking for software engineering internships and opportunities.
        </p>
        <a href="mailto:johnjacobgo@gmail.com" className="h-16 w-auto outline outline-1 bg-transparent bg-opacity-25 text-black text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                <div className="flex flex-row gap-1.5 items-center justify-center font-bodyFont mx-4">
                    <AiOutlineMail />
                    <p className="text-sm md:text-base">johnjacobgo@gmail.com</p>
                </div>
        </a>
        <div className="h-16 w-auto outline outline-1 bg-transparent bg-opacity-25 text-black text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                <div className="flex flex-row gap-1.5 items-center justify-center font-bodyFont mx-4">
                    <GrPhone />
                    <span className="text-sm md:text-base break-words">+6580230250</span>
                </div>
        </div>
        <a href="https://t.me/gojohnjacob" target="_blank" rel="noreferrer" className="h-16 w-auto outline outline-1 bg-transparent bg-opacity-25 text-black text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                <div className="flex flex-row gap-1.5 items-center justify-center font-bodyFont mx-4">
                    <FaTelegram />
                    <p className="text-sm md:text-base">@gojohnjacob</p>
                </div>
        </a>
        <a href="https://www.linkedin.com/in/gojohnjacob" target="_blank" rel="noreferrer" className="overflow-auto h-16 w-auto outline outline-1 bg-transparent bg-opacity-25 text-black text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                <div className="flex flex-row gap-1.5 items-center justify-center font-bodyFont mx-4">
                    <FaLinkedinIn />
                    <p className="text-sm md:text-base">https://www.linkedin.com/in/gojohnjacob</p>
                </div>
        </a>
        <a href="https://github.com/gojohnjacob" target="_blank" rel="noreferrer" className="h-16 w-auto outline outline-1 bg-transparent bg-opacity-25 text-black text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                <div className="flex flex-row gap-1.5 items-center justify-center font-bodyFont mx-4">
                    <FaGithub />
                    <p className="text-sm md:text-base">https://github.com/gojohnjacob</p>
                </div>
        </a>
        <a href="resume.pdf" className="h-16 w-auto outline outline-1 bg-transparent bg-opacity-25 text-black text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                <div className="flex flex-row gap-1.5 items-center justify-center font-bodyFont mx-4">
                    <GrDocumentDownload />
                    <p className="text-sm md:text-base">Resume</p>
                </div>
        </a>
        </div>
    </div>
            <div className="w-full lgl:w-[60%] py-10 outline outline-1 lgl:self-stretch bg-transparent flex flex-col gap-8 p-4 lgl:p-8 rounded-lg">
            <form action="https://formsubmit.co/johnjacobgo@gmail.com" onSubmit={handleSend} method="POST" className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-black uppercase tracking-wide">
                    Name
                    </p>
                    <input
                    className="contactInput"
                    type="text"
                    name="name"
                    required
                    />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-black uppercase tracking-wide">
                    Phone Number
                    </p>
                    <input
                    className="contactInput"
                    type="text"
                    name="phoneNum"
                    required
                    />
                </div>
                </div>
                <div className="flex flex-col gap-4">
                <p className="text-sm text-black uppercase tracking-wide">
                    Email
                </p>
                <input
                    className="contactInput"
                    type="email"
                    name="email"
                    required
                />
                </div>
                {/* <div className="flex flex-col gap-4">
                <p className="text-sm text-black uppercase tracking-wide">
                    Subject
                </p>
                <input
                    className="contactInput"
                    type="text"
                    name="subject"
                    required
                />
                </div> */}
                <div className="flex flex-col gap-4">
                <p className="text-sm text-black uppercase tracking-wide">
                    Message
                </p>
                <textarea
                    className="contactTextArea"
                    cols="30"
                    rows="8"
                    name="message"
                    required
                ></textarea>
                </div>
                <div className="w-full">
                <button
                type="submit"
                //   onClick={handleSend}
                    className="w-full h-12 outline outline-1 bg-transparent rounded-lg text-base text-black tracking-wider uppercase hover:text-designColor duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                    Send Message
                </button>
                </div>
                {successMsg && (
                <p className="py-3 bg-transparent text-center text-green-500 text-base tracking-wide">
                    {successMsg}
                </p>
                )}
            </form>
            </div>
        </div>
        </div>
    </section>
  );
}

export default Contact