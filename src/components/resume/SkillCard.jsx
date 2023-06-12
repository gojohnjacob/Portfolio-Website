import { Rating, Typography } from "@material-tailwind/react";
 
const SkillCard = ({skillName, rating}) => {
    const labels = {
        1: {
          label: 'Novice',
        },
        2: {
          label: 'Familiar',
        },
        3: {
          label: 'Comfortable',
        },
        4: {
          label: 'Experienced',
        },
        5: {
          label: 'Proficient',
        },
    };
    return (
        <div className="overflow-x-hidden flex flex-row justify-between px-5 hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor duration-300">
            <div className="flex flex-col items-left gap-2">
                <Typography className="text-sm uppercase font-medium">
                    {skillName}
                </Typography>
                <Rating className="text-designColor" value={Number(rating)} readonly />
            </div>
            <Typography className="text-sm uppercase font-medium">
                {labels[rating].label}
            </Typography>
        </div>
    );
}
 
export default SkillCard;