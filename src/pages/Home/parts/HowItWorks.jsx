import Title from '../../../components/reusuable/Title';
import { BsSearchHeart } from 'react-icons/bs';
import { LuMessageCircleHeart } from 'react-icons/lu';
import { FaRegAddressCard } from 'react-icons/fa';
import { IoPersonAddSharp } from 'react-icons/io5';

const techniques = [
    {
        icon: <IoPersonAddSharp />,
        title: 'Create an account',
        desc: 'First of all, register in our platform as an authenticated user.'
    },
    {
        icon: <FaRegAddressCard />,
        title: 'Create your biodata',
        desc: 'After creating an user account, create your biodata from user dashboard.'
    },
    {
        icon: <BsSearchHeart />,
        title: 'Search your love',
        desc: 'We have tons of verified users. You can search based on your specific criteria.'
    },
    {
        icon: <LuMessageCircleHeart />,
        title: 'Share success story',
        desc: 'When you finally get your partner, get married and share your success story.'
    }
]

const HowItWorks = () => {
    return (<section className="px-2 py-20 bg-element">
        <div className="max-w-screen-xl mx-auto">
            <Title title="How it works" />

            <div className='max-w-sm sm:max-w-screen-md mx-auto lg:max-w-full mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-5 text-center'>
                {techniques.map((el, i) => (<div key={i} className='py-10 px-2 xl:px-4 rounded-md flex flex-col neomorphism-outset text-primary'>
                    <span className='text-8xl mx-auto w-fit block'>
                        {el.icon}
                    </span>

                    <div className='flex flex-col grow'>
                        <h2 className='text-xl xl:text-2xl capitalize my-5 font-semibold font-playwrite'>
                            {el.title}
                        </h2>
                        <p className='text-text text-base xl:text-lg'>{el.desc}</p>
                    </div>
                </div>))}
            </div>
        </div>
    </section>);
};

export default HowItWorks;