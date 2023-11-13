import styled from "styled-components";


export const ContainerHeader = styled.header`
  background: ${props => props.theme["dark-20"]};
  height: 8rem;
  padding:  4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  section{
    display: flex;
    align-items: center;
    gap: 3.9rem;
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
    img{
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      color: var(--white);
      cursor: pointer;
      transition: all 0.3s;
      position: relative;
      }
    }   
`