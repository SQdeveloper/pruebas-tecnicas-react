import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from '../../components/Context/BookContextProvider';
import './PageBook.css';

const PageBook = () => {
    const {id} = useParams();
    const books = useContext(BookContext);
    const [selectedBook, setSelectedBook] = useState(()=>{
        return books.find(book=>book.book.ISBN == id)
    });    

    return (
        <div className='pageBook'>
            <img className='pageBook-img' src={selectedBook.book.cover} alt="book" />
            <ul className="pageBook-info">
               <li>
                    <h3>Title:</h3>
                    {selectedBook.book.title}
                </li>
               <li>
                    <h3>Pages:</h3>
                    {selectedBook.book.pages}
                </li>
               <li>
                    <h3>Synopsis:</h3>
                    {selectedBook.book.synopsis}
                </li>
               <li>
                    <h3>Year:</h3>
                    {selectedBook.book.year}
                </li>
               <li>
                    <h3>Author:</h3>
                    {selectedBook.book.author.
                name}</li>                
            </ul>
        </div>
    );
};

export default PageBook;