import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("dark-mode");
      
    useEffect (() => {
        if (darkMode) {
            document.querySelector("body").classList.add("dark-mode");
          } else {
            document.querySelector("body").classList.remove("dark-mode");
          }
        return [darkMode, setDarkMode];
    }, [darkMode]);
    
    return [darkMode,setDarkMode]
  };