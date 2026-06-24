import { TbMessageChatbotFilled } from "react-icons/tb";
import ReactMarkdown from "react-markdown";

type ReceiveMessageProps = {
  message: string;
};

const ReceiveMessage = ({ message }: ReceiveMessageProps) => {
  return (
    <div className="py-3">
      <div className="flex items-start gap-1">
        <div className="shrink-0 h-9 w-9 rounded-full flex items-center justify-center bg-green-700">
          <TbMessageChatbotFilled className="text-white" size={23} />
        </div>
        <div className="bg-slate-200 py-1.5 px-4 rounded text-slate-800 prose dark:prose-invert max-w-none">
          <ReactMarkdown>{message}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ReceiveMessage;
