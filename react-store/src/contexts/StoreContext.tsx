import { createContext, useState } from "react";
import type { ContextValue, StoreProviderProps } from "../types/types";

export const StoreContext = createContext<ContextValue | null>(null)

export const StoreProvider = ({children}: StoreProviderProps) => {
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false)

    return <StoreContext.Provider value={{isFilterMenuOpen, setIsFilterMenuOpen}}>
        {children}
    </StoreContext.Provider>
}