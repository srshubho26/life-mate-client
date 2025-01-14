import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PremiumMemberCard = ({member}) => {
    return (<div className="border border-line bg-element rounded-md p-4 flex flex-col lg:flex-row items-center gap-4">
           <div className="relative w-28">
               <img className="rounded-lg w-full" src="https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp" />
               <span className="absolute -top-3 -left-3 text-xl text-white font-bold uppercase bg-accent rounded-full px-3 py-1">
                   {member.gender}
               </span>
           </div>

           <div>
               <div className="text-sm font-bold text-lite">
                   <span className="bg-primary px-3 rounded-full">
                       #{member.id}
                   </span>
                   <span className="bg-accent px-3 rounded-full ml-2">
                       {member.age}Y
                   </span>
               </div>

               <h4 className="text-primary font-semibold text-2xl">
                   {member.name}
               </h4>
               <p className="text-text text-sm xl:text-lg font-medium mb-3">
                   {member.occupation} | {member.division}
                   </p>

               <Link className="hover:bg-primary border rounded-md px-3 py-1 font-semibold uppercase border-primary text-sm text-primary transition-colors block w-fit hover:text-lite mx-auto lg:m-0">
                   View Profile
               </Link>
           </div>
       </div>);
};

PremiumMemberCard.propTypes = {
    member: PropTypes.object
};

export default PremiumMemberCard;