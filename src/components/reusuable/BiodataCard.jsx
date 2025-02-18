import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cardCss = "neomorphism-outset rounded-md p-4 flex flex-col items-center gap-4 ";
const thumbCss = "border border-line rounded-lg w-full h-full object-cover";
const linkCss = "neomorphism-outset-sm bg-expand relative rounded px-3 py-1 font-semibold uppercase text-sm transition-all block w-fit text-primary hover:text-lite mx-auto ";

// 2nd parameter is used to use this component in biodatas page
const BiodataCard = ({ member, isLessSpace = false }) => {

    return (<div className={cardCss + (isLessSpace ? '' : 'lg:flex-row')}>
        <div className="relative w-28 h-28">
            <img className={thumbCss} src={member?.profile_img} />
        </div>

        <div className='grow flex flex-col'>
            <h4 className="text-white font-semibold text-xl text-shadow">
                {member.name}
            </h4>

            <div className="font-bold text-primary flex w-full max-w-44 justify-between gap-2">
                <span className="">
                    #{member.biodata_id}
                </span>
                <span className="">
                    {member.age}Y
                </span>
                <span className="">
                    {member.type}
                </span>
            </div>

            <p className={"text-text text-sm font-medium grow mb-3 " + (isLessSpace ? '' : 'xl:text-lg')}>
                {member.occupation} <span className='text-primary'>|</span> {member.division}
            </p>

            <Link to={`/details/${member.biodata_id}`}
            className={linkCss + (isLessSpace ? '' : 'lg:m-0')}>
                <span className='z-10 relative'>View Profile</span>
            </Link>
        </div>
    </div>);
};

BiodataCard.propTypes = {
    member: PropTypes.object,
    isLessSpace: PropTypes.bool
};

export default BiodataCard;