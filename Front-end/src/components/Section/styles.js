import { styled } from "styled-components"


export const Container = styled.section`
  margin: 40px 0;

  > h2 {
    margin-bottom: 24px;

    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GOLD};
  }
`
