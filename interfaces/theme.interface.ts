import { THEMES } from "../constants/theme";

export type Theme = (typeof THEMES)[keyof typeof THEMES];

export interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
