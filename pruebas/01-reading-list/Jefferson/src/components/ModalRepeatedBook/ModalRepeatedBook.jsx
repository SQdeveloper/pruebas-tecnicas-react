import React from 'react';
import './ModalRepeatedBook.css';

const ModalRepeatedBook = ({setOpenModalRepeatedBook}) => {
    return (
        <div className='modalRepeatedBook'>
            <h3>This book already added before.</h3>
            <button onClick={()=>{setOpenModalRepeatedBook(false)}}>Aceptar</button>
        </div>
    );
};

export default ModalRepeatedBook;