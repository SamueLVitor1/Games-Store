import styled from "styled-components";


export const DeliveyContainer = styled.div`
  margin: 8rem 10rem;
  display: flex;
  gap: 10rem;
  

  section{
    display: flex;
    flex-direction: column;
    gap: 4rem;

    header{

      h2{
        font-size: 3.2rem;
        font-weight: 800;
        color: #C47F17;
        margin-bottom: 4px;
      }

      p{
       filter: brightness(0.9);
       font-size: 1.8rem;
      }
    }
  }
`