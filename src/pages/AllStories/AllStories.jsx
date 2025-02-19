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
        "base": "flex gap-2 justify-center",
        "previous": {
            "base": "ml-0 rounded-l-lg neomorphism-outset-sm dark:neomorphism-outset-sm-dark px-2 sm:px-3 py-2 leading-tight text-text dark:text-lite enabled:hover:bg-element dark:enabled:hover:bg-background-dark enabled:hover:text-primary"
        },
        "next": {
            "base": "rounded-r-lg px-2 neomorphism-outset-sm dark:neomorphism-outset-sm-dark sm:px-3 py-2 leading-tight text-text dark:text-lite enabled:hover:bg-element dark:enabled:hover:bg-background-dark enabled:hover:text-primary"
        },
        "selector": {
            "base": "w-10 sm:w-12 neomorphism-outset-sm dark:neomorphism-outset-sm-dark py-2 leading-tight enabled:hover:bg-element dark:enabled:hover:bg-background-dark enabled:hover:text-primary text-text dark:text-lite",
            "active": "bg-element text-primary dark:text-primary dark:bg-background-dark",
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

    return (<section className="px-2  min-h-screen py-10">
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