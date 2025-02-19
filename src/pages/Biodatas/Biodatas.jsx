import { FaAngleRight } from "react-icons/fa";
import Filter from "./parts/Filter";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useBiodatas from "../../hooks/useBiodatas";
import Loading from "../../components/reusuable/Loading";
import BiodataCard from "../../components/reusuable/BiodataCard";
import { Pagination } from "flowbite-react";

// Pagination  style
const themes = {
    "pages": {
        "previous": {
            "base": "ml-0 rounded-l-lg border border-line  px-2 sm:px-3 py-2 leading-tight text-primary enabled:hover:bg-primary enabled:hover:text-lite"
        },
        "next": {
            "base": "rounded-r-lg border border-line  px-2 sm:px-3 py-2 leading-tight text-primary enabled:hover:bg-primary enabled:hover:text-lite"
        },
        "selector": {
            "base": "w-10 sm:w-12 border border-line  py-2 leading-tight enabled:hover:bg-primary enabled:hover:text-lite text-primary",
            "active": "bg-primary text-lite",
        }
    }
}

const Biodatas = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState({});
    const [currentPage, setCurrentPage] = useState(1);

    const { biodatas, loading, total } = useBiodatas(filter, 12, currentPage);
    const totalPage = Math.ceil(total / 12);

    return (<section className="px-2  biodatas">
        <Helmet>
            <title>Biodatas || Life Mate</title>
        </Helmet>

        <div className="max-w-screen-xl mx-auto flex gap-3 py-3">
            <div className={(open ? 'left-0' : '-left-72') + " fixed top-0 h-screen lg:h-auto z-40 lg:z-0 w-full max-w-72 neomorphism-outset dark:neomorphism-outset-sm-dark bg-element dark:bg-background-dark lg:static transition-all py-5 rounded-md"}>
                <Filter setFilter={setFilter} setCurrentPage={setCurrentPage} />

                <button
                    onClick={() => setOpen(!open)}
                    className="absolute top-40 -right-7 rounded-md border border-clear-dark bg-element text-accent py-5 text-3xl z-40 lg:hidden">
                    <FaAngleRight />
                </button>
            </div>

            <div className="max-w-sm mx-auto sm:max-w-full grow grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 text-center gap-3 content-start relative items-start min-h-screen">
                <Loading loading={loading} />
                {biodatas?.map(biodata => (<BiodataCard
                    key={biodata._id}
                    isLessSpace={true}
                    member={biodata}
                />))}

                {total < 12 || loading ? null : <div className="col-span-full flex-col sm:flex-row self-end my-10 flex justify-center sm:gap-10 items-center">
                    <p className="text-text text-lg">
                        Showing <span className="text-primary font-semibold mx-1">{currentPage}</span>
                        of <span className="text-primary font-semibold mx-1">{totalPage}</span>
                    </p>

                    <Pagination
                        theme={themes}
                        currentPage={currentPage}
                        totalPages={totalPage}
                        onPageChange={setCurrentPage}
                        showIcons
                        previousLabel=""
                        nextLabel=""
                    />
                </div>}

                {!loading && !biodatas.length && <h2 className="text-xl text-primary font-semibold col-span-full text-center">No Data Available!</h2>}
            </div>
        </div>
    </section>);
};

export default Biodatas;