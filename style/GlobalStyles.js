import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
 
 /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
 
a {
  text-decoration:none;
  color:inherit;
}
 
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing: auto;
      
  }

  //Stacking Context Next JS

  #__next {
      isolation:isolate;
      height:100%;
  }
  //Base Styling Variables Go Here

  html{
     height:100%;
     line-height:1.45;
      
      //Colors 
    --text-color:hsl(198,33%,6%);
    --red-color:hsl(0,64.6%,18.8%);
    --blue-color:hsl(203.1,79.5%,17.3%);
    --dark-grey:darkgrey;
    --light-grey:lightgrey;
    --white-color:#fff;
    --blueLightened-color:hsl(203.1, 79.5%,17.3%,.5);
    --redlightened-color:hsl(0,64.6%,18.8%,.8);

   //button radius
   --button-radius:5%; 
  //Photo Border Radius
  --photo-radius:8px;
    
  
  }

  body {
      height:100%;
      //set font (globalstyles workaround)
      font-family: 'Roboto', sans-serif;
      //Base Colors so whole document has access to variables
      color:var(--text-color);
      background-color:var(--white-color);
    
  
  }

  //Third Party Overrides

`;
export default GlobalStyles;
