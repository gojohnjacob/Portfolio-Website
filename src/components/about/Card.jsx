const Card = ({item:{title,desc,icon}}) => {
  return (
    <div className="w-full px-12 h-auto py-10 rounded-lg flex items-start outline outline-1 group">
        <div className="h-auto">
        <div className="flex h-full flex-col gap-8">
            <div className="w-10 h-8 flex flex-col justify-between">
                <span className="text-5xl text-designColor">{icon}</span>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-xl md:text-2xl font-titleFont font-bold text-black">
                    {title}
                </h2>
                <p className="base">{desc}</p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Card