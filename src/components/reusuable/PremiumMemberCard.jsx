import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PremiumMemberCard = ({ member, isLessSpace = false }) => {
    const isMale = member.type==='male';
    return (<div className={"border border-line bg-element rounded-md p-4 flex flex-col items-center gap-4 " + (isLessSpace ? '' : 'lg:flex-row')}>
        <div className="relative w-28 h-28">
            <img className="rounded-lg border border-accent w-full h-full object-cover" src={member?.profile_img || "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp"} />
            <span className={"absolute -top-3 -left-3 text-white font-bold uppercase bg-accent rounded-full py-1 " + (isMale ? 'px-2' : 'px-3')}>
                {isMale ? 'M' : 'F'}
            </span>
        </div>

        <div className='grow flex flex-col'>
            <div className="text-sm font-bold text-lite">
                <span className="bg-primary px-3 rounded-full">
                    #{member.id || member.biodata_id}
                </span>
                <span className="bg-accent px-3 rounded-full ml-2">
                    {member.age}Y
                </span>
            </div>

            <h4 className="text-primary font-semibold text-lg">
                {member.name}
            </h4>
            <p className={"text-text text-sm font-medium grow mb-3 " + (isLessSpace ? '' : 'xl:text-lg')}>
                {member.occupation} <span className='text-primary'>|</span> {member.division}
            </p>

            <Link className={"hover:bg-primary border rounded-md px-3 py-1 font-semibold uppercase border-primary text-sm text-primary transition-colors block w-fit hover:text-lite mx-auto " + (isLessSpace ? '' : 'lg:m-0')}>
                View Profile
            </Link>
        </div>
    </div>);
};

PremiumMemberCard.propTypes = {
    member: PropTypes.object,
    isLessSpace: PropTypes.bool
};

export default PremiumMemberCard;