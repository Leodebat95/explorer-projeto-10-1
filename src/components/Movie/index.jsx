import { Container } from "./styles"

import { Tag } from "../Tag"
import { Rating } from "../Rating"


export function Movie({ data, ...rest }) {

  return(
    <Container {...rest}>
      <main id="movie-main-container">
        <h3>{data.title}</h3>

        {
          data.rating &&
          <Rating grade={data.rating} />
        }

        <p>{data.description}</p>

        {
          data.tags &&
          <footer>
            {
              data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
            }
          </footer>
        }
      </main>
    </Container>
  )
}
