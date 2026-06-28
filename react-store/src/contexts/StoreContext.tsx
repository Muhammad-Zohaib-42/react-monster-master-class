import { createContext, useState } from "react";
import type { ContextValue, ProductObjType, StoreProviderProps } from "../types/types";

export const StoreContext = createContext<ContextValue | null>(null)

export const StoreProvider = ({children}: StoreProviderProps) => {
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false)
    const [productsData, setProductsData] = useState<ProductObjType[]>(() => {
        const productsDataJson = localStorage.getItem("productsData")
        if (productsDataJson) {
            const data = JSON.parse(productsDataJson)
            return data.slice(0, 8)
        } else {
            return []
        }
    })
    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage: number = 8;
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [minPrice, setMinPrice] = useState<string>("")
    const [maxPrice, setMaxPrice] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [keyword, setKeyword] = useState<string>("")

    return <StoreContext.Provider value={{isFilterMenuOpen, setIsFilterMenuOpen, productsData, setProductsData, currentPage, setCurrentPage, itemsPerPage}}>
        {children}
    </StoreContext.Provider>
}