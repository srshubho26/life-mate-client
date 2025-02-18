import Title from "../../../components/reusuable/Title";
import useSuccessStories from "../../../hooks/useSuccessStories";
import { Link } from "react-router-dom";
import SuccessStoryCard from "../../../components/reusuable/SuccessStoryCard";
import Loading from "../../../components/reusuable/Loading";

const SuccessStory = () => {
    const { stories, storiesLoading } = useSuccessStories(8);

    return (<section className="px-2 py-20 bg-element">
        <div className="max-w-screen-xl mx-auto">
            <Title title="Success Stories" />

            <div className="max-w-sm mx-auto sm:max-w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:gap-4 mt-10 min-h-96 relative">
                <Loading loading={storiesLoading} />
                {stories?.map(story => <SuccessStoryCard key={story._id} story={story} />)}
            </div>

            <Link to="/stories" className="w-fit block mt-10 mx-auto text-primary transition-colors font-semibold text-lg rounded-lg px-6 py-2 hover:text-lite uppercase neomorphism-outset bg-expand relative">
                <span className="relative z-20">View All</span>
            </Link>
        </div>
    </section>);
};

export default SuccessStory;