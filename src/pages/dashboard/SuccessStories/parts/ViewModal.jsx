import { Modal } from 'flowbite-react';
import PropTypes from 'prop-types';

const ViewModal = ({ openModal, setOpenModal, story }) => {
    return (<Modal show={openModal} onClose={() => setOpenModal(false)}>
        <div className='bg-lite rounded-lg relative'>
            <Modal.Header>{story?.name}</Modal.Header>

            <Modal.Body className='bg-element'>
                <img src={story?.couple_img} className="w-full max-w-52 rounded-md border border-line
                 p-2" />
                <p className='sm:text-lg text-text mt-4'>{story?.review}</p>
            </Modal.Body>

            <Modal.Footer>
                <button
                    onClick={() => setOpenModal(false)}
                    className="font-medium border border-primary rounded-md px-5 py-2 hover:bg-primary hover:text-lite text-primary">
                    Close
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