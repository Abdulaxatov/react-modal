import React from 'react';
import Modal from './Components/Modal/Modal';

function App() {

  const elModal  = React.useRef();


  return (
    <>
      <button className="modal--open" onClick={() => {
      elModal.current.classList.add('modal--open');
    }}>Open</button>
      <Modal elModal={elModal}/>
    </>
  );
}

export default App;
