/* Importa o arquivo base de CSS de App.jsx */
import './App.css'

/* Importa o compoente de BookCard */
import BookCard from './components/BookCard'

/* Objeto de imagem para teste de insercão de imagem */
import cavernas from './assets/cavernas_aco.jpg'

function App() {
  return (
    <>
      <div>

        {/* Chamada do componente de BookCard com passagem de dados por meio de props */}
        <BookCard 
          titulo='As Cavernas de Aço'
          autor='Isaac Azimov'
          imagem={cavernas}
        />

      </div>
    </>
  )
}

export default App