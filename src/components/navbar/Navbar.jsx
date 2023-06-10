import { Link } from "react-scroll";
import { navLinksData } from '../../constants';

const Navbar = () => {
  return (
    <div className="w-11/12 h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="text-xl">
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
    </div>
  );
}

export default Navbar