import React, { useState } from 'react';
import useBooks from '../../Hooks/useBooks';
import Book from '../../components/Book/Book';
import './Home.css';

const Home = () => {
    const books = useBooks();
    const [readingList, setReadingList] = useState([]);    

    const updateReadingList = (index)=>{
        
    }

    return (
        <section className='home'>
            <section className="books">
                <ul>
                    {books.length > 0 &&
                        books.map((book,index)=>(                            
                            <Book key={index} index={index} title={book.book.title} url={book.book.cover}/>                            
                    ))}
                </ul>
            </section>
            <section className="reading-list">
                <h2>Reading List</h2>
                <ul>
                    {readingList.length > 0 &&
                        readingList.map((book,index)=>(
                            <Book key={index} title={book.book.title} url={book.book.cover}/>
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default Home;