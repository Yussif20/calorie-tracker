import Modal from 'react-modal';
import CaloriesRecordForm from './CaloriesRecordForm';
import styles from './RecordFormModal.module.css';
Modal.setAppElement('#root');

const RecordFormModal = (props) => {
  return (
    <Modal
      className={styles.modal}
      isOpen={props.isModalOpen}
      onRequestClose={props.closeModal} // This will close the modal when clicking outside
    >
      <CaloriesRecordForm
        onClose={props.closeModal}
        onFormSubmit={props.handleFormSubmit}
      />
    </Modal>
  );
};

export default RecordFormModal;
