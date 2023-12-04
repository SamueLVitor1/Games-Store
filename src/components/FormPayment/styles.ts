import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Container = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  background-color: ${props => props.theme["dark-20"]};
  padding: 2.4rem;
  border-radius: 6px 44px;

    @media screen and (max-width: 450px) {
    padding: 1rem;
  }

 

  h2 {
    display: flex;
    align-items: center;
    color: #60a5fa;
    margin-top: 3.5rem;
    font-weight: 400;
  }

  header {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;

    svg {
      color: ${props => props.theme["$support-02"]};
    }

    h4 {
      color: #60a5fa;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }

    p {
      filter: brightness(0.7);
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }
  }

  form {
    margin-top: 3.2rem;
    width: 100%;
    

    .divWithInput{
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    input:-webkit-autofill {
      background: ${props => props.theme["dark-10"]};
    }

    input {
      border-radius: 4px;
      border: 1px solid #475569;
      background: ${props => props.theme["dark-10"]};
      padding: 10px;

      &:valid {
        background: ${props => props.theme["dark-10"]};
        border-color: green;
      }
    }

    input:nth-child(4) {
      max-width: 100%; /* Full width on smaller screens */
      border: 1px solid #475569;
    }
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-basis: 1;
  gap: 1rem;
  margin-top: 1rem;
`

export const TransactionTypeButton = styled(RadioGroup.Item)`
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: #000;
  text-transform: uppercase;

  &[data-state='unchecked']:hover {
    background: #ccc;
  }

  &[data-state='checked'] {
    color: ${props => props.theme["dark-20"]};
    background: ${props => props.theme["$support-02"]};
  }
`

export const FotterFormContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column; 


  div {
    align-self: flex-start;
    display: flex;
    gap: 6px;
    flex-wrap: wrap; 
  }

  button {
    margin-top: 1rem; /* Add space between the div and button on smaller screens */
    display: flex;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    border-radius: 6px;
    border: 0;
    background-color: #15803d;
    cursor: pointer;
    margin: 1rem auto;
    width: 100%;

    @media screen and (max-width: 450px) {
      padding: 1rem 1rem;
 
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`
