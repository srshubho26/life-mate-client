import Title from "../../../components/reusuable/Title";
import SortBtns from "../../../components/reusuable/SortBtns";
import useBiodatas from '../../../hooks/useBiodatas';
import { useState } from "react";
import BiodataCard from "../../../components/reusuable/BiodataCard";

const PremiumMembers = () => {
    const [sortAge, setSortAge] = useState('');
    const {biodatas} = useBiodatas({sortAge}, 6);

    return (<section className="px-2 py-20 bg-lite">
        <div className="max-w-screen-xl mx-auto">
            <Title title="Our Premium Members" />


            <div className="mt-10 mb-4 sort-wrap">
            <SortBtns sort={sortAge} setSort={setSortAge} />
            </div>

            <div className="max-w-60 mx-auto sm:max-w-full grid sm:grid-cols-3 gap-4 text-center lg:text-left">
                {biodatas.map(member => (<BiodataCard key={member._id} member={member} />))}

            </div>
        </div>
    </section>);
};

export default PremiumMembers;