import React from 'react'

/* IMPORTAÇÃO DA STATE */
import { useState } from 'react'

import style from './Createbooks.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Button from '../form/Button'

const Createbooks = () => {

        /* STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DE LIVRO */
        const [book, setBook] = useState({})

        /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
        function handlerChangeBook(event) {
                setBook({...book, [event.target.name] : event.target.value});
                console.log(book)
        }

        /* INSERÇÃO DOS DADOS DE LIVRO */
        function createBook(book) {
        
                // console.log(JSON.stringify(book))
        
                fetch('http://localhost:5000/inserirLivro', {
                        method:'POST',
                        mode:'cors',
                        headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin':'*',
                        'Access-Control-Allow-Headers':'*'
                        },
                        body: JSON.stringify(book)
                })
                .then(
                        (resp)=>resp.json()
                )
                .then(
                        (data)=>{
                        console.log(data);
                        // navigate('/livros',{state:'LIVRO CADASTRADO COM SUCESSO!'});
                        }
                )
                .catch(
                        (err)=>{ console.log(err) }
                )
        }

        /* FUNÇÃO DE SUBMIT */
        function submit(event) {
                event.preventDefault();
                createBook(book);
        }

        return (
                <section className={style.create_book_container}>
                        
                        <h1>CADASTRO DE LIVROS</h1>

                        <form onSubmit={submit}>

                                <Input 
                                        type='text'
                                        name='nome_livro'
                                        id='nome_livro'
                                        placeholder='Digite o título do livro'
                                        text='Digite o título do livro'
                                        handlerOnchange={handlerChangeBook}/>

                                <Input 
                                        type='text'
                                        name='autor_livro'
                                        id='autor_livro'
                                        placeholder='Digite o nome do autor'
                                        text='Digite o nome do autor'
                                        handlerOnchange={handlerChangeBook}/>

                                <Input 
                                        type='text'
                                        name='descricao_livro'
                                        id='descricao_livro'
                                        placeholder='Digite uma descrição para  livro'
                                        text='Descrição'
                                        handlerOnchange={handlerChangeBook}/>
                                
                                <Select 
                                        name="categoria_id"
                                        text="Selecione a categoria do livro"
                                />

                                <Button 
                                rotulo='Cadastrar livro'/>

                        </form>

                </section>
        )
        }

export default Createbooks
