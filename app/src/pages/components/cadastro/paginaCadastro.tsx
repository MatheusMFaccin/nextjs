import styles from './Cadastro.module.css'
import Botao from './Botao'
import Input from './Input'
import { Component, useState } from 'react'

export default function Cadastro(){

    const inputCor = "bg-zinc-500"
    const placeholderSenha = "digite sua senha"
    const placeholderNome = "digite seu nome"
    const placeholderEmail = "digite seu email"
    const Cadastrar = "Cadastrar"
    const Login = "Ir Para Login"

    const [isHovered, setIsHovered] = useState(false);

    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={`bg-zinc-700 text-zinc-200 ${styles.conteiner}`}>
            <div className={`${styles.itens}`}>          
                <Input cor = {inputCor} placeholder ={placeholderNome} /> 

            </div>
            <div className={`${styles.itens}`}>   
                <Input cor = {inputCor} placeholder ={placeholderEmail} /> 

            </div>
            <div className={`${styles.itens}`}>
                <Input cor = {inputCor} placeholder ={placeholderSenha} /> 
            </div>
            <div className={`${styles.itens}`}> 
                <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  href='/login' className={`${styles.botaoLogin} bg-sky-600`}>ir para Login</a>
                
                <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`bg-green-600 ${styles.botaoCadastrar}`}>Cadastrar</button>

            </div>
            
        </div>
    )
}