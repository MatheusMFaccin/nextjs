import styles from './Cadastro.module.css'
import React from 'react'

type Props = {
    classNome: string;
    text: string
    id: string
  }

const botao: React.FC<Props> = ( {text,classNome,id})=>{
    const uniqueClass = `button-${Math.random().toString(36).substring(7)}`;
    return(
        <button id={id} className={`${classNome} ${styles.buttonComponent} `}>{text}</button>
    )
}

export default botao