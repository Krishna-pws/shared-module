export const THEME_STORAGE_KEY = "vite-ui-theme";

export const THEMES = {
    LIGHT: "light",
    DARK: "dark",
  } as const;
  
  export type Theme = (typeof THEMES)[keyof typeof THEMES];
  