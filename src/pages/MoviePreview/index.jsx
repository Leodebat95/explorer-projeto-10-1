import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Container, Content } from './styles'

import { FiArrowLeft } from "react-icons/fi"
import { HiOutlineClock } from "react-icons/hi2"

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Rating } from '../../components/Rating'
import { Tag } from '../../components/Tag'



export function MoviePreview() {

  const { user } = useAuth()
  
  const [data, setData] = useState(null)

  const params = useParams()
  
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


  function handleBack() {

    navigate(-1)
  }


  async function handleRemove() {

    const confirm = window.confirm("Deseja realmente remover o filme?")
    
    if(confirm) {

      await api.delete(`/notes/${params.id}`)
      
      navigate(-1)
    }
  }


  useEffect(() => {

    async function fetchNote() {

      const response = await api.get(`/notes/${params.id}`)
      
      setData(response.data)
    }

    fetchNote()
  }, [])



  return(
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <header>
              <ButtonText title="Voltar" icon={FiArrowLeft} id="button-text" onClick={handleBack} />

              <div className="movie-name">
                <h1 id="movie-title">
                  {data.title}
                </h1>

                <div id="stars">
                  <Rating grade={data.rating} />
                </div>
              </div>

              <div className="name-date">
                <img
                  src={avatarUrl}
                  alt={user.name}                 
                />

                <h2>Por {user.name}</h2>

                <HiOutlineClock />

                <h2>{data.updated_at}</h2>
              </div>
            </header>

            <div id="tags">
              {
                data.tags &&
                data.tags.map( tag => (
                  
                  <Tag
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))
              }
            </div>

            <p id="synopsis">
              {data.description}
            </p>

            <div id="final-button">
              <Button
                id="black-btn"
                title="Excluir filme"
                onClick={handleRemove}
              />
            </div>
          </Content>
        </main>
      }
    </Container>
  )
}
