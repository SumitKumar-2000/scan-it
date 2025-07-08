"use client"
import React from "react"

const AppContext = React.createContext();

export default function AppProvider({children}){

    const [isDark, setIsDark] = React.useState(false);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    }

    React.useEffect(()=>{
        localStorage.setItem("isDark", isDark);
        if(isDark){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        } 
    },[isDark])

    React.useEffect(()=>{
        setIsDark(localStorage.getItem("isDark") === "true")
    },[])

    return (
        <AppContext.Provider
            value={{
                isDark,
                toggleTheme,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () =>{
    return React.useContext(AppContext);
}