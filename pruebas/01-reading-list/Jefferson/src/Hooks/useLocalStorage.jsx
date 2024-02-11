import React, { useState } from 'react';

const useLocalStorage = ({key, initalValue}) => {
    const [storedValue, setStoreValue] = useState(()=>{
        try {
            const item = localStorage.getItem(key);
    
            return item ? JSON.parse(item) : initialValue;
        }
        catch {
            return initalValue;
        }

    })

    const setValue = (value)=>{
        try {
            setStoreValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        }
        catch(err) {
            console.log(err)
        }
    }

    return {storedValue, setValue};
};

export default useLocalStorage;