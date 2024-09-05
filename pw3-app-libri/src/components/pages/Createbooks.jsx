import React from 'react'

import style from './Createbooks.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Button from '../form/Button'

const Createbooks = () => {
    return (
        <section className={style.create_book_container}>
            
            <h1>CADASTRO DE LIVROS</h1>

            <Input 
                    type='text'
                    name='nome_livro'
                    id='nome_livro'
                    placeholder='Digite o título do livro'
                    text='Digite o título do livro'/>

            <Input 
                    type='text'
                    name='autor_livro'
                    id='autor_livro'
                    placeholder='Digite o nome do autor'
                    text='Digite o nome do autor'/>

            <Input 
                    type='text'
                    name='descricao_livro'
                    id='descricao_livro'
                    placeholder='Digite uma descrição para  livro'
                    text='Descrição'/>
            
            <Select 
                    name="categoria_id"
                    text="Selecione a categoria do livro"
            />

            <Button 
            rotulo='Cadastrar livro'/>

        </section>
    )
}

export default Createbooks
