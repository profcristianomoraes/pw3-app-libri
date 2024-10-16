import style from './BookCard.module.css'

import Button from './Button'

const BookCard = ({cod_livro, titulo, autor, imagem})=>{

    return(
        <div className={style.bookCard}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.autor}>{autor}</p>
            <img src={imagem} alt="Capa: Cavernas de Aço" />
            <Button label='DETALHES' />
        </div>
    )

}

export default BookCard