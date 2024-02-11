import React from 'react';

const useFetch = () => {
    return fetch('http://localhost:5173/src/Data/books.json').
    then(response => {
        if(!response.ok) throw new Error("la respuesta es incorrecta");
        
        return response.json();
    }).
    then(data => {return data})
};

export default useFetch;