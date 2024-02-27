'use client'
import React, { useState } from "react";
import ClassContextComponent from "./classComponent";
import FunctionContextComponent from "./functionComponent";
export const ThemeContext = React.createContext(true);

export default function App(){
    const [darkTheme, setDarkTheme] = useState(true);
    
    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }
    return (<div>
        <ThemeContext.Provider value={darkTheme}>
            <button className="bg-slate-300 m-5 p-4" onClick={toggleTheme}>Toggle Theme</button>
            <FunctionContextComponent/>
            <ClassContextComponent/>
        </ThemeContext.Provider>
    </div>)
    
}