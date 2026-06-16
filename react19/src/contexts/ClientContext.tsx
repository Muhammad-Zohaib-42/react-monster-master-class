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

type ClientContextVaue = {
    clientsData: Client[],
    setClientsData: Dispatch<SetStateAction<Client[]>>
}

export const ClientContext = createContext<ClientContextVaue | null>(null)

export const ClientProvider = ({children}: ChildrenProps) => {
    const [clientsData, setClientsData] = useState<Client[]>(data)

    return <ClientContext.Provider value={{clientsData, setClientsData}}>
        {children}
    </ClientContext.Provider>
}