// import { useState, useEffect } from 'react'

// function getStorageValue(key, defaultValue){
//      // getting stored value
//   const saved = localStorage.getItem(key);
//   const initial = JSON.parse(saved);
//   return initial || defaultValue;
// }

// export  function  useLocalStorage (key, defaultValue) {
    
//     const [value, setValue] = useState(() => {
//  return getStorageValue(key, defaultValue)
//     });
  
//     useEffect(() => {
//          // storing input name
//      localStorage.setItem(key, JSON.stringify(value));
//     }, [key, value]);
  
//     return [value, setValue];
//   };
  
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
     
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;