import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type MessageType = "question" | "answer"

export type Chat = {
    type: MessageType,
    message: string
}

type ChatContextType = {
    chatData: Chat[],
    setChatData: Dispatch<SetStateAction<Chat[]>>,
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    error: boolean,
    setError: Dispatch<SetStateAction<boolean>>
}

type ChatProviderProps = {
    children: ReactNode
}

export const ChatContext = createContext<ChatContextType | null>(null)

export const ChatProvider = ({children}: ChatProviderProps) => {
    const [chatData, setChatData] = useState<Chat[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    return <ChatContext.Provider value={{chatData, setChatData, loading, setLoading, error, setError}}>
        {children}
    </ChatContext.Provider>
}