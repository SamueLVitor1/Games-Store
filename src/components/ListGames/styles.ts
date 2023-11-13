import styled from "styled-components";

export const ListContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 10rem;

  img{
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 4px;

    &:hover{
      transform: scale(1.05);
    }
  }

`

