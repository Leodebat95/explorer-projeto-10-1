import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"
import { MoviePreview } from "../pages/MoviePreview"
import { CreateMovie } from "../pages/CreateMovie"



export function AppRoutes() {

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new_movie" element={<CreateMovie />} />
      <Route path="/details/:id" element={<MoviePreview />} />
    </Routes>
  )
}
