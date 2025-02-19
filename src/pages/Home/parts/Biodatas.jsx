import BiodataCard from "../../../components/reusuable/BiodataCard";
import LinkBtn from "../../../components/reusuable/LinkBtn";
import Loading from "../../../components/reusuable/Loading";
import Title from "../../../components/reusuable/Title";
import useBiodatas from "../../../hooks/useBiodatas";

const Biodatas = () => {
    const { biodatas, loading } = useBiodatas({}, 8);

    return (<section className="px-2 py-20 ">
        <div className="max-w-screen-xl mx-auto">
            <Title title="Biodatas" />

            <div className="max-w-sm mx-auto sm:max-w-full grow grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-5 relative min-h-80">
                <Loading loading={loading} />
                {biodatas?.map(biodata => (<BiodataCard
                    key={biodata._id}
                    isLessSpace={true}
                    member={biodata}
                />))}
            </div>

            <LinkBtn to="/biodatas" name="View All" />
        </div>
    </section>);
};

export default Biodatas;