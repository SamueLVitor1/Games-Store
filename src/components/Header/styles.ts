import styled from "styled-components";

interface ContainerHeader {
  cartitemcount?: number
}

export const ContainerHeader = styled.header<ContainerHeader>`
  background: ${props => props.theme["dark-20"]};
  height: 8rem;
  padding:  4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  section{
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  section:first-child{
    p{
      border-top: 2px solid transparent;
      border-bottom: 2px solid transparent;
      padding-bottom: 0.2rem;
      font-size: 1.7rem;
      text-transform: uppercase;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease-in;

      &:hover{
        color: ${props => props.theme["brand-color"]};
        border-bottom: 2px solid ${props => props.theme["brand-color"]};
        filter: brightness(0.7);
      }
    }
  }

  section:last-child{
    .button-carrinho{
      width: 40px;
      height: 40px;
      border-radius: 999px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 148, 255, 0.24);
      cursor: pointer;
      transition: all 0.3s;

      ${({ cartitemcount }) => cartitemcount !== 0 && `
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: -0.1rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #0094FF;
    transition: all 0.3s;
  }

  &:hover::before {
    width: 0;
    height: 0;
  }
`}
    }

      
    }


    .iconProfile{
      width: 40px;
      height: 40px;
      position: relative;
      transition: all 0.3s;
      img{
        width: 100%;
        border-radius: 50%;
      }
    }   
`