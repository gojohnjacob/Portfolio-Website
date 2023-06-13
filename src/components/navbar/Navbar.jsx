import { Link } from "react-scroll";
import { navLinksData } from '../../constants';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="w-full h-20 lg:h-24 sticky top-0 z-50 bg-transparent md:bg-bodyColor mx-0 lg:mx-auto flex justify-between items-center font-titleFont md:border-b-[1px] md:border-b-black">
        <div className="hidden md:block text-lg lg:text-xl">
        John Jacob Go
        </div>
        <div className="mr-1">
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            {navLinksData.map(({ _id, title, link }) => (
            <li
                className="text-base font-normal text-black-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={_id}
            >
                <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                {title}
                </Link>
            </li>
            ))}
        </ul>
        </div>
        <span
            onClick={() => setShowMenu(!showMenu)}
            className={`sticky text-xl mdl:hidden bg-designColor outline outline-1 w-10 h-10 mr-1 inline-flex items-center justify-center rounded-full text-bodyColor cursor-pointer ${showMenu ? "animate-rotateAnimation" : ""}`}
        >
            <FiMenu />
        </span>
    {showMenu && (
    <div className="w-full h-auto overflow-scroll absolute top-0 left-0 bg-bodyColor mx-[0] border-b-[1px] border-b-black p-4 scrollbar-hide">
        <div className="flex flex-col gap-8 py-2 relative">
        <ul className="flex flex-col items-center pt-10 gap-4">
            {navLinksData.map((item) => (
            <li
                key={item._id}
                className="text-base font-normal text-black tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
                <Link
                onClick={() => setShowMenu(false)}
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                {item.title}
                </Link>
            </li>
            ))}
        </ul>
        <span
            onClick={() => setShowMenu(false)}
            className="absolute top-4 right-4 text-black hover:text-designColor duration-300 text-2xl cursor-pointer"
        >
            <MdClose />
        </span>
        </div>
    </div>
    )}
    </div>
  );
}

export default Navbar