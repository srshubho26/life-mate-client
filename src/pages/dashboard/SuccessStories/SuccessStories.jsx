import { Helmet } from "react-helmet-async";
import Loading from "../../../components/reusuable/Loading";
import useSuccessStories from "../../../hooks/useSuccessStories";
import Title from "../../../components/reusuable/Title";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from "react-router-dom";
import ViewModal from "./parts/ViewModal";
import { useEffect, useState } from "react";

const SuccessStories = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { stories, storiesLoading } = useSuccessStories();
    const [openModal, setOpenModal] = useState(false);
    const [story, setStory] = useState(null);

    const handleViewStory = _story => {
        setStory(_story);
        setOpenModal(true);
    }

    return (<section className="relative min-h-screen">
        <Loading loading={storiesLoading} />
        <ViewModal story={story} openModal={openModal} setOpenModal={setOpenModal} />
        <Helmet>
            <title>Success Stories || Life Mate</title>
        </Helmet>

        <Title title="Success Stories" />

        {!stories?.length && !storiesLoading && <h2 className="text-center my-10 text-lg font-semibold">No Success Story Available!</h2>}

        {stories?.length ? <div className="overflow-x-auto min-h-screen mt-10">
            <Table>
                <TableHead>
                <TableHeadCell className="text-nowrap py-5 bg-element dark:bg-clear-dark">Serial No.</TableHeadCell>

                    <TableHeadCell className="text-nowrap py-5 bg-element dark:bg-clear-dark">Male Biodata ID</TableHeadCell>

                    <TableHeadCell className="text-nowrap bg-element dark:bg-clear-dark py-5">Female Biodata ID</TableHeadCell>

                    <TableHeadCell className="py-5 bg-element dark:bg-clear-dark">Action</TableHeadCell>
                </TableHead>
                <TableBody>

                    {stories?.map((story, i) => <TableRow key={story._id}
                        className="even:bg-element text-text dark:text-text-dark text-base dark:even:bg-background-dark">
                            <TableCell>{i+1}</TableCell>

                        <TableCell className="text-nowrap">
                            <Link to={`/details/${story.type === 'Male' ? story.self_bio : story.partner_bio}`}>
                                #{story.type === 'Male' ? story.self_bio : story.partner_bio}
                            </Link>

                        </TableCell>

                        <TableCell className="text-nowrap">
                            <Link to={`/details/${story.type === 'Male' ? story.partner_bio : story.self_bio}`}>
                                #{story.type === 'Male' ? story.partner_bio : story.self_bio}
                            </Link>
                        </TableCell>

                        <TableCell className='text-nowrap'>
                            <button
                                onClick={() => handleViewStory(story)}
                                className="font-medium rounded px-3 py-1 relative bg-expand neomorphism-outset-sm dark:neomorphism-outset-sm-dark hover:text-lite text-primary">
                                <span className="relative z-50">View Story</span>
                            </button>
                        </TableCell>
                    </TableRow>)}

                </TableBody>
            </Table>
        </div> : null}
    </section>);
};

export default SuccessStories;