import "styled-components";
import theme, { ThemeInterface } from "styles/theme";

// Declare theme based on yellowTheme
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeInterface {}
}
