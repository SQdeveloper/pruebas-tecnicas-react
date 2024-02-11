import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';

const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        getBooks();
    },[])

    const getBooks = async ()=>{
        const books = await useFetch();        
        
        setBooks(books.library);
    }

    return books;
};

export default useBooks;