import React, { useContext, useState } from 'react';
import useBooks from '../../Hooks/useBooks';
import Book from '../../components/Book/Book';
import useLocalStorage from '../../Hooks/useLocalStorage';
import ModalRepeatedBook from '../../components/ModalRepeatedBook/ModalRepeatedBook';
import './Home.css';
import { BookContext } from '../../components/Context/BookContextProvider';

const Home = () => {    
    const books = useContext(BookContext);
    const [readingList, setReadingList] = useLocalStorage('readingList', []);
    const [openModalRepeatedBook, setOpenModalRepeatedBook] = useState(false);


    //Función que agrega un libro a la lista (readingList)
    const updateReadingList = (index)=>{
        //Verifico si existe un elemento repetido
        const indexRepeatedElement = readingList.findIndex(book => book.book.ISBN == books[index].book.ISBN);    
        //Si el elemento ya esta guardado en la lista no se volvera a guardar
        if(indexRepeatedElement >= 0) { 
            setOpenModalRepeatedBook(true);
            return
        };        

        //guardo el nuevo libro en la lista de libros(readingList)
        const newReadingList = [...readingList];
        newReadingList.push(books[index]);
        setReadingList(newReadingList);
    }    

    //Función que quita un libro de la lista(readingList)
    const deleteReadingList = (index)=>{
        let newReadingList = [...readingList];
        newReadingList.splice(index, 1);        
        setReadingList(newReadingList);
    }

    return (
        <section className='home'>
            <section className="books">
                <ul>
                    {books.length > 0 &&
                        books.map((book,index)=>(                            
                            <Book key={index} code={book.book.ISBN} updateReadingList={()=>{updateReadingList(index)}} addButton={true} title={book.book.title} url={book.book.cover}/>                            
                    ))}
                </ul>
            </section>
            <section className="reading-list">
                <h2>Reading List</h2>
                <ul>
                    {readingList.length > 0 &&
                        readingList.map((book,index)=>(
                            <Book key={index} code={book.book.ISBN} deleteReadingList={()=>{deleteReadingList(index)}} addButton={false} title={book.book.title} url={book.book.cover}/>
                    ))}
                </ul>
            </section>
            {
                openModalRepeatedBook && <ModalRepeatedBook setOpenModalRepeatedBook={setOpenModalRepeatedBook}/>
            }
        </section>
    );
};

export default Home;