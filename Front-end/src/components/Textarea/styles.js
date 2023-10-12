import { styled } from "styled-components"


export const Container = styled.textarea`
  width: 100%;
  height: 275px;

  font-size: 16px;
  font-weight: 400;

  background: ${({ theme }) => theme.COLORS.MID_GRAY};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;   // Property de "Textarea" que permite o usuário aumentar/diminuir o tamanho da caixinha; "none" desativa ela

  margin-bottom: 40px;
  border-radius: 10px;
  padding: 19px 16px;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.FONT_DARK_GRAY};
  }
`
