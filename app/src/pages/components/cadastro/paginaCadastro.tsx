import styles from './Cadastro.module.css'
import Botao from './Botao'
import Input from './Input'
import axios from 'axios';
import { ChangeEvent, Component, FormEvent, use, useState } from 'react'

export default function Cadastro(){

    const inputCor = "bg-zinc-500"
    const placeholderSenha = "digite sua senha"
    const placeholderNome = "digite seu nome"
    const placeholderEmail = "digite seu email"
    const Cadastrar = "Cadastrar"
    const Login = "Ir Para Login"

    const [isHovered, setIsHovered] = useState(false);
    const [nome, setInputNome] = useState("");
    const [senha, setInputSenha] = useState("");
    const [email, setInputEmail] = useState("");



    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    async function handleSubmit (event: FormEvent){
        event.preventDefault()
        const usuario = {
            nome,
            email,
            senha,
        }
        try {
            // Enviar a requisição POST para a API
            const usuarioJson = JSON.stringify(usuario);
            await axios.post( "http://localhost:5000/api/tabela", usuarioJson, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
                
        
            console.log(usuarioJson)
            console.log('Dados enviados com sucesso');
          } catch (error) {
            // Erro: exibir mensagem de erro ou lidar com o erro de alguma forma
            console.error('Erro ao enviar os dados:', error);
          }
    
        
    }
    
    const handleChangeNome = (event: ChangeEvent<HTMLInputElement>) =>{
        setInputNome(event.target.value);
    }
    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) =>{
        setInputEmail(event.target.value);
    }
    const handleChangeSenha = (event: ChangeEvent<HTMLInputElement>) =>{
        setInputSenha(event.target.value);
    }

    return (
        <div className={`bg-zinc-700 text-zinc-200 ${styles.conteiner}`}>
            <form onSubmit={handleSubmit}>
                <div className={`${styles.itens}`}>          
                    
                    <input type="text" value={nome}  onChange={handleChangeNome} className={`bg-zinc-500 ${styles.input}`} placeholder={placeholderNome} /> 
                    
                </div>
                <div className={`${styles.itens}`}>   
                    <input type="text" value={email} onChange={handleChangeEmail}  className={`bg-zinc-500 ${styles.input}`} placeholder={placeholderEmail} />

                </div>
                <div className={`${styles.itens}`}>
                    <input type="text" value={senha} onChange={handleChangeSenha} className={`bg-zinc-500 ${styles.input}`} placeholder={placeholderSenha} />
                     
                </div>
                <div className={`${styles.itens}`}>
                    <div className='container'>
                        <div className='inline-block'>
                            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  href='/login' className={`${styles.botaoLogin} bg-sky-600`}>ir para Login</a>
                        </div>
                        <div className='inline-block'>
                            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} type="submit" className={`bg-green-600 ${styles.botaoCadastrar}`}>Cadastrar</button>            
                        </div>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}