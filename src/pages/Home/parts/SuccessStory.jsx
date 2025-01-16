import { MdDateRange } from "react-icons/md";
import Title from "../../../components/reusuable/Title";
import StarRatings from "react-star-ratings";
import useSuccessStories from "../../../hooks/useSuccessStories";
import moment from "moment";

const SuccessStory = () => {
    const { stories } = useSuccessStories();

    return (<section className="px-2 py-20 bg-element">
        <div className="max-w-screen-xl mx-auto">
            <Title title="Success Stories" />

            <div className="max-w-sm mx-auto sm:max-w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4 mt-10">
                {stories?.map(story => (
                    <div key={story._id} className="bg-lite p-4 text-text rounded-md border border-line flex flex-col gap-2">
                        <img src={story.couple_img} className="w-full aspect-square object-cover rounded-md" />

                        <div className="grow flex flex-col">
                            <h4 className="text-2xl font-semibold text-primary">{story.name}</h4>
                            <p className="flex items-center gap-1 font-semibold">
                                <span className="text-2xl text-primary"><MdDateRange /></span>
                                <span>
                                {moment(story.marriage_date).format('MMM DD, YYYY')}
                                </span>
                            </p>

                            <p className="my-3 grow">{story.review}</p>

                            <StarRatings
                                rating={story.rating}
                                starEmptyColor="#f5dca0"
                                starRatedColor="#ebaa0a"
                                starDimension="30px"
                                starSpacing="2px"
                                numberOfStars={5}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>);
};

export default SuccessStory;