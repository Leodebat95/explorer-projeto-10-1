import { styled } from "styled-components"


export const Container = styled.div`
  width: 630px;

  background: ${({ theme }) => theme.COLORS.MID_GRAY};

  display: flex;
  align-items: center;

  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 0 12px;
    border: 0;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    &:placeholder {
      font-size: 14px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.FONT_DARK_GRAY};
    }
  }

  > svg {
    margin-left: 20px;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.FONT_DARK_GRAY};
  }
`
