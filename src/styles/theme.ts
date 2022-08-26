type Theme = {
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
  BG: string;
  codeBG: string;
  link: string;
  body: string;
  headingXL: string;
  headingLG: string;
  headingMD: string;
  headingSM: string;
  success: string;
};
type ThemeProperty = keyof Theme;
const defaultTheme: Theme = {
  primary: "#121212",
  secondary: "#fff",
  accent: "#f39c12",
  muted: "#3d3737",
  BG: "#ddf",
  codeBG: "#121212",
  link: "#1f19fd",
  body: "1.6rem",
  headingXL: "3.6rem",
  headingLG: "2.8rem",
  headingMD: "2.4rem",
  headingSM: "2.0rem",
  success: "#5cb85c",
};

type ComponentProps = { theme: Theme };

const getFromTheme = (property: ThemeProperty) => (props: ComponentProps) => {
  if (!props.theme) {
    throw new Error(
      "To use getFromTheme component must be wrapped in a <ThemeProvider />"
    );
  }
  if (!props.theme[property]) {
    throw new Error(`Theme property: ${property} not found`);
  }
  return props.theme[property];
};

export { defaultTheme, getFromTheme };
