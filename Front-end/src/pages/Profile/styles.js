import styled from "styled-components"


export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BROWN};

    display: flex;
    align-items: center;

    padding: 0 144px;

    #button-text {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;

      font-size: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.PINK};

      > svg {
        transform: scale(1.1);
      }
    }
  }
`


export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }

  #buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 24px;
  }

  > #inputs {
    width: 340px;
    margin-bottom: 9px;
  }
`


export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 64px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
    }
  }
`
