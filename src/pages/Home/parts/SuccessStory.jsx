import { MdDateRange } from "react-icons/md";
import Title from "../../../components/reusuable/Title";
import StarRatings from "react-star-ratings";

const stories = [
    {
        img: "https://pearlcounsellingandparenting.com.au/wp-content/uploads/2020/03/pearl-1400-1024x1024.jpg",
        name: "Roni Mia",
        date: "29 Jan, 2025",
        review: "I tried different platforms to get my desired partner. But I got disappointed. Then I found LifeMate. After that, everything was like a dream. Today I am a happily married person.",
        rating: 4
    },
    {
        img: "https://pearlcounsellingandparenting.com.au/wp-content/uploads/2020/03/pearl-1400-1024x1024.jpg",
        name: "Roni Mia",
        date: "29 Jan, 2025",
        review: "I tried different platforms to get my desired partner. But I got disappointed. Then I found LifeMate.",
        rating: 3
    },
    {
        img: "https://pearlcounsellingandparenting.com.au/wp-content/uploads/2020/03/pearl-1400-1024x1024.jpg",
        name: "Roni Mia",
        date: "29 Jan, 2025",
        review: "I tried different platforms to get my desired partner. But I got disappointed. Then I found LifeMate. After that, everything was like a dream. Today I am a happily married person.",
        rating: 5
    },
    {
        img: "https://pearlcounsellingandparenting.com.au/wp-content/uploads/2020/03/pearl-1400-1024x1024.jpg",
        name: "Roni Mia",
        date: "29 Jan, 2025",
        review: "I tried different platforms to get my desired partner. But I got disappointed. Then I found LifeMate. After that, everything was like a dream. Today I am a happily married person.",
        rating: 4
    },
    {
        img: "https://pearlcounsellingandparenting.com.au/wp-content/uploads/2020/03/pearl-1400-1024x1024.jpg",
        name: "Roni Mia",
        date: "29 Jan, 2025",
        review: "I found LifeMate. After that, everything was like a dream. Today I am a happily married person.",
        rating: 2
    },
    {
        img: "https://pearlcounsellingandparenting.com.au/wp-content/uploads/2020/03/pearl-1400-1024x1024.jpg",
        name: "Roni Mia",
        date: "29 Jan, 2025",
        review: "I tried different platforms to get my desired partner. But I got disappointed. Then I found LifeMate. Today I am a happily married person.",
        rating: 5
    },
    {
        img: "https://pearlcounsellingandparenting.com.au/wp-content/uploads/2020/03/pearl-1400-1024x1024.jpg",
        name: "Roni Mia",
        date: "29 Jan, 2025",
        review: "I tried different platforms to get my desired partner. Then I found LifeMate. Today I am a happily married person.",
        rating: 5
    },
    {
        img: "https://pearlcounsellingandparenting.com.au/wp-content/uploads/2020/03/pearl-1400-1024x1024.jpg",
        name: "Roni Mia",
        date: "29 Jan, 2025",
        review: "I tried different platforms to get my desired partner. But I got disappointed. Then I found LifeMate.",
        rating: 5
    }
]

const SuccessStory = () => {
    return (<section className="px-2 py-20 bg-element">
        <div className="max-w-screen-xl mx-auto">
            <Title title="Success Stories" />

            <div className="max-w-sm mx-auto sm:max-w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4 mt-10">
                {stories.map((story, i) => (
                    <div key={i} className="bg-lite p-4 text-text rounded-md border border-line flex flex-col gap-2">
                        <img src={story.img} className="w-full rounded-md" />

                        <div className="grow flex flex-col">
                            <h4 className="text-2xl font-semibold text-primary">{story.name}</h4>
                            <p className="flex items-center gap-1 font-semibold">
                                <span className="text-2xl text-primary"><MdDateRange /></span>
                                {story.date}
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