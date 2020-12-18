import React, { useState } from 'react';
import Modal from 'react-modal';

export default function OpenModal() {
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return(
        <div className='OpenModal'>
            <button onClick={() => setModalIsOpen(true)}>Open modal</button>
                <Modal 
                    isOpen ={modalIsOpen} 
                    shouldCloseOnOverlayClick={false} 
                    onRequestClose={() => setModalIsOpen(false)} 
                    style={
                        {
                            overlay: {
                                backgroundColor:'black'
                            },
                            content: {
                                color: 'black'
                            }
                        }
                    }
                    > 
                    <h2>Modal Title</h2>
                    <p>Put body content over here</p>
                    <div>
                        <button onClick={() => setModalIsOpen(false)}>Close</button>
                    </div>
                </Modal>
        </div>
    )
}