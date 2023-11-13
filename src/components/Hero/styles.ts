import styled from "styled-components";

export const HeroContainer = styled.div`
  margin: 0 auto;
  margin-top: 8rem;
  width: 121rem;

  section{
    background: ${props => props.theme["dark-20"]};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    border-radius: 4px;

    button{
      border: 0;
      background: transparent;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 1.4rem;
      transition: all 0.1s;

      &:hover{
        color: ${props => props.theme["brand-color"]};
        transform: scale(1.04);
      }
    }

    .select{
      text-transform: uppercase;
      cursor: pointer;
      font-size: 1.4rem;
      border: 0;
      font-family: 'Inter', sans-serif;
      background: transparent;
      color: #fff;
      
      option{
        color: #000;
        cursor: pointer;
      }
    }
  }

  section + section {
    margin-top: 4rem;
  }

`

