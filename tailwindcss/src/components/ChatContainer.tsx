import { useContext } from "react";
import ReceiveMessage from "./ReceiveMessage";
import SendMessage from "./SendMessage";
import { ChatContext, type Chat } from "@/contexts/ChatContext";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const ChatContainer = () => {
  const { chatData, loading, error } = useContext(ChatContext)!;

  return (
    <section className="grow overflow-y-auto scrollbar-none">
      {chatData.length < 1 ? (
        <div className="flex h-100 shrink-0 items-center justify-center rounded-md">
          <div className="mx-auto flex max-w-105 flex-col items-center justify-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <MessageSquare className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">No messages yet</h3>
            <p className="mb-4 mt-2 text-sm text-muted-foreground">
              Start a new conversation to get assistance.
            </p>
            <Button variant="secondary">Start Chat</Button>
          </div>
        </div>
      ) : (
        chatData.map(({ type, message }: Chat) => {
          if (type == "question") {
            return <SendMessage key={Date.now() + Math.random()} message={message} />;
          } else {
            return <ReceiveMessage key={Date.now() + Math.random()} message={message} />;
          }
        })
      )}

      {loading ? <div className="flex items-center gap-1"><div className="h-3 w-3 rounded-full border border-slate-700 border-t-green-600 border-b-red-600 border-l-blue-600 animate-spin"></div> <span className="text-slate-600">generating response...</span></div> : ""}

      {error ? <p className="text-red-500">Check Your Internet Connection!</p> : ""}
    </section>
  );
};

export default ChatContainer;
