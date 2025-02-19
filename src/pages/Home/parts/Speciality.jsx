import Title from "../../../components/reusuable/Title";
import { GrSecure } from "react-icons/gr";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { MdOutlinePrivacyTip } from "react-icons/md";

const techniques = [
    {
        icon: <GrSecure />,
        title: '100% Screened Profile',
        desc: 'Our users are 100% authenticated. So do not worry about authenticity.'
    },
    {
        icon: <RiVerifiedBadgeLine />,
        title: 'Verified By Personal Visit',
        desc: 'We verify our users by visiting them personally to prevent scam.'
    },
    {
        icon: <MdOutlinePrivacyTip />,
        title: 'Control Over Privacy',
        desc: 'Unauthenticated visitors can\'t access contact information from biodatas.'
    }
]

const Speciality = () => {
    return (<section className="px-2 py-20 bg-element dark:bg-background-dark">
            <div className="max-w-screen-xl mx-auto">
                <Title title="Our Speciality" />

                <div className='max-w-sm sm:max-w-full mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-5 text-center xl:text-left'>
                    {techniques.map((el, i) => (<div key={i} className={'px-2 py-3 xl:px-4 xl:py-5 rounded-md flex flex-col xl:flex-row items-center gap-4 text-primary neomorphism-outset dark:neomorphism-outset-dark '}>
                        <span className='text-6xl mx-auto w-fit text-secondary'>
                            {el.icon}
                        </span>
    
                        <div className='flex flex-col grow'>
                            <h2 className={'lg:text-xl mb-4 capitalize tracking-wide font-playwrite text-shadow-sm dark:text-shadow-sm-dark'}>
                                {el.title}
                            </h2>
                            <p className='text-text dark:text-text-dark'>{el.desc}</p>
                        </div>
                    </div>))}
                </div>
            </div>
        </section>);
};

export default Speciality;