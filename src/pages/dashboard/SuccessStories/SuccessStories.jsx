import { Helmet } from "react-helmet-async";
import Loading from "../../../components/reusuable/Loading";
import useSuccessStories from "../../../hooks/useSuccessStories";
import Title from "../../../components/reusuable/Title";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from "react-router-dom";
import ViewModal from "./parts/ViewModal";
import { useState } from "react";

const SuccessStories = () => {
    const {stories, storiesLoading} = useSuccessStories();
    const [openModal, setOpenModal] = useState(false);
    const [story, setStory] = useState(null);

    const handleViewStory = _story=>{
        setStory(_story);
        setOpenModal(true);
    }

    return (<section className="relative min-h-screen">
        <Loading loading={storiesLoading} />
        <ViewModal story={story} openModal={openModal} setOpenModal={setOpenModal}/>
        <Helmet>
            <title>Success Stories || Love Mate</title>
        </Helmet>

        <Title title="Success Stories" />

        {!stories?.length && !storiesLoading && <h2 className="text-center my-10 text-lg font-semibold">No Success Story Available!</h2>}

        {stories?.length ? <div className="overflow-x-auto min-h-screen mt-10">
            <Table>
                <TableHead>
                    <TableHeadCell className="text-nowrap py-5 bg-element">Male Biodata ID</TableHeadCell>

                    <TableHeadCell className="text-nowrap bg-element py-5">Female Biodata ID</TableHeadCell>

                    <TableHeadCell className="py-5 bg-element">Action</TableHeadCell>
                </TableHead>
                <TableBody>

                    {stories?.map(story => <TableRow key={story._id}
                        className="even:bg-element text-primary text-base dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="text-nowrap">
                            <Link to={`/details/${story.type==='Male' ? story.self_bio : story.partner_bio}`}>
                            #{story.type==='Male' ? story.self_bio : story.partner_bio}
                            </Link>
                            
                            </TableCell>

                            <TableCell className="text-nowrap">
                                <Link to={`/details/${story.type==='Male' ? story.partner_bio : story.self_bio}`}>
                                #{story.type==='Male' ? story.partner_bio : story.self_bio}
                                </Link>
                            </TableCell>

                        <TableCell className='text-nowrap'>
                            <button
                                onClick={() => handleViewStory(story)}
                                className="font-medium border border-primary rounded-md px-3 py-1 hover:bg-primary hover:text-lite text-primary">
                                View Story
                            </button>
                        </TableCell>
                    </TableRow>)}

                </TableBody>
            </Table>
        </div> : null}
    </section>);
};

export default SuccessStories;