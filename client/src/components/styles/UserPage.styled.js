import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 70px 0;
  display: flex;
  flex-wrap: wrap;
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  
  .col-8 {
    width: 80%;
    padding: 0 10px;
  }
  .col-4 {
    width: 20%;
    padding: 0 10px;
  }
  
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  }
  
  p {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: bold;
    
    span {
      display: inline-block;
      padding-left: 5px;
      font-weight: normal;   
    }
  }
  
  .user {
    
    &_about {
      padding: 20px 0 0;
      margin-left: 50px;
    }
    
    &_links {
      margin-left: auto;
    }
    
    &_link {
      text-decoration: none;
      display: inline-block;
      color: white;
      background: #56cc4b;
      border: 2px solid #56cc4b;
      padding: 8px 12px;
      border-radius: 5px;
      margin-right: 10px;
      transition: .4s linear;
      
      &:hover {
        color: #56cc4b;
        background: white;
      }
    }
  }
`