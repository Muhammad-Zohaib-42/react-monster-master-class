import { createContext, useState, type ReactNode } from "react";

type Theme = 'light' | 'dark'

interface ThemeValue {
    theme: Theme,
    toggleTheme: () => void
}

type Children = {
    children: ReactNode
}

export const ThemeContext = createContext<ThemeValue>({
    theme: 'light',
    toggleTheme: () => {}
})

export const ThemeProvider = ({children}: Children) => {
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => setTheme(prev => prev == 'light' ? 'dark' : "light")

    return <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}