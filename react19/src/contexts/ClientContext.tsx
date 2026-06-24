import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import { data } from "../utils/data";

export type Client = {
    id: number,
    image: string,
    name: string,
    country: string,
    email: string,
    projectName: string,
    progress: number,
    status: string,
    date: string
}

type ChildrenProps = {
    children: ReactNode
}

type FilterQueryData = {
    name: string,
    query: string
}

type ClientContextVaue = {
    clientsData: Client[],
    setClientsData: Dispatch<SetStateAction<Client[]>>,
    filterQueryData: FilterQueryData | string,
    setFilterQueryData: Dispatch<SetStateAction<FilterQueryData>>
}

export const ClientContext = createContext<ClientContextVaue | null>(null)

export const ClientProvider = ({children}: ChildrenProps) => {
    const [clientsData, setClientsData] = useState<Client[]>(data)
    const [filterQueryData, setFilterQueryData] = useState<FilterQueryData>({
        name: "name",
        query: ""
    })

    return <ClientContext.Provider value={{clientsData, setClientsData, filterQueryData, setFilterQueryData}}>
        {children}
    </ClientContext.Provider>
}