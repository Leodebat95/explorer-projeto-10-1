import { styled } from "styled-components"


export const Container = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.WHITE};

  background: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  padding: 5px 16px;
  margin-right: 8px;

  border-radius: 8px;
`
