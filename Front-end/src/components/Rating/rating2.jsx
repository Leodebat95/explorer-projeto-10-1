import { Container } from "./styles"
import { IoStar, IoStarOutline } from "react-icons/io5"


export function Rating({...rest}) {
  
  const ratingOne = () => {
    if(document.getElementById("star-1").classList == 'hidden') {

      document.getElementById("empty-1").setAttribute('class', 'hidden')
      document.getElementById("star-1").setAttribute('class', '')

      document.getElementById("empty-2").setAttribute('class', '')
      document.getElementById("star-2").setAttribute('class', 'hidden')

      document.getElementById("empty-3").setAttribute('class', '')
      document.getElementById("star-3").setAttribute('class', 'hidden')

      document.getElementById("empty-4").setAttribute('class', '')
      document.getElementById("star-4").setAttribute('class', 'hidden')

      document.getElementById("empty-5").setAttribute('class', '')
      document.getElementById("star-5").setAttribute('class', 'hidden')

    } else if(document.getElementById("empty-1").classList == 'hidden') {
      document.getElementById("star-1").setAttribute('class', 'hidden')
      document.getElementById("empty-1").setAttribute('class', '')
      
      document.getElementById("star-2").setAttribute('class', 'hidden')
      document.getElementById("empty-2").setAttribute('class', '')
      
      document.getElementById("star-3").setAttribute('class', 'hidden')
      document.getElementById("empty-3").setAttribute('class', '')
      
      document.getElementById("star-4").setAttribute('class', 'hidden')
      document.getElementById("empty-4").setAttribute('class', '')
      
      document.getElementById("star-5").setAttribute('class', 'hidden')
      document.getElementById("empty-5").setAttribute('class', '')
    }
  }

  const ratingTwo = () => {
    if(document.getElementById("star-2").classList == 'hidden') {

      document.getElementById("empty-1").setAttribute('class', 'hidden')
      document.getElementById("star-1").setAttribute('class', '')

      document.getElementById("empty-2").setAttribute('class', 'hidden')
      document.getElementById("star-2").setAttribute('class', '')

      document.getElementById("empty-3").setAttribute('class', '')
      document.getElementById("star-3").setAttribute('class', 'hidden')

      document.getElementById("empty-4").setAttribute('class', '')
      document.getElementById("star-4").setAttribute('class', 'hidden')

      document.getElementById("empty-5").setAttribute('class', '')
      document.getElementById("star-5").setAttribute('class', 'hidden')

    } else if(document.getElementById("empty-2").classList == 'hidden') {
      document.getElementById("star-1").setAttribute('class', 'hidden')
      document.getElementById("empty-1").setAttribute('class', '')
      
      document.getElementById("star-2").setAttribute('class', 'hidden')
      document.getElementById("empty-2").setAttribute('class', '')
      
      document.getElementById("star-3").setAttribute('class', 'hidden')
      document.getElementById("empty-3").setAttribute('class', '')
      
      document.getElementById("star-4").setAttribute('class', 'hidden')
      document.getElementById("empty-4").setAttribute('class', '')
      
      document.getElementById("star-5").setAttribute('class', 'hidden')
      document.getElementById("empty-5").setAttribute('class', '')
    }
  }

  const ratingThree = () => {
    if(document.getElementById("star-3").classList == 'hidden') {

      document.getElementById("empty-1").setAttribute('class', 'hidden')
      document.getElementById("star-1").setAttribute('class', '')

      document.getElementById("empty-2").setAttribute('class', 'hidden')
      document.getElementById("star-2").setAttribute('class', '')

      document.getElementById("empty-3").setAttribute('class', 'hidden')
      document.getElementById("star-3").setAttribute('class', '')

      document.getElementById("empty-4").setAttribute('class', '')
      document.getElementById("star-4").setAttribute('class', 'hidden')

      document.getElementById("empty-5").setAttribute('class', '')
      document.getElementById("star-5").setAttribute('class', 'hidden')

    } else if(document.getElementById("empty-3").classList == 'hidden') {
      document.getElementById("star-1").setAttribute('class', 'hidden')
      document.getElementById("empty-1").setAttribute('class', '')
      
      document.getElementById("star-2").setAttribute('class', 'hidden')
      document.getElementById("empty-2").setAttribute('class', '')
      
      document.getElementById("star-3").setAttribute('class', 'hidden')
      document.getElementById("empty-3").setAttribute('class', '')
      
      document.getElementById("star-4").setAttribute('class', 'hidden')
      document.getElementById("empty-4").setAttribute('class', '')
      
      document.getElementById("star-5").setAttribute('class', 'hidden')
      document.getElementById("empty-5").setAttribute('class', '')
    }
  }

  const ratingFour = () => {
    if(document.getElementById("star-4").classList == 'hidden') {

      document.getElementById("empty-1").setAttribute('class', 'hidden')
      document.getElementById("star-1").setAttribute('class', '')

      document.getElementById("empty-2").setAttribute('class', 'hidden')
      document.getElementById("star-2").setAttribute('class', '')

      document.getElementById("empty-3").setAttribute('class', 'hidden')
      document.getElementById("star-3").setAttribute('class', '')

      document.getElementById("empty-4").setAttribute('class', 'hidden')
      document.getElementById("star-4").setAttribute('class', '')

      document.getElementById("empty-5").setAttribute('class', '')
      document.getElementById("star-5").setAttribute('class', 'hidden')

    } else if(document.getElementById("empty-4").classList == 'hidden') {
      document.getElementById("star-1").setAttribute('class', 'hidden')
      document.getElementById("empty-1").setAttribute('class', '')
      
      document.getElementById("star-2").setAttribute('class', 'hidden')
      document.getElementById("empty-2").setAttribute('class', '')
      
      document.getElementById("star-3").setAttribute('class', 'hidden')
      document.getElementById("empty-3").setAttribute('class', '')
      
      document.getElementById("star-4").setAttribute('class', 'hidden')
      document.getElementById("empty-4").setAttribute('class', '')
      
      document.getElementById("star-5").setAttribute('class', 'hidden')
      document.getElementById("empty-5").setAttribute('class', '')
    }
  }

  const ratingFive = () => {
    if(document.getElementById("star-5").classList == 'hidden') {

      document.getElementById("empty-1").setAttribute('class', 'hidden')
      document.getElementById("star-1").setAttribute('class', '')

      document.getElementById("empty-2").setAttribute('class', 'hidden')
      document.getElementById("star-2").setAttribute('class', '')

      document.getElementById("empty-3").setAttribute('class', 'hidden')
      document.getElementById("star-3").setAttribute('class', '')

      document.getElementById("empty-4").setAttribute('class', 'hidden')
      document.getElementById("star-4").setAttribute('class', '')

      document.getElementById("empty-5").setAttribute('class', 'hidden')
      document.getElementById("star-5").setAttribute('class', '')

    } else if(document.getElementById("empty-5").classList == 'hidden') {
      document.getElementById("star-1").setAttribute('class', 'hidden')
      document.getElementById("empty-1").setAttribute('class', '')
      
      document.getElementById("star-2").setAttribute('class', 'hidden')
      document.getElementById("empty-2").setAttribute('class', '')
      
      document.getElementById("star-3").setAttribute('class', 'hidden')
      document.getElementById("empty-3").setAttribute('class', '')
      
      document.getElementById("star-4").setAttribute('class', 'hidden')
      document.getElementById("empty-4").setAttribute('class', '')
      
      document.getElementById("star-5").setAttribute('class', 'hidden')
      document.getElementById("empty-5").setAttribute('class', '')
    }
  }
  

  return(
    <Container {...rest}>
      <button
        id="rating-1"
        type="button"
        onClick={ratingOne}
      >
        {<IoStar id="star-1" className="hidden" />}
        {<IoStarOutline id="empty-1" /> }
      </button>

      <button
        id="rating-2"
        type="button"
        onClick={ratingTwo}
      >
        {<IoStar id="star-2" className="hidden" />}
        {<IoStarOutline id="empty-2" /> }
      </button>

      <button
        id="rating-3"
        type="button"
        onClick={ratingThree}
      >
        {<IoStar id="star-3" className="hidden" />}
        {<IoStarOutline id="empty-3" /> }
      </button>

      <button
        id="rating-4"
        type="button"
        onClick={ratingFour}
      >
        {<IoStar id="star-4" className="hidden" />}
        {<IoStarOutline id="empty-4" /> }
      </button>

      <button
        id="rating-5"
        type="button"
        onClick={ratingFive}
      >
        {<IoStar id="star-5" className="hidden" />}
        {<IoStarOutline id="empty-5" /> }
      </button>
    </Container>
  )
}

// setAttribute('attributeName', 'value') --- Method que adiciona um atributo e seu respectivo valor, à um elemento; são escritos em String
