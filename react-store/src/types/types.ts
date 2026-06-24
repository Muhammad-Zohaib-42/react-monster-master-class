import type { Dispatch, ReactNode, SetStateAction } from "react"

export type StoreProviderProps = {
    children: ReactNode
}

export type ContextValue = {
    isFilterMenuOpen: boolean,
    setIsFilterMenuOpen: Dispatch<SetStateAction<boolean>>
}