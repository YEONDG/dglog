import { TChatMessage } from "@/types/chat-message";

interface ChatMessageProps {
  msg: TChatMessage;
}

export const ChatMessage = ({ msg }: ChatMessageProps) => {
  return (
    <div className={`mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}>
      <div
        className={`inline-block rounded-lg p-3 ${
          msg.role === "user"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {msg.content}
      </div>
    </div>
  );
};
