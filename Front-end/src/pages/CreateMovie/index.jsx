import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import { FiArrowLeft } from "react-icons/fi"

import { Container, Form } from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Textarea } from "../../components/Textarea"
import { Section } from "../../components/Section"
import { MovieItem } from "../../components/MovieItem"



export function CreateMovie() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()


  function handleAddTag() {

    setTags( prevState => [...prevState, newTag])

    setNewTag("")
  }


  function handleRemoveTag(deleted) {

    setTags( prevState => prevState.filter( singleTag => singleTag !== deleted))
  }


  async function handleNewNote() {

    if(!title) {

      return alert("Digite o título da nota.")
    }


    if(!rating) {

      return alert("Preencha a avaliação do filme.")
    }

    if(rating < 1 || rating > 5) {
      
      return alert("A nota da avaliação deve estar entre 1 e 5.")
    }

    if(Number(rating) % 1 !== 0) {

      return alert("A nota da avaliação deve ser um número inteiro.")
    }
    

    if(newTag) {

      return alert("Você deixou uma tag no campo para adicionar,\nmas não clicou em adicionar.\n\nClique para adicionar ou deixe o campo vazio.")
    }
    
    await api.post("/notes", {
      title,
      description,
      rating,
      tags
    })
    
    alert('Nota criada com sucesso!'),

    navigate(-1)
  }


  function handleBack() {

    navigate(-1)
  }



  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText title="Voltar" icon={FiArrowLeft} id="button-text" onClick={handleBack} />

            <h1>Novo filme</h1>
          </header>

          <div id="inline-inputs">
            <Input
              placeholder="Título"
              onChange={ e => setTitle(e.target.value)}
            />

            <Input 
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              onChange={ e => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={ e => setDescription(e.target.value)}
          />

          <Section id="section" title="Marcadores">
            <div id="external-bkg">
              {
                tags.map( (tag, index) => (
                  <MovieItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <MovieItem
                isNew
                placeholder="Novo marcador"
                value={newTag}
                onChange={ e => setNewTag(e.target.value)}
                onClick={handleAddTag} 
              />
            </div>
          </Section>

          <div id="final-button">
            <Button
              title="Salvar alterações"
              onClick={handleNewNote}
            />
          </div>
        </Form>
      </main>
    </Container>
  )
}
