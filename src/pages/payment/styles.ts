import styled from "styled-components";

export const PaymentContainer = styled.div`
  padding:  2rem;
  display: flex;
  gap: 2rem;
  column-gap: 3.2rem;

  
    @media screen and (max-width: 450px) {
    padding: 1rem;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 44.8rem; 
    column-gap: 3.2rem;
  }

  section:first-child{
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 450px) {
    width: 100%;
    max-width: 40rem;
    }

    @media screen and (max-width: 400px) {
    width: 100%;
    max-width: 35rem;
    }
  }

  section:last-child{
   display: flex;
   flex-direction: column;
   gap: 15px;

   h2{
    font-size: 1.8rem;
    font-weight: 700;
    color: ${props => props.theme["$support-05"]};
   }

   main{
    padding: 2.8rem;
    background-color: ${props => props.theme["dark-20"]};
    border-radius: 6px 44px;
    
   }
  }
`