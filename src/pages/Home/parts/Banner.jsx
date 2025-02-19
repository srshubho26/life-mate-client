import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';

import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import s1 from '../../../assets/img/s1.jpg';
import s2 from '../../../assets/img/s2.jpg';
import s3 from '../../../assets/img/s3.jpg';
import s4 from '../../../assets/img/s4.jpg';
import { Link } from 'react-router-dom';
import { RiFileUserFill } from 'react-icons/ri';
import { BsFillInfoSquareFill } from 'react-icons/bs';
import { SiStorybook } from 'react-icons/si';
import { MdMarkEmailUnread } from 'react-icons/md';

const slides = [
    {
        title: 'Get the reliable soul mate',
        desc: 'We analize your criteria and search for the best match for you. You can find someone who matches your criteria. So do not worry and search for your best match.',
        img: s1,
        actionBtn: {
            name: 'About Us',
            icon: <BsFillInfoSquareFill/>,
            link: "/about"
        }
    },
    {
        title: 'The best solution for you',
        desc: 'We provide tons verified profiles to get the best match for you. May be there is someone looking for you as well and trying to find the best match like you are doing.',
        img: s2,
        actionBtn: {
            name: 'Success Stories',
            icon: <SiStorybook/>,
            link: "/stories"
        }
    },
    {
        title: 'You privacy is our concern',
        desc: 'As an individual, we respect your privacy. So we will never compromise your activity outside our platform. You privacy is our responsibility and we will always protect it.',
        img: s3,
        actionBtn: {
            name: 'Contact Us',
            icon: <MdMarkEmailUnread/>,
            link: "/contact"
        }
    },
    {
        title: 'Someone is looking for you',
        desc: 'May be there is someone else who is looking for you like you are doing. So get ready to be the dream of someone. We are eagerly waiting to see your success story.',
        img: s4,
        actionBtn: {
            name: 'Browse Biodatas',
            icon: <RiFileUserFill/>,
            link: "/biodatas"
        }
    }
]

const Banner = () => {
    return (<section className='banner text-center sm:text-left'>
        <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            slidesPerView={1}
            effect="fade"
            autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            }}
            navigation
            loop
        >
            {slides.map((slide, i) => (<SwiperSlide key={i}>
                <div className='h-[450px] sm:h-auto bg-primary max-h-[calc(100vh-130px)] relative'>
                    <div className='absolute px-2 top-0 left-0 w-full h-full slide-text'>
                        <div className='max-w-screen-xl mx-auto h-full relative z-20'>
                            <div className='px-4 sm:px-0 sm:w-1/2 h-full flex flex-col justify-center'>
                                <h2 className='text-xl sm:text-2xl lg:text-4xl font-bold uppercase text-text-dark '>
                                    {slide.title}
                                </h2>

                                <p className='text-white text-base xl:text-lg mt-4'>
                                    {slide.desc}
                                </p>

                                <Link 
                                to={slide.actionBtn.link} 
                                className='text-secondary neomorphism-outset-sm-dark bg-background-dark w-fit rounded-md flex gap-4 items-center mt-5 px-4 py-3 text-xl bg-expand-secondary relative hover:text-text transition-all'
                                >
                                <span className='text-3xl relative z-20'>{slide.actionBtn.icon}</span>
                                <span className='relative z-20 font-semibold'>{slide.actionBtn.name}</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <img src={slide.img} className='w-full h-full object-right aspect-[3/2] object-cover' />
                </div>
            </SwiperSlide>))}

        </Swiper>
    </section>);
};

export default Banner;