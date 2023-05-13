import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Haleway', sans-serif;
  outline: 0;
  color: #fff;

}

html, body, #root{
   min-height: 100%;
  height: 100%;
 }

body, html{
    background: #1c1c1c;
}

 body{
   font-size: 14px;
   -webkit-font-smoothing: antialiased !important;
   text-align: center;
   padding-top:3rem;
   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
      font-size: 2rem;  
      margin-bottom: 1rem;
    }
 }

 img{
  max-width: 100%;
 }


`;
