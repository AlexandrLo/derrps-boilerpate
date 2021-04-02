import { createGlobalStyle } from 'styled-components';

import ManropeFont from './Manrope.ttf';

export default createGlobalStyle`
  * {
    font-family: "Manrope";
  }
  @font-face {
    font-family: Manrope;
    font-style: normal;
    font-variation-settings: 'wght' 400;
    src: url(${ManropeFont});
  }
`;
