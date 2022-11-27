import { createMemo } from "solid-js"

type Icons = "menu" | "close" | "twitter" | "telegram" | "web_site"

interface IconProps {
  name: Icons
}

export function Icon(props: IconProps) {
  const icons: Record<Icons, string> = {
    menu: `<svg width="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h16q.425 0 .712.288q.288.287.288.712t-.288.712Q20.425 18 20 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z"/></svg>`,
    close: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/></svg>`,
    telegram: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z"/></svg>`,
    web_site: `<svg viewBox="0 0 20 20"><path fill="currentColor" d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0ZM1.11 9.68h2.51c.04.91.167 1.814.38 2.7H1.84a7.86 7.86 0 0 1-.73-2.7Zm8.57-5.4V1.19a4.13 4.13 0 0 1 2.22 2c.205.347.386.708.54 1.08l-2.76.01Zm3.22 1.35c.232.883.37 1.788.41 2.7H9.68v-2.7h3.22ZM8.32 1.19v3.09H5.56A8.53 8.53 0 0 1 6.1 3.2a4.13 4.13 0 0 1 2.22-2.01Zm0 4.44v2.7H4.7c.04-.912.178-1.817.41-2.7h3.21Zm-4.7 2.69H1.11a7.86 7.86 0 0 1 .73-2.7H4a14.13 14.13 0 0 0-.38 2.7ZM4.7 9.68h3.62v2.7H5.11a12.88 12.88 0 0 1-.41-2.7Zm3.63 4v3.09a4.13 4.13 0 0 1-2.22-2a8.53 8.53 0 0 1-.54-1.08l2.76-.01Zm1.35 3.09v-3.04h2.76a8.53 8.53 0 0 1-.54 1.08a4.13 4.13 0 0 1-2.22 2v-.04Zm0-4.44v-2.7h3.62a12.88 12.88 0 0 1-.41 2.7H9.68Zm4.71-2.7h2.51a7.86 7.86 0 0 1-.73 2.7H14c.21-.87.337-1.757.38-2.65l.01-.05Zm0-1.35A14.13 14.13 0 0 0 14 5.63h2.16c.403.85.65 1.764.73 2.7l-2.5-.05Zm1-4H13.6a8.92 8.92 0 0 0-1.39-2.52a8 8 0 0 1 3.14 2.52h.04Zm-9.6-2.52A8.92 8.92 0 0 0 4.4 4.28H2.65a8 8 0 0 1 3.14-2.52Zm-3.15 12H4.4a8.92 8.92 0 0 0 1.39 2.52a8 8 0 0 1-3.14-2.55l-.01.03Zm9.56 2.52a8.92 8.92 0 0 0 1.39-2.52h1.76a8 8 0 0 1-3.14 2.48l-.01.04Z"/></svg>`
  }

  const icon = Reflect.get(icons, props.name)

  if (icon === null || typeof icon === "undefined") {
    throw new TypeError(`Icon with name="${ props.name }" not found`)
  }

  return <div class="pointer-events-none" data-icon-name={props.name} innerHTML={icon}></div>
}
