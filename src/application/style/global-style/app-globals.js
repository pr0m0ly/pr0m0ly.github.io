import { css } from 'styled-components';
import BackgroundPage from '../../assets/images/trianglify-lowres.png';

export const appGlobals = css`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-weight: 400;
  }

  body {
    margin: 0 !important;
    padding: 0 !important;
    font-family: Inter, sans-serif;
    // background-image: url(${BackgroundPage});
    background-size: 100%;
    background-repeat: no-repeat;
    background-color: rgb(236, 240, 245);
  }

  h1 {
    font-family: Red Hat Display, sans-serif;
  }
`;
