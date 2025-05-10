"use client";

import {
  useState,
  useRef,
  useEffect,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { instructions } from "@/data/instructions";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "안녕하세요! 연동근의 포트폴리오에 방문해 주셔서 감사합니다. 무엇을 도와드릴까요?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 메시지 자동 스크롤
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (!isLoading && isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [isLoading, isOpen]);

  // 챗봇 토글
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // 메시지 전송
  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Gemini API 초기화
      const genAI = new GoogleGenAI({
        apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
      });

      // 대화 기록과 현재 메시지 통합
      let messageHistory = "";
      if (messages.length > 0) {
        // 최대 5개의 최근 메시지만 포함
        const recentMessages = messages.slice(-5);
        messageHistory = recentMessages
          .map(
            (msg) =>
              `${msg.role === "user" ? "사용자" : "어시스턴트"}: ${msg.content}`,
          )
          .join("\n\n");

        messageHistory = `대화 기록:\n${messageHistory}\n\n`;
      }

      // 최종 프롬프트 구성
      const finalPrompt = `${instructions}\n\n${messageHistory} \n\n사용자: ${input.trim()}\n\n어시스턴트:`;

      const modelName = "gemini-2.5-flash-preview-04-17";

      console.log(messageHistory);
      // API 호출
      const response = await genAI.models.generateContent({
        model: modelName,
        contents: finalPrompt,
        config: {
          systemInstruction: instructions,
        },
      });

      // 응답 추출
      let responseText = "";
      if (response && response.text) {
        responseText = response.text;
      } else if (
        response &&
        response.candidates &&
        response.candidates.length > 0
      ) {
        responseText =
          response.candidates[0]?.content?.parts?.[0]?.text ||
          "응답 처리 중 오류가 발생했습니다.";
      } else {
        console.log("응답 형식:", JSON.stringify(response));
        responseText = "응답 처리 중 오류가 발생했습니다.";
      }

      // 사용자 메시지와 AI 응답 추가
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: responseText },
      ]);
    } catch (error) {
      console.error("챗봇 오류:", error);
      setMessages((prev) => [
        ...prev,
        { role: "user", content: input },
        {
          role: "assistant",
          content: "죄송합니다. 요청을 처리하는 중에 오류가 발생했습니다.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // 엔터 키 처리
  const handleKeyPress = (
    e: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
  ) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* 챗봇 아이콘 */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="rounded-full bg-blue-500 p-4 text-white shadow-lg hover:bg-blue-600"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* 챗봇 창 */}
      {isOpen && (
        <div
          className="flex w-80 flex-col rounded-lg bg-white shadow-xl sm:w-96"
          style={{ height: "500px" }}
        >
          {/* 헤더 */}
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-medium">포트폴리오 어시스턴트</h3>
            <button
              onClick={toggleChat}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>

          {/* 메시지 영역 */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}
              >
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
            ))}
            {isLoading && (
              <div className="mb-4 text-left">
                <div className="inline-block rounded-lg bg-gray-200 p-3 text-gray-800">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500"></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* 입력 영역 */}
          <div className="flex border-t p-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="메시지를 입력하세요..."
              className="flex-1 rounded-l-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              disabled={isLoading}
              ref={inputRef}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className={`rounded-r-lg bg-blue-500 p-2 text-white ${
                isLoading || !input.trim()
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-blue-600"
              }`}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
