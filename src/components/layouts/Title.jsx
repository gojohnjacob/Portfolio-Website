const Title = ({title, desc}) => {
    return (
        <div className="flex flex-col gap-4 font-titleFont mb-14">
            <h3 className="text-base uppercase font-normal text-black tracking-wide">
                {title}
            </h3>
            <h1 className="text-4xl md:text-5xl text-black font-bold capitalize">
                {desc}
            </h1>
        </div>
    );
  }
  
export default Title