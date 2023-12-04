import styled from "styled-components";


export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  
 li{
  display: flex;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme["support-01"]};
  @media screen and (max-width: 450px) {
        text-align: center;
  }

  div{
    width: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    header{
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;

      

      p{
        text-transform: uppercase;
        font-weight: 600;
        color: #ccc;
        font-size: 1.8rem;
        
      }

      span{
        font-size: 1.7rem;
      }
    }
  }

  main{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    
    span{
      margin-top: -6px;
    }

    button{
      background: transparent;
      border: 0;
      cursor: pointer;

      &:hover{
        filter: brightness(0.8);
      }
      
      svg{
        color: ${props => props.theme["$support-02"]};
      }
    }
  }

 
  img{
    width: 100px;
    border-radius: 4px;
  }
 }

 footer{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  div{
    display: flex;
    gap: 4px;
  }
 }
`