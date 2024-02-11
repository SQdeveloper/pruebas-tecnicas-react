import React from 'react';
import './Book.css';

const Book = ({url, title, index, setReadingList}) => {
    
    const addToReadingList = ()=>{
        setReadingList(index)
    }

    return (
        <li className='card'>
            <div className="cont-img">
                <img src={url} alt="background" />
            </div>
           <div className="buttons">
                <button onClick={addToReadingList}>View</button>
                <button onClick={addToReadingList}>Add to list</button>
           </div>
        </li>
    );
};

export default Book;