import { useState } from "react";
import Title from "../../../components/reusuable/Title";
import { Fade } from "react-awesome-reveal";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SuccessCountCard from "../../../components/reusuable/SuccessCountCard";

let timeout;
const SuccessCountup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const axiosPublic = useAxiosPublic();
    const { data: stats } = useQuery({
        queryKey: ['stats-home'],
        queryFn: async () => {
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
                    <SuccessCountCard
                        stat={stats?.totalBiodata}
                        isVisible={isVisible}
                        name="Biodatas"
                    />

                    <SuccessCountCard
                        stat={stats?.maleBiodata}
                        isVisible={isVisible}
                        name="Men"
                    />

                    <SuccessCountCard
                        stat={stats?.femaleBiodata}
                        isVisible={isVisible}
                        name="Women"
                    />

                    <SuccessCountCard
                        stat={stats?.totalMarriage}
                        isVisible={isVisible}
                        name="Marriages"
                    />
                </div>
            </Fade>
        </div>
    </section>
    );
};

export default SuccessCountup;