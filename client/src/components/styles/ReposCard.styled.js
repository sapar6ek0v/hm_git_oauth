import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 50px 0 ;
  display: flex;
  flex-wrap: wrap;
  
  .repos {
    
    &_readme {
      width: 80%;
      margin-right: 30px;
      border-radius: 8px;
      border: 2px solid white;
      padding: 20px;
      box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;   
    }
  }
  
  p {
    
    margin-bottom: 10px;
  }
`