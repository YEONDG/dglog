import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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
    <div className="flex w-full border-t p-1">
      <div className="flex w-full">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="메시지를 입력하세요..."
          className="flex-1 rounded-l-lg border p-6 text-4xl placeholder:text-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          disabled={isLoading}
          ref={inputRef}
        />
        <Button
          onClick={handleSend}
          disabled={isLoading || !inputValue.trim()}
          className={`rounded-r-lg bg-blue-500 p-6 text-white ${
            isLoading || !inputValue.trim()
              ? "cursor-not-allowed opacity-80"
              : "hover:bg-blue-800"
          }`}
        >
          <Send size={20} />
        </Button>
      </div>
    </div>
  );
};
