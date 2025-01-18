import { Helmet } from 'react-helmet-async';
import Title from '../../components/reusuable/Title';
import useSuccessStories from '../../hooks/useSuccessStories';
import SuccessStoryCard from '../../components/reusuable/SuccessStoryCard';
import { useEffect, useState } from 'react';
import { Pagination } from 'flowbite-react';
import Loading from '../../components/reusuable/Loading';

// Pagination  style
const themes = {
    "pages": {
        "previous": {
            "base": "ml-0 rounded-l-lg border border-line bg-lite px-2 sm:px-3 py-2 leading-tight text-primary enabled:hover:bg-primary enabled:hover:text-lite"
        },
        "next": {
            "base": "rounded-r-lg border border-line bg-lite px-2 sm:px-3 py-2 leading-tight text-primary enabled:hover:bg-primary enabled:hover:text-lite"
        },
        "selector": {
            "base": "w-10 sm:w-12 border border-line bg-lite py-2 leading-tight enabled:hover:bg-primary enabled:hover:text-lite text-primary",
            "active": "bg-primary text-lite",
        }
    }
}

const AllStories = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { stories, storiesLoading, totalStories } = useSuccessStories(8, currentPage);
    const totalPage = Math.ceil(totalStories / 8);

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);

    return (<section className="px-2 bg-lite min-h-screen py-10">
        <Helmet>
            <title>Success Stories || Life Mate</title>
        </Helmet>
        <Title title="Success Stories" />

        <div className="max-w-sm mx-auto sm:max-w-screen-xl grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4 mt-10 relative min-h-96">
            <Loading loading={storiesLoading} />
            {stories?.map(story => <SuccessStoryCard key={story._id} story={story} />)}
        </div>

        {totalStories > 8 ? <div className="my-10 text-center">
            <Pagination
                theme={themes}
                currentPage={currentPage}
                totalPages={totalPage}
                onPageChange={setCurrentPage}
                showIcons
                previousLabel=""
                nextLabel=""
            />
        </div> : null}
    </section>
    );
};

export default AllStories;