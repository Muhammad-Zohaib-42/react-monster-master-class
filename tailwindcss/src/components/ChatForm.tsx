import { ChatContext, type Chat } from "@/contexts/ChatContext"
import { generateContent } from "@/hooks/useGenAI"
import { useContext, useState, type FormEvent } from "react"

const ChatForm = () => {
    const [question, setQuestion] = useState("")

    const {setChatData, setLoading, setError} = useContext(ChatContext)!

    async function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!question) return

        const chat: Chat = {
            type: "question",
            message: question
        }

        setChatData(prev => ([...prev, chat]))

        setQuestion("")

        try {
            setLoading(true)
            setError(false)
            const answer = await generateContent(question)

            if (answer) {
                const chat: Chat = {
                    type: "answer",
                    message: answer as string
                }
    
                setChatData(prev => ([...prev, chat]))
            } else {
                setLoading(false)
                setError(true)
            }
            
        } catch (error) {
            setError(true)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

  return (
    <form onSubmit={submitHandler} className="flex gap-2 py-2">
        <input value={question} onChange={(e) => setQuestion(e.target.value)} className="grow py-1.5 px-3 rounded-md border border-slate-400 focus-within:border-green-700 transition outline-none" type="text" placeholder="Send a message to Chatbot" />
        <button className="bg-green-700 text-white px-4 py-1.5 rounded-md cursor-pointer transition hover:bg-green-800">Send</button>
    </form>
  )
}

export default ChatForm