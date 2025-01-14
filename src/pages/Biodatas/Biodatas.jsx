import { FaAngleRight } from "react-icons/fa";
import PremiumMemberCard from "../../components/reusuable/PremiumMemberCard";
import Filter from "./parts/Filter";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useBiodatas from "../../hooks/useBiodatas";
import Loading from "../../components/reusuable/Loading";


const Biodatas = () => {
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState({});
    const { biodatas, loading } = useBiodatas(filter);

    return (<section className="px-2 bg-lite biodatas">
        <Helmet>
            <title>Biodatas || Love Mate</title>
        </Helmet>

        <div className="max-w-screen-xl mx-auto flex">
            <div className={(open ? 'left-0' : '-left-72') + " fixed top-0 h-screen lg:h-auto z-40 lg:z-0 w-full max-w-72 bg-element border-r border-clear-dark lg:border-none dark:bg-background-dark lg:static transition-all py-5"}>
                <Filter setFilter={setFilter} />

                <button
                    onClick={() => setOpen(!open)}
                    className="absolute top-40 -right-7 rounded-md border border-clear-dark bg-white text-accent py-5 text-3xl z-40 lg:hidden">
                    <FaAngleRight />
                </button>
            </div>

            <div className="max-w-sm mx-auto sm:max-w-full grow grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 text-center gap-3 p-3 relative items-start min-h-screen">
                <Loading loading={loading}/>
                {biodatas?.map(biodata => (<PremiumMemberCard
                    key={biodata._id}
                    isLessSpace={true}
                    member={biodata}
                />))}
                {!loading && !biodatas.length && <h2 className="text-xl text-primary font-semibold col-span-full text-center">No Data Available!</h2>}
            </div>
        </div>
    </section>);
};

export default Biodatas;