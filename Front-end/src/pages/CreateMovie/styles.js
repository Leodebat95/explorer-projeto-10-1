import styled from "styled-components"


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;

    header {
      display: block;

      > h1 {
        font-size: 36px;
        font-weight: 500;
        
        margin-top: 24px;
        margin-bottom: 40px;
      }
    }

    #inline-inputs {
      display: flex;
      justify-content: center;

      gap: 40px;
      margin-bottom: 40px;

      > #inputs input {
        width: 450px;
        padding: 0 24px;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    #textarea {
      min-width: 800px;
      padding: 18px 24px;
    }

    #button-text {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 6px;
      font-weight: 400;

      > svg {
        transform: scale(0.9)
      }
    }

    &::-webkit-scrollbar {
      width: 8px;
      border: none;
      outline: none;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background: transparent;
      max-height: 50%;

      border: none;
      border-radius: 8px;
      outline: none;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: transparent;
    }
  }
`


export const Form = styled.form`
  margin: 40px 123px 80px;

  section {
    margin: 0;

    h2 {
      color: ${({ theme }) => theme.COLORS.FONT_GOLD};
      font-weight: 400;
      font-size: 20px;
    }
  }

  #external-bkg {
    max-width: 100%;
    min-height: 88px;

    background: ${({ theme }) => theme.COLORS.BLACK};

    border: none;
    border-radius: 8px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 24px;

    padding: 16px;
    margin-bottom: 40px;
  }

  #final-button {
    display: flex;
    justify-content: center;

    a {
      margin: 0;
      max-width: 460px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      margin: 0;
    }
  }
`
