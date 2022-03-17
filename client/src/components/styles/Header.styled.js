import styled from "styled-components"

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background: #252825;
  padding: 25px 0;
  
  .header {
    background: #252825;
  }
  
  button {
    padding: 8px 12px;
    color: white;
    background: #56cc4b ;
    border: 2px solid #56cc4b ;
    border-radius: 5px ;
    margin-right: 20px;
    transition: .4s linear;
    font-size: 14px;
    text-transform: uppercase;
    &:hover {
      color: #56cc4b;
      background: white ;
      border: 2px solid  white;
    }
  }
`