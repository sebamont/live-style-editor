import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
    const [backgroundColor, setBackgroundColor] = useState("#121212");
    const [headerColor, setHeaderColor] = useState("#FFFFFF");
    const [headerSize, setHeaderSize] = useState("64");
    const [headerText, setHeaderText] = useState("Learning Styled Components");

    const changeBackgroundColor = (e) => {
        e.preventDefault();
        setBackgroundColor(e.target.value);
    }
    const changeHeaderColor = (e) => {
        e.preventDefault();
        setHeaderColor(e.target.value);
    }
    const changeHeaderSize = (e) => {
        e.preventDefault();
        setHeaderSize(e.target.value);
    }
    const changeHeaderText = (e) => {
        e.preventDefault();
        setHeaderText(e.target.value);
    }
    

    return(
        <ThemeContext.Provider 
        value={{
            backgroundColor,
            headerColor,
            headerSize,
            headerText,
            changeBackgroundColor,
            changeHeaderColor,
            changeHeaderSize,
            changeHeaderText
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
 }