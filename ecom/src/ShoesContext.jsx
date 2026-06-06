import { useState } from "react";
import { createContext } from "react";
import { shoesData } from "./data";

export const ShoesContext = createContext()

export const ShoesProvider = ({children}) => {
    const [data, setData] = useState(shoesData)
    const [showData, setShowData] = useState(data)

    return <ShoesContext.Provider value={{data, setData, showData, setShowData}}>
        {children}
    </ShoesContext.Provider>
}