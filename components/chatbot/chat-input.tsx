import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ChatInputProps {
  onSend: (inputText: string) => void;
  isLoading: boolean;
}

export const ChatInput = ({ onSend, isLoading }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // 포커스 관리
  useEffect(() => {
    if (!isLoading && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [isLoading]);

  const handleSend = () => {
    if (inputValue.trim() === "") return;
    onSend(inputValue.trim());
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex border-t p-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="메시지를 입력하세요..."
        className="flex-1 rounded-l-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        disabled={isLoading}
        ref={inputRef}
      />
      <button
        onClick={handleSend}
        disabled={isLoading || !inputValue.trim()}
        className={`rounded-r-lg bg-blue-500 p-2 text-white ${
          isLoading || !inputValue.trim()
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-blue-600"
        }`}
      >
        <Send size={20} />
      </button>
    </div>
  );
};
