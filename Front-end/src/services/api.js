// api --- arq. pra guardar as configurações do Axios


import axios from "axios"

export const api = axios.create({

  baseURL: 'http://localhost:3333'
})
