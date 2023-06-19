import { useState } from "react";

const ResumeCard = ({item:{title, subTitle, result, desc, hasModal, longDesc, coursesTaken}}) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="w-full h-1/3 group flex">
            <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                <span className="absolute w-5 h-5 rounded-full -top-1.5 -left-3 flex justify-center items-center bg-black">
                <span className="w-4 h-4 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                </span>
            </div>
            <div onClick={() => setShowModal(true)} className={`w-full outline outline-1 ${hasModal ? "cursor-pointer" : ""} font-bodyFont bg-transparent hover:-translate-y-1 transition-all duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10`}>
                <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:items-center">
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
            {(showModal && hasModal)? (
        <>
          <div
            className="justify-center items-center font-bodyFont flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative h-auto w-2/3 my-6 mx-5 max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-bodyColor outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t gap-4">
                  <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:items-center">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold">
                        {title}
                        </h3>
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
                  <button
                    className="p-1 ml-auto my-0 bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-40 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative px-8 py-4 ml-1 flex-auto">
                  <ul className="list-none mb-4 text-md md:text-lg font-normal text-black">
                    {longDesc.map(item => (
                            <li className="mb-3">{item}</li>
                        ))}
                  </ul>
                  {coursesTaken &&
                  <ul className="text-md md:text-lg list-disc"> <p className="underline">Courses taken:</p>
                    {coursesTaken.map(item => (
                        <li>{item}</li>
                    ))}
                  </ul>
                    }
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>
    );
  }
  
  export default ResumeCard