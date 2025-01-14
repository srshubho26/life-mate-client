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

const slides = [
    {
        title: 'Get the reliable soul mate',
        desc: 'We analize your criteria and search for the best match for you. You can find someone who matches your criteria.',
        img: s1
    },
    {
        title: 'The best solution for you',
        desc: 'We provide tons verified profiles to get the best match for you. May be there is someone looking for you as well.',
        img: s2
    },
    {
        title: 'You privacy is our concern',
        desc: 'As an individual, we respect your privacy. So we will never compromise your activity outside our platform.',
        img: s3
    },
    {
        title: 'Someone is looking for you',
        desc: 'May be there is someone else who is looking for you like you are doing. So get ready to be the dream of someone.',
        img: s4
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
                <div className='h-96 sm:h-auto bg-primary max-h-[calc(100vh-130px)] relative'>
                    <div className='absolute px-2 top-0 left-0 w-full h-full bg-clear-dark slide-text'>
                        <div className='max-w-screen-xl mx-auto h-full relative z-20'>
                            <div className='sm:w-1/2 sm:pl-10 lg:pl-40 ml-auto h-full flex flex-col justify-center'>
                                <h2 className='text-2xl lg:text-4xl font-bold uppercase text-text-dark '>
                                    {slide.title}
                                </h2>

                                <p className='text-white text-base lg:text-lg mt-4'>
                                    {slide.desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    <img src={slide.img} className='w-full h-full object-cover' />
                </div>
            </SwiperSlide>))}

        </Swiper>
    </section>);
};

export default Banner;