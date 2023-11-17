import styled from "styled-components";

interface IconProps {
  iconName: string;
}

export const DeliveyContainer = styled.div`
  margin: 8rem 10rem;
  display: flex;
  gap: 10rem;

  img{
    margin-bottom: -7rem;
  }
  

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

    main{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;

      width: 100%;
      height: 100%;
      padding: 3rem;
      border-radius: 6px 36px;
      border: 1px solid #DBAC2C;

      div{
        max-width: 31rem;
        display: flex;
        align-items: center;
        gap: 12px;

        p{
          color: #ccc;
          filter: brightness(0.8);
          font-size: 15px;
          font-style: normal;
          font-weight: 400;

          span{        
            color: #fff;
            filter: brightness(1);
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 130%;
          }
        }


      }
    }
  }
`

export const IconPD = styled.div<IconProps>`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 1000px;
  background: ${props => 
  props.iconName === 'MapPin' && '#8047F8'  ||
  props.iconName === 'Timer' && '#DBAC2C' ||
  props.iconName === 'CurrencyDollarSimple' && '#C47F17' 
} ;
`