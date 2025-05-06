// components/ChatBot.jsx
"use client"; // 클라이언트 컴포넌트로 표시

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
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
  const messagesEndRef = useRef(null);

  // 메시지 자동 스크롤
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // 챗봇 토글
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // // 메시지 전송
  // const handleSend = async () => {
  //   if (input.trim() === "") return;

  //   // 사용자 메시지 추가
  //   const newMessages = [...messages, { role: "user", content: input }];
  //   setMessages(newMessages);
  //   setInput("");
  //   setIsLoading(true);

  //   try {
  //     // API 라우트 호출
  //     const response = await fetch("/api/chat", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ messages: newMessages }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("API 응답 오류");
  //     }

  //     const data = await response.json();
  //     setMessages([
  //       ...newMessages,
  //       { role: "assistant", content: data.message },
  //     ]);
  //   } catch (error) {
  //     console.error("챗봇 오류:", error);
  //     setMessages([
  //       ...newMessages,
  //       {
  //         role: "assistant",
  //         content: "죄송합니다. 요청을 처리하는 중에 오류가 발생했습니다.",
  //       },
  //     ]);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // 데모용 간단한 챗봇 기능 (API 없이 사용 가능)
  const handleSendDemo = async () => {
    if (input.trim() === "") return;

    // 사용자 메시지 추가
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    // 데모용 지연
    setTimeout(() => {
      let botReply = "죄송합니다. 그 질문에 대한 답변을 드릴 수 없습니다.";

      // 간단한 키워드 기반 응답
      const userInput = input.toLowerCase();
      if (
        userInput.includes("안녕") ||
        userInput.includes("반가") ||
        userInput.includes("hello")
      ) {
        botReply =
          "안녕하세요! 연동근의 포트폴리오에 방문해 주셔서 감사합니다. 무엇을 도와드릴까요?";
      } else if (
        userInput.includes("프로젝트") ||
        userInput.includes("project")
      ) {
        botReply =
          "포트폴리오에는 다양한 프로젝트가 있습니다. 특정 프로젝트에 관심이 있으신가요? 아니면 프로젝트 목록을 보고 싶으신가요?";
      } else if (
        userInput.includes("기술") ||
        userInput.includes("스킬") ||
        userInput.includes("skill")
      ) {
        botReply =
          "연동근 개발자는 React, TypeScript, Next.js, JavaScript, HTML, CSS, TailwindCSS 등의 기술을 보유하고 있습니다.";
      } else if (
        userInput.includes("연락") ||
        userInput.includes("contact") ||
        userInput.includes("이메일")
      ) {
        botReply =
          "연락은 이메일(email@example.com)로 부탁드립니다. 소셜 미디어 링크는 페이지 하단에서 확인하실 수 있습니다.";
      } else if (
        userInput.includes("경험") ||
        userInput.includes("experience") ||
        userInput.includes("이력")
      ) {
        botReply =
          "연동근 개발자는 프론트엔드 개발 경험이 있으며, About Me 섹션에서 더 자세한 정보를 확인하실 수 있습니다.";
      }

      setMessages([...newMessages, { role: "assistant", content: botReply }]);
      setIsLoading(false);
    }, 1000);
  };

  // 엔터 키 처리
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // API 연동 시: handleSend();
      // 데모용: handleSendDemo();
      handleSendDemo();
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
            />
            <button
              onClick={handleSendDemo} // 또는 handleSend (API 연동 시)
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
