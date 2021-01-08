import "styled-components";
import theme, { yellowTheme } from "styles/theme";

type YellowTheme = ReturnType<() => typeof yellowTheme>;

declare module "styled-components" {
  export interface DefaultTheme {
    yellow: YellowTheme;
  }
}
