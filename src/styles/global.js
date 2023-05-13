import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Haleway', sans-serif;
}

html, body, #root{
   min-height: 100%;
 }

 body{
   font-size: 14px;
   -webkit-font-smoothing: antialiased !important;
 }

 button{
   cursor: pointer;
 }

`;
