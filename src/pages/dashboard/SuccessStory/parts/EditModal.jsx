import { Label, Modal, Textarea } from 'flowbite-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Loading from '../../../../components/reusuable/Loading';
import useAxiosWithCredentials from '../../../../hooks/useAxiosWithCredentials';
import swal from 'sweetalert';

const EditModal = ({ openModal, setOpenModal, story }) => {
    const [loading, setLoading] = useState(false);
    const axiosWithCredentials = useAxiosWithCredentials();

    const handleUpdate = async e => {
        e.preventDefault();
        setLoading(true);
        const review = e.target.review.value;
        try {
            const res = await axiosWithCredentials.put(`/success-story/${story.self_bio}?email=${story.email}`, { review });

            if (res.data.acknowledged) {
                swal("Done", "Your success story is updated.", "success");
                setLoading(false);
            }
        } catch (err) {
            swal("Error!", `Something went wrong! Note: ${err.message}`, "error");
            setLoading(false);
        }


    }

    return (<Modal show={openModal} onClose={() => setOpenModal(false)}>
        <div className='bg-element rounded-lg relative'>
            <Loading loading={loading} />

            <Modal.Header className='dark:bg-lite-dark'>{story.name}</Modal.Header>

            <form onSubmit={handleUpdate}>
                <Modal.Body className='bg-background-dark'>
                    <div>
                        <div className="mb-2 block">
                            <Label className="text-lg" value="Review" />
                        </div>
                        <Textarea className='' name="review" defaultValue={story.review} placeholder="Write your review" required rows={8} />
                    </div>
                </Modal.Body>

                <Modal.Footer className='dark:bg-lite-dark'>
                    <button
                        className="font-medium rounded px-3 py-1 relative bg-expand neomorphism-outset-sm dark:neomorphism-outset-sm-dark text-sm sm:text-lg hover:text-lite text-primary">
                        <span className='relative z-20'>Update</span>
                    </button>
                </Modal.Footer>
            </form>
        </div>
    </Modal>);
};

EditModal.propTypes = {
    openModal: PropTypes.bool,
    setOpenModal: PropTypes.func,
    story: PropTypes.object
};

export default EditModal;