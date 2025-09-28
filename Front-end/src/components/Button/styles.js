import { styled } from "styled-components"
import { Link } from "react-router-dom"


export const Container = styled(Link)`
   width: 100%;
   background-color: ${({ theme }) => theme.COLORS.PINK};

   color: ${({ theme }) => theme.COLORS.DARK_GRAY};
   font-weight: 500;

   height: 56px;
   padding: 0 16px;
   margin-top: 16px;

   border: 0;
   border-radius: 10px;

   &:disabled {
      opacity: 0.5;
   }
`
