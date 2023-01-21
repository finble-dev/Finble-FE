import ReactModal from 'react-modal';
import { IconWrapper, ModalContent, ModalOpen } from './Component';
import closeIcon from '../../assets/icons/close.svg';
import { Img } from '../../assets/styles/styles';

const LoginModal = ({ modalOpen, setModalOpen }: any) => {
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={{
        overlay: {
          position: 'fixed',
          background: 'rgba(0, 0, 0, 0.3)',
        },
        content: {
          margin: 'auto',
          width: '815px',
          height: '495px',
          background: 'var(--type-white)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '20px',
        },
      }}
    >
      <ModalOpen>
        <IconWrapper onClick={() => setModalOpen(false)}>
          <Img src={closeIcon} />
        </IconWrapper>
        <ModalContent setModalOpen={setModalOpen} />
      </ModalOpen>
    </ReactModal>
  );
};

export default LoginModal;
