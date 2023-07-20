import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Overlay from '../overlay/overlay';

const modalRoot = document.getElementById('react-modal')

function Modal({ children, modalOpened, closeModal }) {

  useEffect(() => {
    document.addEventListener('keydown', pressEsc)
    return () => {
      document.removeEventListener('keydown', pressEsc)
    }
  }, []);

  const pressEsc = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  };

  return ReactDOM.createPortal(
    (
      <>
        {modalOpened &&
          <div className={modalOpened ? styles.modal + ' ' + styles.modal_active : styles.modal}>
            <div className={styles.modal_close} onClick={closeModal}>
              <CloseIcon type="primary" />
            </div>
            {children}
            <Overlay modalOpened={modalOpened} closeModal={closeModal} />
          </div>

        }

      </>
    ), modalRoot
  )
}

export default Modal
