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

  div{
    width: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    

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
 
    


  }

  img{
    width: 100px;
    border-radius: 4px;
  }
 }
`