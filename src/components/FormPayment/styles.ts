import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';


export const Container = styled.div`
  margin-top: 1.5rem;
  background-color: ${props => props.theme["dark-20"]};
  padding: 2.4rem;
  border-radius: 6px 44px;

  h2{
    display: flex;
    align-items: center;
    color: #60a5fa;
    margin-top: 3.5rem;
    font-weight: 400;
  }

  header{
    display: flex;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    
    svg{
        color: ${props => props.theme["$support-02"]};
    }

    h4{
      color: #60a5fa;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }

    p{
      filter: brightness(0.7);
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }
  
  }

  form{
    margin-top: 3.2rem;
  width: 100%;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  input{
    flex: 1;
  }

  input:nth-child(1){
    min-width: 20rem;
  }

  input:nth-child(2){
    min-width: 100%;
  }

  input:nth-child(3){
    min-width: 20rem;
  }

 

  input:nth-child(7){
    min-width: 6rem;
  }

  input:-webkit-autofill {
    background: ${props => props.theme["dark-10"]};
  }

  input{
    border-radius: 4px;
    border: 1px solid #475569;
    background: ${props => props.theme["dark-10"]};
    padding: 12px;

    &:valid{
      background: ${props => props.theme["dark-10"]};
      border-color: green;
    }
    }

    input:nth-child(4){
      min-width: 57.6rem;
      border: 1px solid #475569;
    }
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`

export const TransactionTypeButton = styled(RadioGroup.Item)`
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: #000;
  text-transform: uppercase;

  &[data-state='unchecked']:hover{
    background: #ccc;
  }

  &[data-state='checked']{
    color:  ${props => props.theme["dark-20"]};
    background: ${props => props.theme["$support-02"]};
  }
`

export const FotterFormContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    display: flex;
    gap: 6px
  }
  
  button{
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

    &:hover{
      filter: brightness(0.8);
    }

  }
`