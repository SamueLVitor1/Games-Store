import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 2rem;
  position: relative;

  .closeButton{
    position: absolute;
    top: 6px;
    right: 6px;
    color: #ccc;
    transition: all 0.2s;
    cursor: pointer;

    &:hover{
      transform: scale(1.04);
      filter: brightness(0.7);
    }
  }

  img{
    width: 40rem;
    height:  225px;
    border-radius: 6px;
    object-fit: cover;
  }

  header{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 6px;
    margin-bottom: 2rem;

    h2{
      text-align: center;
      font-size: 3rem;
      font-weight: 600;
    }

    span{
      width: fit-content;
      padding: 0.5rem;
      border-radius: 4px;
      background: #1E1E1E;
      opacity: 0.8;
      font-size: 1.2rem;
    }
  }

  main p{
    font-size: 1.6rem;
    text-align: justify;
    margin-bottom: 3.9rem;
    opacity: 0.9;
  }

  footer{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 14px;

    h3{
      font-size: 3rem;
      font-weight: 400;
    }

#shape {
  stroke-width: 2px;
  fill: transparent;
  stroke: #009FFD;
  stroke-dasharray: 85 400;
  stroke-dashoffset: -220;
  transition: 1s all ease;
}

.svg-wrapper {
  font-size: 1.1rem;
  cursor: pointer;
  border: 0;
  background: transparent;
  align-self: center;
}

.svg-wrapper:hover #shape {
  stroke-dasharray: 50 0;
  stroke-width: 3px;
  stroke-dashoffset: 0;
  stroke: #06D6A0;
}

#shape {
  stroke-width: 6px;
  fill: transparent;
  stroke: #009FFD;
  stroke-dasharray: 85 400;
  stroke-dashoffset: -220;
  transition: 1s all ease;
}
  }
`


