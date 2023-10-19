import styled from "styled-components"


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";
  
  main {
    grid-area: content;
    overflow-y: auto;

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


export const Content = styled.div`
  margin: 40px 123px 120px;

  display: flex;
  flex-direction: column;

  #movie-main-container {
    background: transparent;
    padding: 0;
    margin: 0;
    cursor: auto;

    div {
      margin: 0;
    }
  }

  #button-text {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;

    gap: 6px;
    font-weight: 400;

    margin-bottom: 24px;

    svg {
      transform: scale(0.9)
    }
  }
  
  .movie-name {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 24px;

    #movie-title {
      font-size: 36px;
      font-weight: 500;
      
      width: fit-content;
      background: transparent;
      margin: 0 0 8px 0;
      padding: 0;

      border: none;
      border-radius: 0;

      filter: none;
      transition: none;
      cursor: default;
    }

    #stars {
      margin: 0;
      padding: 0;
      background: transparent;

      border: none;
      border-radius: 0;

      filter: none;
      transition: none;
      cursor: auto;

      h3 {
        margin: 0;
      }

      svg {
        font-size: 20px;
        margin: 0;
      }
    }
  }

  .name-date {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 40px;

    img {
      width: 18px;
      height: 18px;

      border: 1px solid ${({ theme }) => theme.COLORS.FONT_GOLD};
      border-radius: 50%;
    }

    svg {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-left: 12px;
    }

    > h2 {
      font-size: 16px;
      font-weight: 400;
    }
  }

  #tags {
    display: flex;
    flex-direction: row;

    filter: none;
    transition: none;
    cursor: auto;
    
    > div {
      color: ${({ theme }) => theme.COLORS.FONT_LIGHT_GRAY};
      background: ${({ theme }) => theme.COLORS.BROWN};
      padding: 8px 16px;
      margin-right: 12px;
      margin-bottom: 0;
    }
  }
  
  #synopsis {
    width: fit-content;
    background: transparent;

    font-size: 16px;
    font-weight: 400;

    line-height: 30px;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.FONT_GOLD};

    margin: 40px 0 0 0;
    padding: 0;

    border: none;
    border-radius: 0;

    filter: none;
    transition: none;
    cursor: auto;

    p {
      max-height: none;
      overflow-y: visible;
    }
  }

  #final-button {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    a {
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      margin: 0;
    }

    #black-btn {
      background: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.PINK};

      max-width: 460px;

      filter: brightness(0.7);
      transition: filter 0.2s;
    }

    #black-btn:hover {
      filter: brightness(1.1);
    }
  }
`
