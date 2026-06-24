import { FaUserCircle } from "react-icons/fa";

type SendMessageProps = {
    message: string
}

const SendMessage = ({message}: SendMessageProps) => {
  return (
    <div className="flex justify-end py-3">
        <div className="flex items-start gap-1">
            <div className="bg-slate-200 py-1.5 px-4 rounded text-slate-800">{message}</div>
            <FaUserCircle className="text-green-700 shrink-0" size={35} />
        </div>
    </div>
  )
}

export default SendMessage