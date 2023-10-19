import { Container } from "./styles"
import { IoStar, IoStarOutline } from "react-icons/io5"



export function Rating({ grade }) {

  let stars = []

  for (let starPosition = 1; starPosition <= 5; starPosition++) {
    
    if(starPosition <= grade) {

      stars.push(<IoStar key={starPosition} />)

    } else {

      stars.push(<IoStarOutline key={starPosition} />)
    }
  }



  return(
    <Container>
      {stars}
    </Container>
  )
}
  // push() --- Method que adiciona novos itens logo após o último item de um array (são adicionados na sequência dele)
