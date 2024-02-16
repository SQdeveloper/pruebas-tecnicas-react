import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css';

const Book = ({url, deleteReadingList, code, updateReadingList, addButton}) => {        
    return (
        <li className='card'>
            <Link to={`/book/${code}`}>
                <div className="cont-img">
                    <img src={url} alt="background" />
                </div>
            </Link>
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