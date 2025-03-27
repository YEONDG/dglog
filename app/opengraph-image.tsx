import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "연동근 - 프론트엔드 개발자 포트폴리오";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "linear-gradient(to bottom, #4F46E5, #0EA5E9)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: 32,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: "bold", marginBottom: 16 }}>
          연동근
        </div>
        <div style={{ fontSize: 36, opacity: 0.9 }}>
          프론트엔드 개발자 포트폴리오
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 24,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "8px 16px",
              borderRadius: 8,
            }}
          >
            React
          </div>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "8px 16px",
              borderRadius: 8,
            }}
          >
            TypeScript
          </div>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "8px 16px",
              borderRadius: 8,
            }}
          >
            Next.js
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
