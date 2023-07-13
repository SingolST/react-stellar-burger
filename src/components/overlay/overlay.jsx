import React from 'react';
import ReactDOM from 'react-dom';
import styles from './overlay.module.css'

const modalRoot = document.getElementById('react-popup')

function Overlay({ modalOpened, closeModal }) {
  return ReactDOM.createPortal(
    (
      <>
        {modalOpened &&
          <div className={modalOpened ? styles.overlay + ' ' + styles.overlay_active : styles.overlay} onClick={closeModal}>

          </div>
        }
      </>
    ), modalRoot
  )
}

export default Overlay
