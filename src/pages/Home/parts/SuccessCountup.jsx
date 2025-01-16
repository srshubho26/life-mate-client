import { useState } from "react";
import Title from "../../../components/reusuable/Title";
import CountUp from "react-countup";
import { Fade } from "react-awesome-reveal";
import { IoWoman } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import { FaRegAddressCard } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../../../hooks/useAxiosPublic';

let timeout;
const SuccessCountup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const axiosPublic = useAxiosPublic();
    const { data: stats } = useQuery({
        queryKey: ['stats-', isVisible],
        queryFn: async () => {
            if (!isVisible) return {};
            const res = await axiosPublic('/stats');
            return res.data;
        }
    })

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
                    className={"max-w-sm sm:max-w-full mx-auto mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center"}
                >
                    <div className="border border-line bg-element rounded-md py-5 pb-8">
                        <p className="w-fit mx-auto text-7xl mb-4 text-primary">
                            <FaRegAddressCard />
                        </p>

                        <span className="text-text text-3xl mt-5 block font-bold">
                            <CountUp duration={2} end={stats?.totalBiodata} />
                        </span>

                        <h3 className="text-primary text-3xl uppercase font-bold">
                            Biodatas
                        </h3>
                    </div>

                    <div className="border border-line bg-element rounded-md py-5 pb-8">
                        <p className="w-fit mx-auto text-7xl mb-4 text-primary">
                            <IoIosPerson />
                        </p>

                        <span className="text-text text-3xl mt-5 block font-bold">
                            <CountUp duration={2} end={stats?.maleBiodata} />
                        </span>

                        <h3 className="text-primary text-3xl uppercase font-bold">
                            Men
                        </h3>
                    </div>

                    <div className="border border-line bg-element rounded-md py-5 pb-8">
                        <p className="w-fit mx-auto text-7xl mb-4 text-primary">
                            <IoWoman />
                        </p>

                        <span className="text-text text-3xl mt-5 block font-bold">
                            <CountUp duration={2} end={stats?.femaleBiodata} />
                        </span>

                        <h3 className="text-primary text-3xl uppercase font-bold">
                            Women
                        </h3>
                    </div>

                    <div className="border border-line bg-element rounded-md py-5 pb-8">
                        <p className="w-fit mx-auto text-7xl mb-4 text-primary">
                            <LuHeartHandshake />
                        </p>

                        <span className="text-text text-3xl mt-5 block font-bold">
                            <CountUp duration={2} end={stats?.totalMarriage} />
                        </span>

                        <h3 className="text-primary text-3xl uppercase font-bold">
                            Marriages
                        </h3>
                    </div>
                </div>
            </Fade>
        </div>
    </section>
    );
};

export default SuccessCountup;