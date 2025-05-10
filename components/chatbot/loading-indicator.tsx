import React from "react";

export const LoadingIndicator = () => {
  return (
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
  );
};
