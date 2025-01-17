import Title from "../../../components/reusuable/Title";
import SortBtns from "../../../components/reusuable/SortBtns";
import useBiodatas from '../../../hooks/useBiodatas';
import { useEffect, useState } from "react";
import BiodataCard from "../../../components/reusuable/BiodataCard";

const PremiumMembers = () => {
    const {biodatas} = useBiodatas({premium: true}, 6);
    const [sortedBiodatas, setSortedBiodatas] = useState(biodatas);

    useEffect(()=>{
        setSortedBiodatas(biodatas);
    }, [biodatas]);

    const handleSort = sort=>{

        const _biodatas = [...sortedBiodatas];
let newBiodatas;
        if(sort==='asc'){
            newBiodatas = _biodatas.sort((a, b)=>{
                return a.age - b.age;
            })
        }else{
            newBiodatas = _biodatas.sort((a, b)=>{
                return b.age - a.age;
            })
        }
        setSortedBiodatas(newBiodatas);
    }

    return (<section className="px-2 py-20 bg-lite">
        <div className="max-w-screen-xl mx-auto">
            <Title title="Our Premium Members" />


            <div className="mt-10 mb-4 sort-wrap">
            <SortBtns setSort={handleSort} />
            </div>

            <div className="max-w-60 mx-auto sm:max-w-full grid sm:grid-cols-3 gap-4 text-center lg:text-left">
                {sortedBiodatas.map(member => (<BiodataCard key={member._id} member={member} />))}

            </div>
        </div>
    </section>);
};

export default PremiumMembers;