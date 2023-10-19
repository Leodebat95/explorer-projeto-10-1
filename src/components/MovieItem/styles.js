import { styled } from "styled-components"


export const Container = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 400;

  background: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.MID_GRAY};
  color: ${({ theme, isNew }) => isNew ? theme.COLORS.FONT_DARK_GRAY : theme.COLORS.WHITE};

  border: ${({ theme, isNew }) => isNew ? `3px dashed ${theme.COLORS.FONT_DARK_GRAY}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  > button {
    background: none;
    border: none;

    display: flex;
    align-items: center;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }

  > input {
    height: ${({ theme, isNew }) => isNew ? "50px" : "56px"};
    width: 180px;
    max-width: auto;

    padding: 0 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
  }

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.FONT_DARK_GRAY};
  }
`
