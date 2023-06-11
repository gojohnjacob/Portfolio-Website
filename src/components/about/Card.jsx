// import { HiArrowRight } from "react-icons/hi";

const Card = ({item:{title,desc,icon}}) => {
  return (
    // bg-gradient-to-r from-bodyColor to-[#c4f2ee] hover:bg-gradient-to-b hover:from-[#45c4b9] hover:to-[designColor] transition-colors duration-100
    <div className="w-full px-12 h-80 py-10 rounded-lg flex items-center outline outline-1 group">
        <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
            <div className="w-10 h-8 flex flex-col justify-between">
                <span className="text-5xl text-designColor">{icon}</span>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="text-xl md:text-2xl font-titleFont font-bold text-black">
                    {title}
                </h2>
                <p className="base">{desc}</p>
                {/* <span className="text-2xl text-designColor">
                    <HiArrowRight />
                </span> */}
            </div>
        </div>
        </div>
    </div>
  );
}

export default Card