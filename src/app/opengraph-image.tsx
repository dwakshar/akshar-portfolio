import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "sans-serif",
        }}>
        {/* Hot pink gradient wash */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, #ff1f8f33 0%, transparent 70%)",
          }}
        />
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#ff1f8f",
          }}
        />
        {/* Star glyph */}
        <div
          style={{
            color: "#ff1f8f",
            fontSize: 36,
            marginBottom: 24,
            position: "relative",
          }}>
          ✦
        </div>
        {/* Name wordmark */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            position: "relative",
          }}>
          AKSHAR SHARMA
        </div>
        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "#ff1f8f",
            marginTop: 28,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            position: "relative",
          }}>
          Freelance Web Developer &amp; Designer
        </div>
        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#a1a1a1",
            letterSpacing: "0.08em",
          }}>
          aksharsharma.com
        </div>
      </div>
    ),
    { ...size }
  );
}
