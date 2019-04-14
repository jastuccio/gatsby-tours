import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

const GlobalStyles = createGlobalStyle`
${normalize()};
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 65px 0 0;
  font-family: -apple-system, BlinkMacSystemFont,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  width: 90%;
  margin: 0 auto;
}

ol, ul {
  list-style: none
}

`
export default GlobalStyles
