import { ImageResponse } from "next/og";

export const contentType = "image/png";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 16, height: 16 },
      id: "16",
    },
    {
      contentType: "image/png",
      size: { width: 32, height: 32 },
      id: "32",
    },
    {
      contentType: "image/png",
      size: { width: 64, height: 64 },
      id: "64",
    },
  ];
}

export default function Icon({ id }: { id: string }) {
  const size = parseInt(id, 10);

  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1108"
          fill="none"
          width={size}
          height={size}
        >
          <path
            fill="white"
            d="M463.969 284.901s-43.485-53.982-82.471-71.975c0 0 91.468-160.444 284.9-212.926 0 0 65.977 50.982 77.973 151.447 0 0 50.982 13.495 50.982 47.983l-61.478 29.99s-116.959-22.492-131.954-17.994c-14.995 4.499-4.499 58.48 8.997 67.477 0 0-4.499 17.993-13.496 25.491 0 0 29.99 61.478 107.963 28.49 0 0-43.485 92.967 65.977 116.959 0 0 62.978-17.994 71.975-101.964 0 0-73.475 5.998-80.972 16.494 0 0-16.494-11.996 43.485-22.492 0 0 8.997-8.997-23.992-37.487l22.492-1.5 5.998-62.978s137.952 31.489 172.44 137.952c0 0 76.472 220.423-92.968 697.252 0 0-112.46 22.5-187.434-4.49 0 0-4.499-68.98 5.998-77.976l49.482-28.49S660.4 793.223 690.39 761.734c0 0 28.49-26.99 35.987-43.485 0 0-41.985 20.993-58.479 20.993 0 0-19.493-77.973-56.98-133.453 0 0 89.968 374.869 52.481 478.331 0 0-251.912 71.98-238.416-34.49 0 0-1.5-38.98 37.486-71.971 0 0-68.975-77.973-71.974-88.469 0 0-56.981-31.489-14.995-160.444 41.985-128.955 1.499-2.999 1.499-2.999s-286.4-262.409-101.964-469.336c0 0 73.474-86.97 188.934 28.49Z"
          />
          <path
            fill="white"
            d="M622.913 244.415h142.45l26.991-11.996s-11.996 41.985-17.994 44.984c0 0-32.989 1.5-50.982-10.496 0 0-34.488 26.991-44.985 28.49 0 0-50.982-22.492-55.48-50.982ZM736.874 286.4l8.996 20.993s7.498 11.996-8.996 11.996h-11.996v-26.991s5.998-5.998 8.997-5.998m10.496 0 13.495 23.992 17.994-2.999s-13.495-19.494-31.489-20.993ZM213.556 532.314s67.476 137.952 134.953 196.432l-10.497 86.97s-34.488-8.997-37.487-5.998c-2.999 2.999-95.966 185.935-94.467 196.432 0 0 31.489 13.49 31.489 23.99l2.999 31.49s-166.442 16.49-214.425 0c0 0-50.982-56.98-10.496-179.937 0 0 71.975-80.972 73.474-107.963 0 0 13.495-46.484-8.997-103.464-1.5-2.999-35.987-149.947 133.454-137.952Z"
          />
          <path
            fill="white"
            d="M341.012 838.208s-1.5 50.982 91.468 133.453c0 0-41.985 58.479-32.989 76.469l-41.985-5.99s-28.49-89.972-28.49-98.969c0 0 20.993-19.493 23.992-29.989 0 0-74.974-44.985-46.484-74.974 7.497-4.499 34.488-4.499 34.488 0Z"
          />
        </svg>
      </div>
    ),
    { width: size, height: size },
  );
}
