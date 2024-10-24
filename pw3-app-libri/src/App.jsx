/* Importa os componentes de navegação */
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Importa o arquivo base de CSS de App.jsx */
import './App.css'

/* Importa o compoente de BookCard */
// import BookCard from './components/BookCard'

/* Importa o compoente de NavBar */
import NavBar from './components/layout/NavBar'

/* Importa o compoente de Container */
import Container from './components/layout/Container'

/* Importa o componente de página de HOME */
import Home from './components/pages/Home'

/* Importa o componente de página de CREATE BOOKS */
import Createbooks from './components/pages/Createbooks'

/* Importa o componente de página de LIST BOOKS */
import ListBooks from './components/pages/ListBooks'

/* Importa o componente de página de DETAIL BOOK */
import DetailBook from './components/pages/DetailBook'


/* Objeto de imagem para teste de insercão de imagem */
// import cavernas from './assets/cavernas_aco.jpg'

function App() {
  return (
    <>

      {/* Chamada do componente de BookCard com passagem de dados por meio de props */}
      {/* <BookCard 
        titulo='As Cavernas de Aço'
        autor='Isaac Azimov'
        imagem={cavernas}
      /> */}

      {/* Chamada do componente de NavBar */}
      {/* <NavBar /> */}

        {/* <img className='book_home' src="./book_home.jpg" alt="" /> */}
        {/* <Home /> */}
        {/* <Createbooks /> */}
        {/* <ListBooks /> */}

        {/* ESTRUTURA DE ROTAS/NAVEGAÇÃO */}
        <BrowserRouter>

        <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>

                  <Route path='/' element={<Home />} />
                  <Route path='/listBook' element={<ListBooks />} />
                  <Route path='/newBook' element={<Createbooks />} />
                  <Route path='/detailBook/:id' element={<DetailBook />} />

              </Route>

            </Routes>

        </Container>

        </BrowserRouter>


    </>
  )
}

export default App