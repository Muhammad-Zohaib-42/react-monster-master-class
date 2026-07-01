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
    const [minPrice, setMinPrice] = useState<number>(0)
    const [maxPrice, setMaxPrice] = useState<number>(Infinity)
    const [category, setCategory] = useState<string>("All")
    const [keyword, setKeyword] = useState<string>("All")

    return <StoreContext.Provider value={{keyword, setKeyword, category, setCategory, minPrice, setMinPrice, searchQuery, setSearchQuery, maxPrice, setMaxPrice, isFilterMenuOpen, setIsFilterMenuOpen, productsData, setProductsData, currentPage, setCurrentPage, itemsPerPage}}>
        {children}
    </StoreContext.Provider>
}