import { createContext, useState } from "react";
import type { ContextValue, ProductObjType, StoreProviderProps } from "../types/types";

export const StoreContext = createContext<ContextValue | null>(null)

export const StoreProvider = ({children}: StoreProviderProps) => {
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false)
    const [productsData, setProductsData] = useState<ProductObjType[]>(() => {
        const productsDataJson = localStorage.getItem("productsData")
        if (productsDataJson) {
            const data = JSON.parse(productsDataJson)
            return data
        } else {
            return []
        }
    })

    return <StoreContext.Provider value={{isFilterMenuOpen, setIsFilterMenuOpen, productsData, setProductsData}}>
        {children}
    </StoreContext.Provider>
}