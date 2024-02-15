import React from 'react';
import './Book.css';

const Book = ({url,deleteReadingList , updateReadingList, addButton}) => {        

    return (
        <li className='card'>
            <div className="cont-img">
                <img src={url} alt="background" />
            </div>
           <div className="buttons">
                <button>View</button>
                {
                    addButton ? 
                    <button onClick={updateReadingList}>Add to list</button>
                    :
                    <button onClick={deleteReadingList}>Delete</button>
                }
           </div>
        </li>
    );
};

export default Book;