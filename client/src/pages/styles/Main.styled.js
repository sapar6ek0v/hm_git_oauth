import styled from 'styled-components'

export const StyledMain = styled.div`

  .main_button {
    display: flex;
    justify-content: center;
    padding: 170px 0 0;
  }

  .auth-button {
    text-decoration: none;
    background: #252825;
    border: 2px solid #252825;
    color: white;
    font-size: 18px;
    padding: 13px 15px;
    transition: .4s linear;
    

    &:hover {
      background: white;
      color: #252825;
    }
  }
`