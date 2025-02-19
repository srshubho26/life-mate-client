import Title from "../../../components/reusuable/Title";
import useSuccessStories from "../../../hooks/useSuccessStories";
import SuccessStoryCard from "../../../components/reusuable/SuccessStoryCard";
import Loading from "../../../components/reusuable/Loading";
import LinkBtn from "../../../components/reusuable/LinkBtn";

const SuccessStory = () => {
    const { stories, storiesLoading } = useSuccessStories(8);

    return (<section className="px-2 py-20 bg-element">
        <div className="max-w-screen-xl mx-auto">
            <Title title="Success Stories" />

            <div className="max-w-sm mx-auto sm:max-w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:gap-4 mt-10 min-h-96 relative">
                <Loading loading={storiesLoading} />
                {stories?.map(story => <SuccessStoryCard key={story._id} story={story} />)}
            </div>

            <LinkBtn to="/stories" name="View All" />
        </div>
    </section>);
};

export default SuccessStory;