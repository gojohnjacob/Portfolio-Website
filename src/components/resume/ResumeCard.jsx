const ResumeCard = ({item:{title,subTitle,result,desc}}) => {
    return (
        <div className="w-full h-1/3 group flex">
            <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                <span className="absolute w-5 h-5 rounded-full -top-1.5 -left-3 flex justify-center items-center bg-black">
                <span className="w-4 h-4 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                </span>
            </div>
            <div className="w-full outline outline-1 font-bodyFont bg-transparent hover:-translate-y-1 transition-all duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10">
                <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold">
                        {title}
                        </h3>
                        {/*  group-hover:text-gray duration-300*/}
                        <p className="text-md mt-2 text-black">
                        {subTitle}
                        </p>
                    </div>
                    {result &&
                        <div>
                            <p className="px-4 py-2 text-black bg-designColor bg-opacity-25 rounded-lg flex justify-center items-center text-sm font-medium">
                            {result}
                            </p>
                        </div>
                    }
                </div>
                <p className="text-md md:text-lg font-normal text-black">
                    {desc}
                </p>
            </div>
        </div>
    );
  }
  
  export default ResumeCard