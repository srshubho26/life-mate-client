import { Modal } from 'flowbite-react';
import PropTypes from 'prop-types';

const ViewModal = ({ openModal, setOpenModal, story }) => {
    return (<Modal show={openModal} onClose={() => setOpenModal(false)}>
        <div className=' rounded-lg relative'>
            <Modal.Header className='dark:bg-background-dark'>{story?.name}</Modal.Header>

            <Modal.Body className='bg-element dark:bg-lite-dark'>
                <img src={story?.couple_img} className="w-full max-w-52 rounded-md border border-line
                 p-2" />
                <p className='sm:text-lg text-text mt-4'>{story?.review}</p>
            </Modal.Body>

            <Modal.Footer className='dark:bg-background-dark'>
                <button
                    onClick={() => setOpenModal(false)}
                    className="font-medium rounded px-3 py-1 relative bg-expand neomorphism-outset-sm dark:neomorphism-outset-sm-dark hover:text-lite text-primary">
                    <span className="relative z-50">Close</span>
                </button>
            </Modal.Footer>
        </div>
    </Modal>);
};

ViewModal.propTypes = {
    openModal: PropTypes.bool,
    setOpenModal: PropTypes.func,
    story: PropTypes.object
};

export default ViewModal;