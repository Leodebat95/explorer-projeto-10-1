import { styled } from "styled-components"
import { Link } from "react-router-dom"


export const Container = styled(Link)`
  main {
    width: 100%;
    background: ${({ theme }) => theme.COLORS.BROWN};

    border: none;
    border-radius: 16px;

    padding: 32px;
    margin-bottom: 24px;

    cursor: pointer;
  }

  & {
    filter: brightness(0.8);
    transition: filter 0.2s;
  }
    // & --- o seletor "&" faz referência à si mesmo
  
  &:hover {
    filter: brightness(1);
  }

  h3 {
    flex: 1;    // flex: 1 --- o campo ocupa o máx. possível de espaço
    text-align: left;

    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 8px;
  }

  div {
    display: flex;
    flex-direction: flex-start;
    margin-bottom: 15px;
  }

  p {
    max-height: 60px;
    overflow-y: auto;
    text-align: justify;

    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.FONT_GOLD};

    &::-webkit-scrollbar {
      width: 6px;
      border: none;
      outline: none;
    }

    &::-webkit-scrollbar-track {
      background: transparent; 
    }
    
    &::-webkit-scrollbar-thumb {
      background: hsl(6.09deg 14.45% 30.96% / 44%);
      min-height: 30px;

      border: none;
      border-radius: 8px;
      outline: none;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: hsl(6.09deg 14.45% 30.96% / 44%);
    }
  }

  footer {
    width: 100%;
    display: flex;
    margin-top: 30px;

    > div {
      margin-bottom: 0;
    }
  }
`
