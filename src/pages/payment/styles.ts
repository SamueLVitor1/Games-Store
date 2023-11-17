import styled from "styled-components";

export const PaymentContainer = styled.div`
  padding:  4rem;
  display: grid;
  grid-template-columns: 1fr 44.8rem;
  column-gap: 3.2rem;


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
    padding: 4rem;
    background-color: ${props => props.theme["dark-20"]};
    border-radius: 6px 44px;
    
   }
  }
`