import { ImageResponse } from "next/og";

export const contentType = "image/png";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 16, height: 16 },
      id: "favicon-16x16",
    },
    {
      contentType: "image/png",
      size: { width: 32, height: 32 },
      id: "favicon-32x32",
    },
    {
      contentType: "image/png",
      size: { width: 192, height: 192 },
      id: "icon-192x192",
    },
    {
      contentType: "image/png",
      size: { width: 512, height: 512 },
      id: "icon-512x512",
    },
  ];
}

export default function Icon({
  id,
  mode,
}: {
  id: string;
  mode?: "dark" | "light";
}) {
  const [width, height] = id.split("x").map(Number);

  const isDark = mode === "dark";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isDark ? "#0a0a0a" : "white",
          color: isDark ? "white" : "#0a0a0a",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="currentColor"
          width="80%"
          height="80%"
        >
          <path d="M50 10 L90 90 L10 90 Z" />
        </svg>
      </div>
    ),
    { width, height },
  );
}
