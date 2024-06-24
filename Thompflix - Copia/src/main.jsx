import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider	 } from 'react-router-dom'
import Filmes from './Pages/Filmes.jsx'

import Favoritos from './Pages/Favoritos.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import Home from './Pages/Home.jsx'
import DetalhesFilme from './Pages/DetalhesFilme.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {index:true, element: <Home/>},
      {path: "filmes", element:<Filmes/>},
      {path: "filmes/:id", element:<DetalhesFilme/>},
      {path: "Favoritos", element:<Favoritos/>},
      {path: "#", element:<PageNotFound/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
