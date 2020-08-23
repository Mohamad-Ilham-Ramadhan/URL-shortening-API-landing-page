import { createMuiTheme, lighten } from "@material-ui/core/styles";
import { poppins500, poppins700 } from "./fonts";

// <== Colors ==>
// ### Primary

const cyan = "hsl(180, 66%, 49%)";
const darkViolet = "hsl(257, 27%, 26%)";

// ### Secondary

const red = "hsl(0, 87%, 67%)";

// ### Neutral

const gray = "hsl(0, 0%, 75%)";
const grayishViolet = "hsl(257, 7%, 63%)";
const veryDarkBlue = "hsl(255, 11%, 22%)";
const veryDarkViolet = "hsl(260, 8%, 14%)";

const theme = createMuiTheme({});

const customizedTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      letterSpacing: "-0.1rem",
      fontSize: "2.65rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.15rem",
      color: grayishViolet,
    },
    h2: {
      fontSize: "1.65rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.35rem",
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: "1.015rem",
      color: grayishViolet,
      lineHeight: 1.7,
    },
    body1: {
      fontSize: ".935rem",
      lineHeight: 1.7,
      color: grayishViolet,
    },
  },
  palette: {
    primary: {
      main: cyan,
      darkViolet: darkViolet,
    },
    secondary: {
      main: red,
    },
    neutral: {
      gray: gray,
      grayishViolet: grayishViolet,
      veryDarkBlue: veryDarkBlue,
      veryDarkViolet: veryDarkViolet,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [poppins500, poppins700],
        body: {
          fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
          backgroundColor: "white",
        },
        ".MuiButton-root.pill": {
          borderRadius: 150,
        },
      },
    },
    MuiContainer: {
      root: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
    },
    MuiTypography: {
      root: {
        color: veryDarkViolet,
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: 6,
      },
      containedPrimary: {
        color: "white",
        fontWeight: 700,
        "&:hover": {
          backgroundColor: lighten(cyan, 0.5),
        },
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: theme.spacing(1),
      },
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: "white",
      },
    },
    MuiDivider: {
      root: {
        width: "100%",
      },
    },
  },
});

export default customizedTheme;
