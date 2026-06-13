import { createContext, useState, type ReactNode } from "react";

interface CounterContextProps {
    count: number,
    increment: () => void,
    decrement: () => void
}

export const CounterContext = createContext<CounterContextProps>({
    count: 0,
    increment: () => {},
    decrement: () => {}
})

export const CounterProvider = ({children}: {children: ReactNode}) => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return <CounterContext.Provider value={{count, increment, decrement}}>
        {children}
    </CounterContext.Provider>
}