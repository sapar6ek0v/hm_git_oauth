import styled, {createGlobalStyle} from "styled-components"


export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  
  .main {
    flex: 1;
  }
`


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background: #c4cbbd;
  }
`