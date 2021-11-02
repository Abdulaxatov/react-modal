import React from 'react';
import './Modal.css';

function Modal({elModal}) {
  return (

    <div className="modal" ref={elModal} onClick={(evt)=> {
      if (
        evt.target.matches('.modal') ||
        evt.target.matches('.modal-close__btn')
      ) {
        elModal.current.classList.remove('modal--open');
      }
    }}>
      <div className="modal__inner">
        <h2>Samandar Abdulaxatov</h2>
        <button className="modal-close__btn">x</button>
      </div>
    </div>
  );
}

export default Modal;