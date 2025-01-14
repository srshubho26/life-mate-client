import { useState } from "react";
import Title from "../../../components/reusuable/Title";
import CountUp from "react-countup";
import { Fade } from "react-awesome-reveal";
import { IoWoman } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import { FaRegAddressCard } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";

const counts = [
    {
        icon: <FaRegAddressCard />,
        name: 'Biodatas',
        limit: 557,

    },
    {
        icon: <IoIosPerson />,
        name: 'Mens',
        limit: 356,

    },
    {
        icon: <IoWoman />,
        name: 'Womens',
        limit: 201,

    },
    {
        icon: <LuHeartHandshake />,
        name: 'Marriages',
        limit: 155,

    }
]

let timeout;
const SuccessCountup = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleVisiblility = (inview) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            inview && setIsVisible(true)
        }, 50);
    }

    return (<section className="px-2 py-20 bg-lite">
        <div className="max-w-screen-xl mx-auto">
            <Title title="our short journey" />

            <Fade delay={80} triggerOnce={true} onVisibilityChange={handleVisiblility}>
                <div
                    className="max-w-sm sm:max-w-full mx-auto mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center"
                >
                    {isVisible ? <>{counts.map(((el, i) => (
                        <div key={i} className="border border-line bg-element rounded-md py-5 pb-8">
                            <p className="w-fit mx-auto text-7xl mb-4 text-primary">
                                {el.icon}
                            </p>

                            <span className="text-text text-3xl mt-5 block font-bold">
                                <CountUp duration={3} end={el.limit} />
                            </span>

                            <h3 className="text-primary text-3xl uppercase font-bold">
                                {el.name}
                            </h3>
                        </div>
                    )))

                    }</> : null}
                </div>
            </Fade>
        </div>
    </section>
    );
};

export default SuccessCountup;