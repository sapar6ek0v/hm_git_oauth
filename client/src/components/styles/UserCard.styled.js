import styled from  'styled-components'

export const Wrapper = styled.div`
  width: 33.33%;
  padding: 10px;
  margin-bottom: 15px;
  
  .card {
    text-decoration: none;
    
    &_titles {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
    }
  }
  
  img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 8px;
  }
  
  h4 {
    color: black;
    transition: .4s linear;
    &:hover {
      text-decoration: underline #1f1e1d;
    }
  }
`