import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import { Container, Title, Content } from "./styles"

import { FiPlus } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Movie } from "../../components/Movie"



export function Home() {
 
  const [notes, setNotes] = useState([])

  const [search, setSearch] = useState("")

  const navigate = useNavigate()


  function handleDetails(id) {

    navigate(`/details/${id}`)
  }


  useEffect(() => {

    async function fetchNotes() {

      const response = await api.get(`/notes?title=${search}`)

      setNotes(response.data)
    }

    fetchNotes()

  }, [search])



  return(
    <Container>
      <Header onChange={ e => setSearch(e.target.value)}/>

      <Title>
        <h1>Meus filmes</h1>

        <Button title="Adicionar filme" icon={FiPlus} to="/new_movie" />
      </Title>
      
      <Content>
        {
          notes &&
          notes.map( note => (
            <Movie
              key={String(note.id)}  
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))
        }
      </Content>
    </Container>
  )
}
