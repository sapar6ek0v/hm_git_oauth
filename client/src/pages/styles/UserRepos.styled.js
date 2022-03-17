import styled from 'styled-components'


export const Wrapper = styled.div`
  padding: 50px 0;
  
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  
  .col-6 {
    width: 50%;
    padding: 0 10px;
    
  }
  
  .repos {
    &_link {
      text-decoration: none;
      display: inline-block;
      padding-right: 20px;
      background: #eef6e5;
      transition: .4s linear;
      &:hover {
        text-decoration: underline #6173f6;
      }
    }
    &_card {
      border-radius: 5px;
      background: #eef6e5;
      margin-bottom: 10px;
      padding: 10px;
    }
  }
 
`