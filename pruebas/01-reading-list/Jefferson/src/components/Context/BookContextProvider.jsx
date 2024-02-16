import React, { createContext } from 'react';
import useBooks from '../../Hooks/useBooks';

export const BookContext = createContext(null);

const BookContextProvider = (props)=>{
    const books = useBooks();
    const contextValue = books;

    return(
        <BookContext.Provider value={contextValue} >
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;