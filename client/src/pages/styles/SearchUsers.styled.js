import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 50px 0 0;

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .search {

    &_block {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &_results {
      padding: 40px 0 0;
      text-align: center;
    }
  }

  input {
    margin-right: 20px;
    width: 50%;
    padding: 8px 10px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 5px;

    &:focus {
      outline: 1px solid #56cc4b;
    }
  }

  h3 {
    position: absolute;
    right: 0;
    left: 0;
    margin: 0 auto;
  }
`