import {useState} from 'react'
import Title from '../layouts/Title';
import { FaGithub, FaTelegram, FaLinkedinIn } from "react-icons/fa";
import { GrDocumentDownload, GrPhone } from "react-icons/gr"
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const emailValidation = () => {
    return String(email)
        .toLocaleLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    const handleSend = (e) => {
    setSuccessMsg("");
    setErrMsg("");
    e.preventDefault();
    if (username === "") {
        setErrMsg("Username cannot be blank.");
    } else if (phoneNumber === "") {
        setErrMsg("Phone Number cannot be blank.");
    } else if (email === "") {
        setErrMsg("Email cannot be blank");
    } else if (!emailValidation(email)) {
        setErrMsg("Please give a valid email.");
    } else if (subject === "") {
        setErrMsg("Subject cannot be blank.");
    } else if (message === "") {
        setErrMsg("Message cannot be blank.");
    } else {
        setSuccessMsg(
        `Your message has been sent successfully!`
        );
        setErrMsg("");
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
    }
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
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
        <div className="w-full outline outline-1 lgl:w-[35%] h-full bg-transparent p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center">
      {/* <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      /> */}
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
                    <p className="text-base">johnjacobgo@gmail.com</p>
                </div>
        </a>
        <div className="h-16 w-auto outline outline-1 bg-transparent bg-opacity-25 text-black text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                <div className="flex flex-row gap-1.5 items-center justify-center font-bodyFont mx-4">
                    <GrPhone />
                    <p className="text-base">+65 80230250 | +63 9173850239</p>
                </div>
        </div>
        <a href="https://t.me/gojohnjacob" className="h-16 w-auto outline outline-1 bg-transparent bg-opacity-25 text-black text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                <div className="flex flex-row gap-1.5 items-center justify-center font-bodyFont mx-4">
                    <FaTelegram />
                    <p className="text-base">@gojohnjacob</p>
                </div>
        </a>
        <a href="https://www.linkedin.com/in/gojohnjacob" className="h-16 w-auto outline outline-1 bg-transparent bg-opacity-25 text-black text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                <div className="flex flex-row gap-1.5 items-center justify-center font-bodyFont mx-4">
                    <FaLinkedinIn />
                    <p className="text-base">https://www.linkedin.com/in/gojohnjacob</p>
                </div>
        </a>
        <a href="https://github.com/gojohnjacob" className="h-16 w-auto outline outline-1 bg-transparent bg-opacity-25 text-black text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                <div className="flex flex-row gap-1.5 items-center justify-center font-bodyFont mx-4">
                    <FaGithub />
                    <p className="text-base">https://github.com/gojohnjacob</p>
                </div>
        </a>
        <a href="resume.pdf" className="h-16 w-auto outline outline-1 bg-transparent bg-opacity-25 text-black text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300;">
                <div className="flex flex-row gap-1.5 items-center justify-center font-bodyFont mx-4">
                    <GrDocumentDownload />
                    <p className="text-base">Resume</p>
                </div>
        </a>
      </div>
    </div>
          <div className="w-full lgl:w-[60%] h-full py-10 outline outline-1 bg-transparent flex flex-col gap-8 p-4 lgl:p-8 rounded-lg">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-black uppercase tracking-wide">
                    Name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-black uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-black uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Email cannot be blank." &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-black uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Subject cannot be blank." &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-black uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message cannot be blank." && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 outline outline-1 bg-transparent rounded-lg text-base text-black tracking-wider uppercase hover:text-designColor duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-transparent text-center text-orange-500 text-base tracking-wide">
                  {errMsg}
                </p>
              )}
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