import { createMuiTheme } from "@material-ui/core/styles";
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
  typography: {
    fontFamily: "Poppins",
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
        },
      },
    },
  },
});

export default customizedTheme;
