import { Container } from "./styles"


export function Textarea({ value, ...rest }) {

  return(
    <Container id="textarea" {...rest}>
      {value}
    </Container>
  )
}
