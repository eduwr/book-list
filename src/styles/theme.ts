export interface ThemeInterface {
  colorBg: string;
  textColor: string;
  buyButtonColor: string;
  likeButtonColor: string;
  buttonDisabled: string;
  boxShadowBlack: string;
  boxShadowBlue: string;
}

export default class Theme {
  private static instance: Theme;

  private yellowTheme: ThemeInterface = {
    colorBg: "#FFE207",
    textColor: "#594E02",
    buyButtonColor: "#549AE6",
    likeButtonColor: "#E05568",
    buttonDisabled: "grey",
    boxShadowBlack: "10px 10px 59px -1px rgba(0,0,0,0.4)",
    boxShadowBlue: "10px 10px 59px -1px rgba(84,154,230,0.4)",
  };

  private darkTheme: ThemeInterface = {
    colorBg: "#FFE207",
    textColor: "#594E02",
    buyButtonColor: "#549AE6",
    likeButtonColor: "#E05568",
    buttonDisabled: "grey",
    boxShadowBlack: "10px 10px 59px -1px rgba(0,0,0,0.4)",
    boxShadowBlue: "10px 10px 59px -1px rgba(84,154,230,0.4)",
  };

  constructor() {
    if (Theme.instance) {
      throw new Error(
        "Error: Instantiation failed: Use Theme.getInstance() instead of new."
      );
    }
    Theme.instance = this;
  }

  public static getInstance(): Theme {
    if (!Theme.instance) {
      Theme.instance = new Theme();
    }

    return Theme.instance;
  }

  public getTheme(key: "yellow" | "dark"): ThemeInterface {
    return key === "dark" ? this.darkTheme : this.yellowTheme;
  }
}
