import { styled } from "styled-components"
import backgroundImg from "../../assets/background.png"


export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`


export const Form = styled.form`
  padding: 0 140px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    font-weight: 500;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.FONT_MID_GRAY};
  }

  > #inputs {
    width: 340px;
    margin-bottom: 9px;
  }
  
  #buttons {    
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    width: 100%;
    align-self: center;
  }

  #button-text {
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    margin-top: 42px;

    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.PINK};

    > svg {
      transform: scale(1.1);
    }
  }
`


export const Background = styled.div`
  width: 800px;

  flex: 1;    // o campo ocupa todo o espaço disponível

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
