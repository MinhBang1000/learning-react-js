import { createContext,useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light')
    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    const value = {
        theme,
        handleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )

}

export { ThemeContext, ThemeProvider }