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

  > #inputs:nth-child(5) {
    margin-bottom: 0;
  }

  #pink-button {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 24px;
  }
 
  a {
    align-self: center;
  }

  #button-text {
    margin-top: 42px;

    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`


export const Background = styled.div`
  width: 800px;

  flex: 1;    // o campo ocupa todo o espaço disponível

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
