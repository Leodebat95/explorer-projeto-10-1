import { styled } from "styled-components"


export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width:100%;

  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.PINK};

  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

  display:flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 123px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > #inputs input {
    padding: 0 24px;
  }
`


export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 18px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      font-size: 14px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.FONT_DARK_GRAY};
    }
  }
`
