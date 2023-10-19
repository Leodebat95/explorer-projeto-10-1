import { Container, Profile } from "./styles"
import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom"
import { useAuth } from '../../hooks/auth'

import { api } from "../../services/api"

import { ButtonText } from  "../ButtonText"
import { Input } from  "../Input"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"



export function Header({ onChange }) {

  const { signOut, user } = useAuth()

  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


  function handleSignOut() {

    navigate("/")
    
    signOut()
  }



  return(
    <Container>
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>

      <Input
        placeholder="Pesquisar pelo título"
        onChange={onChange}
      />
      
      <Profile>
        <div>
          <Link to="/profile">
            <span>{user.name}</span>
          </Link>

          <ButtonText title="sair" onClick={handleSignOut} />
        </div>
        
        <Link to="/profile">
          <img
            src={avatarUrl}
            alt={user.name}
          />
        </Link>
      </Profile>
    </Container>
  )
}
