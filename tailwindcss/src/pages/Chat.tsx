import ChatContainer from "@/components/ChatContainer"
import ChatForm from "@/components/ChatForm"

const Chat = () => {
  return (
    <main className="max-w-200 mx-auto py-4 flex flex-col gap-3 h-screen px-2">
        <ChatContainer />
        <ChatForm />
    </main>
  )
}

export default Chat