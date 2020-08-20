import poppins500Eot from "./fonts/poppins-v12-latin-500.eot";
import poppins500Woff2 from "./fonts/poppins-v12-latin-500.woff2";
import poppins500Woff from "./fonts/poppins-v12-latin-500.woff";
import poppins500Ttf from "./fonts/poppins-v12-latin-500.ttf";
import poppins500Svg from "./fonts/poppins-v12-latin-500.svg";

import poppins700Eot from "./fonts/poppins-v12-latin-700.eot";
import poppins700Woff2 from "./fonts/poppins-v12-latin-700.woff2";
import poppins700Woff from "./fonts/poppins-v12-latin-700.woff";
import poppins700Ttf from "./fonts/poppins-v12-latin-700.ttf";
import poppins700Svg from "./fonts/poppins-v12-latin-700.svg";

const poppins500 = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  src: `url('${poppins500Eot}'),
        local('Poppins Medium'), local('Poppins-Medium'),
        url('${poppins500Eot}?#iefix') format('embedded-opentype'),
        url('${poppins500Woff2}') format('woff2'),
        url('${poppins500Woff}') format('woff'),
        url('${poppins500Ttf}') format('truetype'),
        url('${poppins500Svg}#Poppins') format('svg'); 
  `,
};

const poppins700 = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 700,
  src: `url('${poppins700Eot}'),
        local('Poppins Bold'), local('Poppins-Bold'),
        url('${poppins700Eot}?#iefix') format('embedded-opentype'),
        url('${poppins700Woff2}') format('woff2'),
        url('${poppins700Woff}') format('woff'),
        url('${poppins700Ttf}') format('truetype'),
        url('${poppins700Svg}#Poppins') format('svg'); 
  `,
};

export { poppins500, poppins700 };
